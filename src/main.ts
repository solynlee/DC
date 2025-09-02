import { createApp } from 'vue'
import './assets/style.css'
import './assets/container-system.css'
import './assets/rich-text.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// Swiper 样式
import 'swiper/swiper-bundle.css'
import '@wangeditor/editor/dist/css/style.css'
import router from './router'
import pinia from './stores'
import i18n from './i18n'

async function initApp() {
  const app = createApp(App)

  // 先安装插件
  app.use(ElementPlus)
  app.use(pinia)
  app.use(i18n)
  app.use(router)

  // 等待路由器准备就绪
  await router.isReady()

  // 挂载应用
  app.mount('#app')
}

// 启动应用
initApp().catch(console.error)