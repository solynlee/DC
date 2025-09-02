import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import i18n from '@/i18n'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    // 如果有保存的位置（浏览器前进/后退），则恢复位置
    if (savedPosition) {
      return savedPosition
    }

    // 如果有hash，等待DOM更新后滚动到对应元素
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const element = document.getElementById(to.hash.slice(1))
          if (element) {
            resolve({
              el: element,
              behavior: 'smooth',
              top: 0
            })
          } else {
            // 如果找不到元素，滚动到顶部
            resolve({ top: 0 })
          }
        }, 500)
      })
    }

    // 默认滚动到顶部
    return { top: 0, behavior: 'smooth' }
  },
})

// 路由守卫：更新页面标题
router.afterEach((to) => {
  // 更新页面标题
  try {
    const key = to.meta?.titleKey as string | undefined
    const t = (i18n.global as any).t

    if (typeof t === 'function') {
      const site = t('app.title') || 'DC Enterprise'
      document.title = key ? `${t(key) || '页面'} - ${site}` : site
    } else {
      document.title = 'DC Enterprise'
    }
  } catch (error) {
    console.warn('更新页面标题失败:', error)
    document.title = 'DC Enterprise'
  }
})

// 路由错误处理
router.onError((error) => {
  console.error('路由错误:', error)
})

export default router