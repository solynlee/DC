import { ref } from 'vue'

// 全局比例缩放配置
const SCALE_CONFIG = {
  baseWidth: 1684,   // 设计稿基准宽度
  minWidth: 120,     // 启用缩放的最小宽度
  minScale: 0.1      // 最小缩放比例
}

// 全局缩放状态
const scaleRatio = ref(1)
const isProportionalScaling = ref(false)

// 存储清理函数
let cleanupResize: (() => void) | null = null

// 检测Safari浏览器（优化版检测逻辑）
const isSafari = (): boolean => {
  const ua = navigator.userAgent
  // 更准确的Safari检测：iOS设备或包含Safari但不包含Chrome/Edg的UA
  return /iPad|iPhone|iPod/.test(ua) ||
    (/Safari/.test(ua) && !/Chrome|Edg/.test(ua))
}

export function useGlobalScale() {
  const updateProportionalScale = () => {
    // 防止重复执行 - 添加简单的防重复保护
    if ((window as any).__scalingInProgress) {
      return
    }
    ; (window as any).__scalingInProgress = true

    try {
      const windowWidth = window.innerWidth

      // 所有设备都使用比例缩放，保持PC端样式缩小版
      isProportionalScaling.value = true

      // 计算缩放比例，使用统一的最小缩放比例
      const scale = Math.max(windowWidth / SCALE_CONFIG.baseWidth, SCALE_CONFIG.minScale)

      // Safari特殊处理：如果缩放比例变化很小，跳过更新避免无限循环
      if (isSafari() && scaleRatio.value && Math.abs(scale - scaleRatio.value) < 0.001) {
        return
      }

      scaleRatio.value = scale

      const appContainer = document.getElementById('app')
      if (appContainer) {
        // 区分浏览器使用不同缩放方案
        const safari = isSafari()

        if (safari) {
          // Safari 方案：使用 transform: scale()
          // 先强制禁用所有过渡效果
          appContainer.style.transition = 'none'
          appContainer.style.webkitTransition = 'none'

          // 重置zoom避免冲突
          appContainer.style.zoom = '1'

          // 应用transform缩放
          appContainer.style.transform = `scale(${scale})`
            ; (appContainer.style as any).webkitTransform = `scale(${scale})`

          // transform-origin 确保从左上角缩放
          appContainer.style.transformOrigin = 'top left'
            ; (appContainer.style as any).webkitTransformOrigin = 'top left'
        } else {
          // 其他浏览器：使用 zoom
          appContainer.style.zoom = `${scale}`
          appContainer.style.transform = 'none'
            ; (appContainer.style as any).webkitTransform = 'none'
          appContainer.style.transition = 'zoom 0.3s ease-in-out'
        }

        // 计算容器宽度（两种方案的差异处理）
        const containerWidth = windowWidth / scale
        appContainer.style.width = `${containerWidth}px`
        appContainer.style.maxWidth = 'none'

        // 在缩放环境下直接设置高度，确保填满视口
        const realViewportHeight = window.innerHeight
        const scaledHeight = realViewportHeight / scale

        // 直接设置缩放后的高度，确保内容填满整个视口
        appContainer.style.height = `${scaledHeight}px`
        appContainer.style.minHeight = `${scaledHeight}px`

        // 确保body和html能正常滚动，特别是小屏幕适配
        document.body.style.width = '100%'
        document.body.style.height = 'auto'
        document.body.style.minHeight = '100vh'
        document.body.style.overflow = 'visible'
        document.body.style.overflowX = 'hidden' // 统一隐藏水平滚动
        document.body.style.overflowY = 'auto'
        document.body.style.margin = '0'
        document.body.style.padding = '0'

        // 确保html也填满宽度，高度自适应内容
        document.documentElement.style.width = '100%'
        document.documentElement.style.height = 'auto'
        document.documentElement.style.minHeight = '100vh'
        document.documentElement.style.overflow = 'visible'
        document.documentElement.style.overflowX = 'hidden'
        document.documentElement.style.overflowY = 'auto'

        // 添加比例缩放状态类
        document.body.classList.add('proportional-scaling-active')
      }
    } finally {
      // Safari需要更长的延迟避免重复触发
      const delay = isSafari() ? 200 : 50
      setTimeout(() => {
        ; (window as any).__scalingInProgress = false
      }, delay)
    }
  }

  const initGlobalScale = () => {
    updateProportionalScale()

    // 使用更简单的resize监听，避免频繁触发
    let resizeTimeout: number | null = null

    const handleResize = () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout)
      }
      // Safari需要更长的防抖延迟
      const debounceDelay = isSafari() ? 300 : 100
      resizeTimeout = window.setTimeout(() => {
        updateProportionalScale()
        resizeTimeout = null
      }, debounceDelay)
    }

    // 监听窗口大小变化
    window.addEventListener('resize', handleResize, { passive: true })

    // 存储清理函数
    cleanupResize = () => {
      window.removeEventListener('resize', handleResize)
      if (resizeTimeout) {
        clearTimeout(resizeTimeout)
        resizeTimeout = null
      }
    }
  }

  const destroyGlobalScale = () => {
    // 清理防重复保护标志
    ; (window as any).__scalingInProgress = false

    // 调用存储的清理函数
    if (cleanupResize) {
      cleanupResize()
      cleanupResize = null
    }

    // 清理缩放效果
    const appContainer = document.getElementById('app')
    if (appContainer) {
      // 重置缩放样式（兼容两种方案）
      appContainer.style.zoom = '1'
      appContainer.style.transform = 'none'
        ; (appContainer.style as any).webkitTransform = 'none'
      appContainer.style.transition = 'none'

      appContainer.style.width = '100%'
      appContainer.style.maxWidth = ''
      appContainer.style.transformOrigin = 'top left'

      // 清理时也恢复缩放后的高度
      const realViewportHeight = window.innerHeight
      const scaledHeight = realViewportHeight / 1 // 清理时缩放为1
      appContainer.style.height = `${scaledHeight}px`
      appContainer.style.minHeight = `${scaledHeight}px`

      document.body.style.width = '100%'
      document.body.style.height = 'auto'
      document.body.style.minHeight = '100vh'
      document.body.style.overflow = 'auto'
      document.body.style.overflowX = 'hidden'
      document.body.style.overflowY = 'auto'
      document.body.style.margin = '0'
      document.body.style.padding = '0'

      document.documentElement.style.width = '100%'
      document.documentElement.style.height = 'auto'
      document.documentElement.style.minHeight = '100vh'
      document.documentElement.style.overflow = 'auto'
      document.documentElement.style.overflowX = 'hidden'
      document.documentElement.style.overflowY = 'auto'

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