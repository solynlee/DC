import { ref } from 'vue'

// 全局比例缩放配置 - 使用zoom方案
const SCALE_CONFIG = {
  baseWidth: 1684,   // 统一的基准宽度，移动端和PC端都使用相同的设计稿基准
  minWidth: 120,     // 启用比例缩放的最小宽度（120px以上都缩放，覆盖超小屏幕）
  minScale: 0.1      // 最小缩放比例，确保在超小屏幕上也有合适的显示
}

// 全局缩放状态
const scaleRatio = ref(1)
const isProportionalScaling = ref(false)

// 存储清理函数
let cleanupResize: (() => void) | null = null

export function useGlobalScale() {
  const updateProportionalScale = () => {
    const windowWidth = window.innerWidth

    // 所有设备都使用比例缩放，保持PC端样式缩小版
    isProportionalScaling.value = true

    // 计算缩放比例，使用统一的最小缩放比例
    const scale = Math.max(windowWidth / SCALE_CONFIG.baseWidth, SCALE_CONFIG.minScale)
    scaleRatio.value = scale

    const appContainer = document.getElementById('app')
    if (appContainer) {
      // 使用zoom属性进行等比例缩放，确保内容填满屏幕宽度
      appContainer.style.zoom = `${scale}`
      // 动态计算容器宽度，确保缩放后正好填满屏幕
      const containerWidth = windowWidth / scale
      appContainer.style.width = `${containerWidth}px`
      appContainer.style.maxWidth = 'none'
      appContainer.style.transformOrigin = 'top left'
      appContainer.style.transition = 'zoom 0.3s ease-in-out'

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

      // 修复Element Plus组件在缩放环境下的定位问题
      fixElementPlusPopperPositioning()
    }
  }

  const initGlobalScale = () => {
    updateProportionalScale()

    // 监听窗口大小变化
    window.addEventListener('resize', updateProportionalScale)

    // 存储清理函数
    cleanupResize = () => {
      window.removeEventListener('resize', updateProportionalScale)
    }
  }

  const destroyGlobalScale = () => {
    // 调用存储的清理函数
    if (cleanupResize) {
      cleanupResize()
      cleanupResize = null
    }

    // 清理缩放效果
    const appContainer = document.getElementById('app')
    if (appContainer) {
      appContainer.style.zoom = '1'
      appContainer.style.width = '100%'
      appContainer.style.maxWidth = ''
      appContainer.style.transformOrigin = 'top left'
      // 清理时也恢复缩放后的高度
      const realViewportHeight = window.innerHeight
      const scaledHeight = realViewportHeight / 1 // 清理时zoom为1
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

// 修复Element Plus Popper组件在缩放环境下的定位问题
function fixElementPlusPopperPositioning() {
  // 等待DOM更新后执行
  setTimeout(() => {
    // 查找所有Element Plus popper实例
    const poppers = document.querySelectorAll('.el-popper, .el-menu--popup')
    poppers.forEach((popper) => {
      const element = popper as HTMLElement
      // 重置zoom，确保popper不受主容器缩放影响
      element.style.zoom = '1'
      element.style.position = 'fixed'
      element.style.zIndex = '9999'
      element.style.transformOrigin = 'top left'
    })
  }, 0)

  // 监听新的popper创建
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node instanceof HTMLElement) {
          // 检查新添加的节点是否是popper组件
          if (node.classList.contains('el-popper') ||
            node.classList.contains('el-menu--popup') ||
            node.querySelector('.el-popper, .el-menu--popup')) {

            const poppers = node.classList.contains('el-popper') || node.classList.contains('el-menu--popup')
              ? [node]
              : node.querySelectorAll('.el-popper, .el-menu--popup')

            poppers.forEach((popper) => {
              const element = popper as HTMLElement
              element.style.zoom = '1'
              element.style.position = 'fixed'
              element.style.zIndex = '9999'
              element.style.transformOrigin = 'top left'
            })
          }
        }
      })
    })
  })

  // 开始观察DOM变化
  observer.observe(document.body, {
    childList: true,
    subtree: true
  })

    // 将observer存储起来，以便在需要时清理
    ; (window as any).__elementPlusObserver = observer
}
