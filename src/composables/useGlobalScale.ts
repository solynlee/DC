import { ref } from 'vue'

// 全局比例缩放配置
const SCALE_CONFIG = {
  baseWidth: 1684,   // 设计稿基准宽度
  minWidth: 120,     // 启用缩放的最小宽度
  minScale: 0.1,     // 最小缩放比例
  scaleThreshold: 0.02 // 2%缩放变化阈值，防止无限循环
}

// 全局缩放状态
const scaleRatio = ref(1)
const isProportionalScaling = ref(false)

// 存储清理函数
let cleanupResize: (() => void) | null = null

// 防止移动端Safari无限循环的状态管理
let lastScaleValue: number = 1
let lastWindowWidth: number = 0
let lastWindowHeight: number = 0

// 检测浏览器类型
const getBrowserInfo = () => {
  const ua = navigator.userAgent
  return {
    isSafari: /Safari/.test(ua) && !/Chrome/.test(ua) && !/Edg/.test(ua),
    isFirefox: /Firefox/.test(ua),
    isChrome: /Chrome/.test(ua) && !/Edg/.test(ua),
    isEdge: /Edg/.test(ua),
    isMobile: /iPhone|iPad|iPod|Android|Mobile/.test(ua),
    isIOS: /iPhone|iPad|iPod/.test(ua),
    // 精确检测iOS Safari（排除夸克等其他iOS浏览器）
    isIOSSafari: /iPhone|iPad|iPod/.test(ua) && /Safari/.test(ua) && !/Chrome/.test(ua) && !/CriOS/.test(ua) && !/FxiOS/.test(ua) && !/QuarkBrowser/.test(ua)
  }
}





// iOS清理函数
const cleanupIOSListeners = () => {
  // 清理所有可能存在的iOS相关监听器和定时器
  const cleanupItems = [
    '__iosViewportMaintainer', '__iosKeyboardDetector', '__iosFontUpdater',
    '__iosViewportUpdater', '__iosViewportConfig', '__iosExpectedViewport'
  ]

  cleanupItems.forEach(item => {
    if ((window as any)[item]) {
      const handler = (window as any)[item]
      if (typeof handler === 'function') {
        // 尝试清理事件监听器
        ['touchstart', 'touchmove', 'touchend', 'scroll', 'resize', 'orientationchange'].forEach(event => {
          document.removeEventListener(event, handler, { passive: true } as any)
          window.removeEventListener(event, handler, { passive: true } as any)
        })

        // Visual Viewport API清理
        const visualViewport = (window as any).visualViewport
        if (visualViewport) {
          visualViewport.removeEventListener('resize', handler)
        }
      }
      delete (window as any)[item]
    }
  })

  // 清理定时器
  const timers = ['__iosViewportTimer', '__iosKeyboardTimer', '__iosResizeTimeout', '__iosViewportMonitor', '__viewportMonitor']
  timers.forEach(timer => {
    if ((window as any)[timer]) {
      clearInterval((window as any)[timer])
      clearTimeout((window as any)[timer])
      delete (window as any)[timer]
    }
  })

  console.log('🧹 iOS监听器和定时器已清理')
}

export function useGlobalScale() {

  const updateProportionalScale = () => {
    // 不再检测amfe-flexible，回到原来的手动缩放控制
    // 这样可以精确控制：宽度1684px时为原始大小，其他宽度按比例缩放
    // 防止重复执行 - 添加强化的防重复保护
    if ((window as any).__scalingInProgress) {
      return
    }

    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    const browserInfo = getBrowserInfo()

    // 移动端Safari特殊保护：2%缩放阈值过滤，阻断无限循环
    if (browserInfo.isSafari && browserInfo.isMobile) {
      const scale = Math.max(windowWidth / SCALE_CONFIG.baseWidth, SCALE_CONFIG.minScale)

      // 计算缩放比例的相对变化（百分比）
      const scaleChangePercent = lastScaleValue > 0 ? Math.abs(scale - lastScaleValue) / lastScaleValue : 1
      const widthChange = Math.abs(windowWidth - lastWindowWidth)
      const heightChange = Math.abs(windowHeight - lastWindowHeight)

      // 2%阈值过滤：只有缩放变化超过2%才执行更新
      if (scaleChangePercent < SCALE_CONFIG.scaleThreshold &&
        widthChange < 20 && heightChange < 100) {
        return // 过滤地址栏折叠/展开导致的微小视口波动
      }
    }

    ; (window as any).__scalingInProgress = true

    try {
      // 所有设备都使用比例缩放，保持PC端样式缩小版
      isProportionalScaling.value = true

      // 计算缩放比例，使用统一的最小缩放比例
      const scale = Math.max(windowWidth / SCALE_CONFIG.baseWidth, SCALE_CONFIG.minScale)

      // 更新状态记录
      lastScaleValue = scale
      lastWindowWidth = windowWidth
      lastWindowHeight = windowHeight

      scaleRatio.value = scale

      const appContainer = document.getElementById('app')
      if (appContainer) {
        const browserInfo = getBrowserInfo()

        // 条件适配方案：iOS Safari使用viewport，其他浏览器使用CSS缩放
        if (browserInfo.isIOS && browserInfo.isSafari) {
          // iOS Safari：使用viewport方案（已验证有效）
          console.log('🍎 iOS Safari检测到，使用viewport方案')

          let viewportMeta = document.querySelector('meta[name="viewport"]') as HTMLMetaElement
          if (!viewportMeta) {
            viewportMeta = document.createElement('meta')
            viewportMeta.name = 'viewport'
            document.head.appendChild(viewportMeta)
          }

          // 核心策略：设置固定宽度的viewport，让Safari自动缩放
          const virtualWidth = SCALE_CONFIG.baseWidth  // 1684px
          const targetScale = windowWidth / virtualWidth  // 自动计算缩放比例

          viewportMeta.content = [
            `width=${virtualWidth}`,           // 虚拟画布宽度 = 设计稿宽度
            `initial-scale=${targetScale}`,    // 自动缩放到屏幕大小
            `minimum-scale=${targetScale}`,    // 锁定最小缩放
            `maximum-scale=${targetScale}`,    // 锁定最大缩放
            'user-scalable=no',                // 禁用用户手动缩放
            'viewport-fit=cover'               // 适配刘海屏等
          ].join(', ')

          console.log(`📱 iOS Safari viewport设置: width=${virtualWidth}px, scale=${targetScale.toFixed(6)}`)

          // 清理可能存在的包装器
          const existingWrapper = document.getElementById('viewport-wrapper')
          if (existingWrapper) {
            const parent = existingWrapper.parentNode
            if (parent) {
              parent.insertBefore(appContainer, existingWrapper)
              parent.removeChild(existingWrapper)
            }
          }

          // app容器使用设计稿原始尺寸，让viewport完全控制缩放
          // 关键修复：设置正确的高度以确保flex布局正常工作
          const virtualHeight = window.innerHeight / targetScale // 计算虚拟高度

          appContainer.style.width = `${SCALE_CONFIG.baseWidth}px`
          appContainer.style.height = `${virtualHeight}px`        // 设置明确的高度
          appContainer.style.minHeight = `${virtualHeight}px`     // 最小高度
          appContainer.style.maxWidth = 'none'
          appContainer.style.position = 'relative'
          appContainer.style.margin = '0'
          appContainer.style.padding = '0'
          appContainer.style.display = 'flex'                     // 确保flex容器
          appContainer.style.flexDirection = 'column'             // 垂直排列

          // 清理所有CSS缩放相关样式，完全依赖viewport
          appContainer.style.zoom = '1'
          appContainer.style.transform = 'none'
          appContainer.style.transformOrigin = 'top left'
          appContainer.style.webkitTransform = 'none'
          appContainer.style.webkitTransformOrigin = 'top left'
          appContainer.style.webkitBackfaceVisibility = ''
          appContainer.style.backfaceVisibility = ''
          appContainer.style.transition = 'none'


          // body和html使用标准设置
          document.documentElement.style.width = '100%'
          document.documentElement.style.height = 'auto'
          document.documentElement.style.minHeight = '100vh'
          document.documentElement.style.overflow = 'auto'
          document.documentElement.style.overflowX = 'hidden'
          document.documentElement.style.overflowY = 'auto'
          document.documentElement.style.position = 'static'
          document.documentElement.style.margin = '0'
          document.documentElement.style.padding = '0'

          document.body.style.width = '100%'
          document.body.style.height = 'auto'
          document.body.style.minHeight = '100vh'
          document.body.style.overflow = 'auto'
          document.body.style.overflowX = 'hidden'
          document.body.style.overflowY = 'auto'
          document.body.style.position = 'static'
          document.body.style.margin = '0'
          document.body.style.padding = '0'

          // 清理旧的iOS相关处理
          cleanupIOSListeners()

          // 启动iOS Safari增强保护机制
          console.log('🛡️ 启动iOS Safari增强保护机制...')

          // 存储当前正确的viewport配置
          const correctViewportContent = viewportMeta.content
          let lastKnownWidth = windowWidth
          let lastKnownHeight = window.innerHeight

          const maintainViewport = (source = 'unknown') => {
            const currentMeta = document.querySelector('meta[name="viewport"]') as HTMLMetaElement
            const currentWidth = window.innerWidth
            const currentHeight = window.innerHeight

            // 检测地址栏变化：宽度不变，高度显著变化
            const isAddressBarChange = Math.abs(currentWidth - lastKnownWidth) < 5 &&
              Math.abs(currentHeight - lastKnownHeight) > 50

            if (isAddressBarChange) {
              console.log(`📱 地址栏变化检测: ${lastKnownHeight}px → ${currentHeight}px`)

              // 地址栏变化时，保持原有的缩放比例不变，但更新app容器高度
              const originalScale = lastKnownWidth / SCALE_CONFIG.baseWidth
              const maintainViewportContent = [
                `width=${SCALE_CONFIG.baseWidth}`,
                `initial-scale=${originalScale}`,
                `minimum-scale=${originalScale}`,
                `maximum-scale=${originalScale}`,
                'user-scalable=no',
                'viewport-fit=cover'
              ].join(', ')

              if (currentMeta && currentMeta.content !== maintainViewportContent) {
                currentMeta.content = maintainViewportContent
                console.log(`🔧 地址栏变化后viewport已恢复 [${source}]: scale=${originalScale.toFixed(6)}`)
              }

              // 关键修复：更新app容器高度以适应地址栏变化
              const appContainer = document.getElementById('app')
              if (appContainer) {
                const newVirtualHeight = currentHeight / originalScale
                appContainer.style.height = `${newVirtualHeight}px`
                appContainer.style.minHeight = `${newVirtualHeight}px`
                console.log(`📐 地址栏变化后高度已调整: ${newVirtualHeight.toFixed(2)}px`)
              }

              // 更新高度记录，但保持宽度不变
              lastKnownHeight = currentHeight
            } else if (currentMeta && currentMeta.content !== correctViewportContent) {
              // 其他情况的viewport恢复
              currentMeta.content = correctViewportContent
              console.log(`🔧 iOS Safari viewport已恢复 [${source}]`)
            }
          }

          // 增强的事件监听
          const events = [
            { target: document, events: ['touchstart', 'touchmove', 'touchend'] },
            { target: window, events: ['scroll', 'resize'] }
          ]

          events.forEach(({ target, events: eventList }) => {
            eventList.forEach(eventName => {
              target.addEventListener(eventName, () => {
                maintainViewport(eventName)
                // 延迟再次检查，防止Safari异步修改
                setTimeout(() => maintainViewport(`${eventName}-delayed`), 100)
              }, { passive: true })
            })
          })

          // Visual Viewport API支持（更精确的地址栏检测）
          const visualViewport = (window as any).visualViewport
          if (visualViewport) {
            visualViewport.addEventListener('resize', () => {
              maintainViewport('visual-viewport')
            })
            console.log('✅ Visual Viewport API已启用，地址栏检测更精确')
          }

          // 定期检查（较低频率，避免性能影响）
          ; (window as any).__viewportMonitor = setInterval(() => {
            maintainViewport('periodic-check')
          }, 200)

            // 存储维护函数和当前配置供清理和resize使用
            ; (window as any).__viewportMaintainer = maintainViewport
            ; (window as any).__iosViewportState = {
              correctContent: correctViewportContent,
              lastKnownWidth,
              lastKnownHeight,
              virtualWidth,
              virtualHeight,
              targetScale
            }

          console.log('🛡️ iOS Safari增强保护已启用：地址栏检测 + 实时维护')

            // 存储iOS Safari配置
            ; (window as any).__iosViewportConfig = {
              virtualWidth,
              targetScale,
              method: 'ios-safari-viewport'
            }

        } else {
          // 其他浏览器：使用原来的CSS缩放方案
          console.log('🖥️ 其他浏览器检测到，使用CSS缩放方案')
          console.log('📊 浏览器信息:', {
            类型: browserInfo.isSafari ? 'Safari' : browserInfo.isFirefox ? 'Firefox' : browserInfo.isChrome ? 'Chrome' : browserInfo.isEdge ? 'Edge' : 'Other',
            平台: browserInfo.isMobile ? '移动端' : 'PC端',
            iOS: browserInfo.isIOS ? 'iOS' : '其他系统'
          })

          // 清理iOS相关的特殊处理
          cleanupIOSListeners()

          // 根据浏览器选择最佳CSS缩放方案
          if (browserInfo.isSafari || browserInfo.isFirefox) {
            // Safari/Firefox transform方案：创建viewport包装器
            console.log('🎯 使用transform缩放方案')

            // 创建或获取viewport包装器
            let viewportWrapper = document.getElementById('viewport-wrapper')
            if (!viewportWrapper) {
              viewportWrapper = document.createElement('div')
              viewportWrapper.id = 'viewport-wrapper'

              // 将app容器移到包装器内
              const parent = appContainer.parentNode
              if (parent) {
                parent.insertBefore(viewportWrapper, appContainer)
                viewportWrapper.appendChild(appContainer)
              }
            }

            // 设置viewport包装器样式
            if (viewportWrapper) {
              viewportWrapper.style.width = `${windowWidth}px`
              viewportWrapper.style.height = `${window.innerHeight}px`
              viewportWrapper.style.overflow = 'hidden'
              viewportWrapper.style.position = browserInfo.isMobile ? 'fixed' : 'relative'
              viewportWrapper.style.top = browserInfo.isMobile ? '0' : 'auto'
              viewportWrapper.style.left = browserInfo.isMobile ? '0' : 'auto'
              viewportWrapper.style.margin = '0'
              viewportWrapper.style.padding = '0'
            }

            // 设置app容器样式
            const containerWidth = windowWidth / scale
            const containerHeight = window.innerHeight / scale

            appContainer.style.width = `${containerWidth}px`
            appContainer.style.height = `${containerHeight}px`
            appContainer.style.minHeight = `${containerHeight}px`
            appContainer.style.maxWidth = 'none'
            appContainer.style.transform = `scale(${scale})`
            appContainer.style.transformOrigin = 'top left'
            appContainer.style.position = 'relative'
            appContainer.style.zoom = '1'
            appContainer.style.transition = browserInfo.isMobile ? 'none' : 'transform 0.2s ease-out'

            // Safari特殊优化
            if (browserInfo.isSafari) {
              appContainer.style.webkitTransform = `scale(${scale})`
              appContainer.style.webkitTransformOrigin = 'top left'
              appContainer.style.webkitBackfaceVisibility = 'hidden'
              appContainer.style.backfaceVisibility = 'hidden'
            }

          } else {
            // Chrome/Edge zoom方案
            console.log('🎯 使用zoom缩放方案')

            appContainer.style.zoom = `${scale}`
            appContainer.style.transform = 'none'
            appContainer.style.transformOrigin = 'top left'
            appContainer.style.transition = 'zoom 0.2s ease-out'

            // 清理transform相关样式
            appContainer.style.webkitTransform = 'none'
            appContainer.style.webkitBackfaceVisibility = ''
            appContainer.style.backfaceVisibility = ''

            // zoom缩放时的尺寸计算
            const containerWidth = windowWidth / scale
            const containerHeight = window.innerHeight / scale

            appContainer.style.width = `${containerWidth}px`
            appContainer.style.height = `${containerHeight}px`
            appContainer.style.minHeight = `${containerHeight}px`
            appContainer.style.maxWidth = 'none'
          }

          // 其他浏览器的body和html设置
          if (browserInfo.isMobile) {
            // 移动端：禁用滚动，使用fixed定位
            document.documentElement.style.height = '100%'
            document.documentElement.style.overflow = 'hidden'
            document.documentElement.style.position = 'fixed'
            document.documentElement.style.width = '100%'

            document.body.style.height = '100%'
            document.body.style.overflow = 'hidden'
            document.body.style.position = 'fixed'
            document.body.style.width = '100%'
            document.body.style.margin = '0'
            document.body.style.padding = '0'
          } else {
            // 桌面端：正常状态
            document.documentElement.style.height = 'auto'
            document.documentElement.style.minHeight = '100vh'
            document.documentElement.style.overflow = 'auto'
            document.documentElement.style.overflowX = 'hidden'
            document.documentElement.style.overflowY = 'auto'
            document.documentElement.style.width = '100%'
            document.documentElement.style.position = 'static'

            document.body.style.height = 'auto'
            document.body.style.minHeight = '100vh'
            document.body.style.overflow = 'auto'
            document.body.style.overflowX = 'hidden'
            document.body.style.overflowY = 'auto'
            document.body.style.width = '100%'
            document.body.style.margin = '0'
            document.body.style.padding = '0'
            document.body.style.position = 'static'
          }

          // 存储其他浏览器配置
          ; (window as any).__otherBrowserConfig = {
            scale,
            method: browserInfo.isSafari || browserInfo.isFirefox ? 'transform' : 'zoom'
          }
        }


        // 添加比例缩放状态类
        document.body.classList.add('proportional-scaling-active')

        // 调试信息（可选）
        if (1) {
          const isIOSSafari = browserInfo.isIOS && browserInfo.isSafari

          if (isIOSSafari) {
            const config = (window as any).__iosViewportConfig
            if (config) {
              console.log('=== iOS Safari专用方案：Viewport原生缩放 + 地址栏保护 ===')
              console.log('🍎 设备类型:', 'iOS Safari')
              console.log('📱 缩放方法:', 'viewport meta标签原生缩放')
              console.log('🎯 Viewport配置:', {
                虚拟宽度: `${config.virtualWidth}px`,
                虚拟高度: `${(window.innerHeight / config.targetScale).toFixed(2)}px`,
                目标缩放: `${config.targetScale.toFixed(6)}x`,
                实际尺寸: `${windowWidth}x${window.innerHeight}px`
              })
              console.log('🛡️ 特殊保护:', {
                地址栏检测: '✅ 已启用',
                事件监听: '✅ 触摸/滚动/resize',
                Visual_API: (window as any).visualViewport ? '✅ 支持' : '❌ 不支持',
                定期检查: '✅ 200ms间隔'
              })
              console.log('✨ 方案优势:', 'Safari原生机制，地址栏变化不影响缩放')
            }
          } else {
            const config = (window as any).__otherBrowserConfig
            if (config) {
              console.log('=== 其他浏览器标准方案：CSS缩放 ===')
              console.log('🖥️ 浏览器类型:', {
                browser: browserInfo.isSafari ? 'Safari' : browserInfo.isFirefox ? 'Firefox' : browserInfo.isChrome ? 'Chrome' : browserInfo.isEdge ? 'Edge' : 'Other',
                mobile: browserInfo.isMobile ? '移动端' : '桌面端',
                system: browserInfo.isIOS ? 'iOS' : '其他系统'
              })
              console.log('🎯 缩放方法:', config.method === 'zoom' ? 'CSS zoom属性' : 'CSS transform')
              console.log('📐 缩放比例:', `${config.scale.toFixed(6)}x`)

              const viewportWrapper = document.getElementById('viewport-wrapper')
              console.log('📦 包装器状态:', viewportWrapper ? '✅ 已创建' : '❌ 未创建')

              console.log('✨ 方案优势:', '成熟稳定，兼容性好，性能优秀')
            }
          }

          console.log('📏 视口尺寸:', { width: windowWidth, height: window.innerHeight })
          console.log('🎯 设计基准:', `${SCALE_CONFIG.baseWidth}px`)
          console.log('=== 条件适配：iOS Safari用viewport，其他用CSS缩放 ===')
        }
      }
    } finally {
      setTimeout(() => {
        ; (window as any).__scalingInProgress = false
      }, 50)
    }
  }

  const initGlobalScale = () => {
    updateProportionalScale()

    // 根据设备类型调整防抖时间和监听策略
    let resizeTimeout: number | null = null
    let orientationTimeout: number | null = null
    const browserInfo = getBrowserInfo()
    const debounceDelay = browserInfo.isSafari && browserInfo.isMobile ? 500 : 50 // 移动端延长至500ms

    const handleResize = () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout)
      }

      // iOS Safari特殊处理：检测是否是地址栏变化
      const isIOSSafari = browserInfo.isIOS && browserInfo.isSafari
      let delayTime = debounceDelay

      if (isIOSSafari) {
        const currentWidth = window.innerWidth
        const currentHeight = window.innerHeight

        // 检测是否只是高度变化（地址栏隐藏/显示）
        const isHeightOnlyChange = Math.abs(currentWidth - lastWindowWidth) < 10 &&
          Math.abs(currentHeight - lastWindowHeight) > 50

        if (isHeightOnlyChange) {
          console.log('📱 iOS Safari地址栏变化检测到，即时恢复比例')
          delayTime = 50 // 地址栏变化时快速响应
        } else {
          delayTime = 300 // 正常resize时稍慢响应，避免频繁更新
        }
      }

      resizeTimeout = window.setTimeout(() => {
        const newWindowWidth = window.innerWidth
        const newWindowHeight = window.innerHeight
        const newTargetScale = newWindowWidth / SCALE_CONFIG.baseWidth

        // 计算变化程度
        const widthChange = Math.abs(newWindowWidth - lastWindowWidth)
        const scaleChange = Math.abs(newTargetScale - (lastScaleValue || 1))

        // 只有显著变化才更新（无感知要求）
        const shouldUpdate = widthChange > 20 || scaleChange > 0.01

        if (shouldUpdate) {
          // 条件处理：iOS Safari vs 其他浏览器
          if (browserInfo.isIOS && browserInfo.isSafari) {
            // iOS Safari：更新viewport和app容器高度
            const viewportMeta = document.querySelector('meta[name="viewport"]') as HTMLMetaElement
            if (viewportMeta) {
              const newViewportContent = [
                `width=${SCALE_CONFIG.baseWidth}`,
                `initial-scale=${newTargetScale}`,
                `minimum-scale=${newTargetScale}`,
                `maximum-scale=${newTargetScale}`,
                'user-scalable=no',
                'viewport-fit=cover'
              ].join(', ')

              viewportMeta.content = newViewportContent

              // 同时更新app容器的高度以保持flex布局正常
              const appContainer = document.getElementById('app')
              if (appContainer) {
                const newVirtualHeight = newWindowHeight / newTargetScale
                appContainer.style.height = `${newVirtualHeight}px`
                appContainer.style.minHeight = `${newVirtualHeight}px`
                console.log(`📐 iOS Safari高度已更新: ${newVirtualHeight.toFixed(2)}px`)
              }

              console.log(`🔄 iOS Safari viewport更新: ${newWindowWidth}px → scale=${newTargetScale.toFixed(6)}`)
            }
          } else {
            // 其他浏览器：重新执行CSS缩放逻辑
            console.log(`🔄 其他浏览器缩放更新: ${newWindowWidth}px → scale=${newTargetScale.toFixed(6)}`)
            updateProportionalScale()
          }

          // 更新状态
          lastWindowWidth = newWindowWidth
          lastWindowHeight = newWindowHeight
          lastScaleValue = newTargetScale
          scaleRatio.value = newTargetScale

        } else {
          console.log(`⚡ 变化太小，跳过更新: width=${widthChange}px, scale=${scaleChange.toFixed(6)}`)
        }

        resizeTimeout = null
      }, delayTime)
    }

    const handleOrientationChange = () => {
      if (orientationTimeout) {
        clearTimeout(orientationTimeout)
      }
      // 屏幕旋转后需要更长的延迟等待视口稳定
      orientationTimeout = window.setTimeout(() => {
        updateProportionalScale()
        orientationTimeout = null
      }, 800)
    }

    // 移动端优先监听orientationchange，减少resize监听频率
    if (browserInfo.isMobile) {
      window.addEventListener('orientationchange', handleOrientationChange, { passive: true })
      // 移动端仍保留resize监听，但使用更长防抖
      window.addEventListener('resize', handleResize, { passive: true })
    } else {
      // 桌面端只监听resize
      window.addEventListener('resize', handleResize, { passive: true })
    }

    // 存储清理函数
    cleanupResize = () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleOrientationChange)
      if (resizeTimeout) {
        clearTimeout(resizeTimeout)
        resizeTimeout = null
      }
      if (orientationTimeout) {
        clearTimeout(orientationTimeout)
        orientationTimeout = null
      }
    }
  }

  const destroyGlobalScale = () => {
    // 清理防重复保护标志
    ; (window as any).__scalingInProgress = false

    // 重置状态变量
    lastScaleValue = 1
    lastWindowWidth = 0
    lastWindowHeight = 0

    // 调用存储的清理函数
    if (cleanupResize) {
      cleanupResize()
      cleanupResize = null
    }

    // 清理统一viewport方案的设置
    cleanupIOSListeners()

    // 清理viewport维护器和监控器
    if ((window as any).__viewportMaintainer) {
      const maintainer = (window as any).__viewportMaintainer

      // 清理各种事件监听器
      const events = [
        { target: document, events: ['touchstart', 'touchmove', 'touchend'] },
        { target: window, events: ['scroll', 'resize'] }
      ]

      events.forEach(({ target, events: eventList }) => {
        eventList.forEach(eventName => {
          target.removeEventListener(eventName, maintainer, { passive: true } as any)
        })
      })

      // 清理Visual Viewport API监听器
      const visualViewport = (window as any).visualViewport
      if (visualViewport) {
        visualViewport.removeEventListener('resize', maintainer)
      }

      delete (window as any).__viewportMaintainer
    }

    // 清理定期监控器
    if ((window as any).__viewportMonitor) {
      clearInterval((window as any).__viewportMonitor)
      delete (window as any).__viewportMonitor
    }

    // 清理配置
    if ((window as any).__universalViewportConfig) {
      delete (window as any).__universalViewportConfig
    }

    // 恢复默认viewport
    let viewportMeta = document.querySelector('meta[name="viewport"]') as HTMLMetaElement
    if (viewportMeta) {
      viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
    }

    // 清理缩放效果
    const appContainer = document.getElementById('app')
    const viewportWrapper = document.getElementById('viewport-wrapper')

    if (appContainer) {
      // 如果存在viewport包装器，需要将app容器移回原位置
      if (viewportWrapper) {
        const parent = viewportWrapper.parentNode
        if (parent) {
          parent.insertBefore(appContainer, viewportWrapper)
          parent.removeChild(viewportWrapper)
        }
      }

      // 重置缩放样式（兼容所有方案）
      appContainer.style.zoom = '1'
      appContainer.style.transform = 'none'
      appContainer.style.transformOrigin = 'top left'
      appContainer.style.position = 'relative'
      appContainer.style.transition = 'none'

      // 清理Safari相关样式
      appContainer.style.webkitTransform = 'none'
      appContainer.style.webkitTransformOrigin = 'top left'
      appContainer.style.webkitBackfaceVisibility = ''
      appContainer.style.backfaceVisibility = ''

      appContainer.style.width = '100%'
      appContainer.style.maxWidth = ''

      // 恢复高度
      appContainer.style.height = '100vh'
      appContainer.style.minHeight = '100vh'

      // 恢复body和html的默认状态
      document.body.style.width = '100%'
      document.body.style.height = 'auto'
      document.body.style.minHeight = '100vh'
      document.body.style.overflow = 'auto'
      document.body.style.overflowX = 'hidden'
      document.body.style.overflowY = 'auto'
      document.body.style.margin = '0'
      document.body.style.padding = '0'
      document.body.style.position = 'static'

      document.documentElement.style.width = '100%'
      document.documentElement.style.height = 'auto'
      document.documentElement.style.minHeight = '100vh'
      document.documentElement.style.overflow = 'auto'
      document.documentElement.style.overflowX = 'hidden'
      document.documentElement.style.overflowY = 'auto'
      document.documentElement.style.position = 'static'

      document.body.classList.remove('proportional-scaling-active')
    }

    // 清理Element Plus observer
    const observer = (window as any).__elementPlusObserver
    if (observer) {
      observer.disconnect()
      delete (window as any).__elementPlusObserver
    }
  }

  return {
    scaleRatio,
    isProportionalScaling,
    initGlobalScale,
    destroyGlobalScale,
    updateProportionalScale
  }
}