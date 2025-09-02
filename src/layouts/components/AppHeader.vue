<template>
  <header class="relative">
    <!-- 统一顶部栏 - 所有设备都使用相同的布局 -->
    <div class="flex justify-between items-center px-8 py-4">
      <img src="@/assets/images/header/logo.png" alt="logo" class="h-8 w-auto">
      <div class="flex items-center text-[#072867] text-2xl py-4">
        <template v-for="(lang, index) in languages" :key="lang.code">
          <button @click="changeLanguage(lang.code)"
            class="w-8 hover:text-[#C1A894] transition-colors duration-200 cursor-pointer"
            :class="{ '!text-[#C1A894] font-bold': currentLanguage === lang.code }">
            {{ lang.label }}
          </button>
          <span v-if="index < languages.length - 1" class="mx-2 text-[#072867]">/</span>
        </template>
      </div>
    </div>

    <!-- 移动端专用元素已移除 - 统一使用桌面端样式 -->

    <!-- 桌面端导航 -->

    <nav class="desktop-nav flex items-center px-8 bg-[#072867] relative">

      <CustomMenu :key="activeMenuItem" :default-active="activeMenuItem" :mapped-active-menu="mappedActiveMenu"
        mode="horizontal" background-color="#072867" text-color="#506485" active-text-color="#ffffff"
        class="dc-desktop-menu w-full" @select="handleMenuSelect" :unique-opened="false" :collapse="false">

        <template v-for="item in navItems" :key="item.path">
          <!-- 有子菜单的项目 -->
          <CustomSubMenu v-if="item.children && item.children.length > 0" :key="item.path + activeMenuItem"
            :index="item.path" class="dc-submenu" :data-submenu-id="item.path" :title="$t(item.label)">
            <template #title>{{ $t(item.label) }}</template>
            <!-- 父级菜单作为第一个子菜单项 - 只有当当前页面是父菜单页面时才激活 -->
            <CustomMenuItem :index="item.path" class="dc-submenu-item dc-parent-item"
              :class="{ 'is-parent-only': activeMenuItem === item.path }" :data-submenu-parent="item.path">
              {{ $t(item.label) }}
            </CustomMenuItem>
            <!-- 其他子菜单项 -->
            <CustomMenuItem v-for="child in item.children" :key="child.path" :index="child.path" class="dc-submenu-item"
              :data-submenu-parent="item.path">
              {{ $t(child.label) }}
            </CustomMenuItem>
          </CustomSubMenu>

          <!-- 普通菜单项 -->
          <CustomMenuItem v-else :index="item.path" class="dc-menu-item">
            {{ $t(item.label) }}
          </CustomMenuItem>
        </template>
      </CustomMenu>
    </nav>

    <!-- 移动端导航菜单 -->
    <Transition name="mobile-menu">
      <nav v-if="isMobileMenuOpen"
        class="absolute top-full left-0 w-full bg-[#072867] shadow-lg z-50 border-t border-[#506485]" role="menu"
        aria-label="Mobile navigation">
        <CustomMenu :key="activeMenuItem" :default-active="activeMenuItem" :mapped-active-menu="mappedActiveMenu"
          mode="vertical" background-color="#072867" text-color="#506485" active-text-color="#ffffff"
          class="dc-mobile-menu" @select="handleMobileMenuSelect" :collapse="false">

          <template v-for="item in navItems" :key="item.path">
            <!-- 有子菜单的项目 -->
            <CustomSubMenu v-if="item.children && item.children.length > 0" :key="item.path + activeMenuItem"
              :index="item.path" class="dc-mobile-submenu" :title="$t(item.label)">
              <template #title>{{ $t(item.label) }}</template>
              <!-- 父级菜单作为第一个子菜单项 - 只有当当前页面是父菜单页面时才激活 -->
              <CustomMenuItem :index="item.path" class="dc-mobile-submenu-item dc-parent-item"
                :class="{ 'is-parent-only': activeMenuItem === item.path }">
                {{ $t(item.label) }}
              </CustomMenuItem>
              <!-- 其他子菜单项 -->
              <CustomMenuItem v-for="child in item.children" :key="child.path" :index="child.path"
                class="dc-mobile-submenu-item">
                {{ $t(child.label) }}
              </CustomMenuItem>
            </CustomSubMenu>

            <!-- 普通菜单项 -->
            <CustomMenuItem v-else :index="item.path" class="dc-mobile-menu-item">
              {{ $t(item.label) }}
            </CustomMenuItem>
          </template>
        </CustomMenu>
      </nav>
    </Transition>



  </header>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted, nextTick, watch } from 'vue'

import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import { type LanguageCode } from '@/utils/language'
import { useLanguageStore } from '@/stores/language'

// 导入自定义菜单组件
import CustomMenu from '@/components/CustomMenu.vue'
import CustomMenuItem from '@/components/CustomMenuItem.vue'
import CustomSubMenu from '@/components/CustomSubMenu.vue'

const { locale } = useI18n()
const route = useRoute()
const router = useRouter()
const languageStore = useLanguageStore()

// 注册i18n locale setter
languageStore.setI18nLocaleSetter((newLocale) => {
  locale.value = newLocale
  document.documentElement.setAttribute('data-lang', newLocale)
})

// 安全地获取当前路由路径
const currentPath = computed(() => {
  try {
    // 检查route对象是否存在且有path属性
    if (route && typeof route === 'object' && 'path' in route) {
      return route.path || ''
    }
    return ''
  } catch (error) {
    console.warn('获取路由路径失败:', error)
    return ''
  }
})



// 移动端菜单状态
const isMobileMenuOpen = ref(false)

const languages = [
  { code: 'zh' as LanguageCode, label: '简' },
  { code: 'zh-TW' as LanguageCode, label: '繁' },
  { code: 'en' as LanguageCode, label: 'EN' }
]

// 当前语言从store获取
const currentLanguage = computed(() => languageStore.currentLanguage)

// 路由到菜单项的映射
const getActiveMenuPath = (path: string): string => {
  // 详情页面映射到父级菜单
  if (path.startsWith('/careers/detail')) return '/careers'
  if (path.startsWith('/insights/detail')) return '/insights'
  if (path.startsWith('/strategy/')) return '/strategy'
  if (path.startsWith('/about/')) return '/about'
  if (path.startsWith('/news/detail')) return '/news'
  // 其他路由直接返回
  return path
}

// 关闭所有子菜单
const closeAllSubMenus = () => {
  console.log('Closing all submenus')

  // 移除所有子菜单的打开状态类
  const allSubMenus = document.querySelectorAll('.dc-submenu.is-opened, .dc-mobile-submenu.is-opened')
  allSubMenus.forEach(menu => {
    menu.classList.remove('is-opened')
  })

  // 触发全局关闭事件
  window.dispatchEvent(new CustomEvent('close-all-submenus'))
}

// Element Plus 菜单相关 - 使用完整路径而不是映射路径
const activeMenuItem = computed(() => {
  const path = currentPath.value
  console.log('activeMenuItem computed:', path)
  return path
})

// 获取映射后的激活菜单路径（用于样式判断）
const mappedActiveMenu = computed(() => {
  const path = currentPath.value
  const mapped = getActiveMenuPath(path)
  console.log('mappedActiveMenu computed:', path, '->', mapped)
  return mapped
})

const handleMenuSelect = (index: string) => {
  // 使用router进行导航
  if (index && index !== currentPath.value) {
    // 先关闭所有子菜单
    closeAllSubMenus()
    router.push(index)
  }
}

const handleMobileMenuSelect = (index: string) => {
  // 移动端菜单选择处理
  if (index && index !== currentPath.value) {
    // 先关闭所有子菜单
    closeAllSubMenus()
    router.push(index)
    closeMobileMenu()
  }
}

// 切换语言
const changeLanguage = (lang: LanguageCode) => {
  languageStore.changeLanguage(lang)
}

// 移动端菜单控制
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// 监听屏幕尺寸变化，桌面端时自动关闭移动菜单
const handleResize = () => {
  if (window.innerWidth >= 768) {
    isMobileMenuOpen.value = false
  }
}

// 监听 ESC 键关闭菜单
const handleEscKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}




// 监听路由变化，确保激活状态更新
watch(
  () => route.path,
  (newPath, oldPath) => {
    console.log('Route changed:', oldPath, '->', newPath)
    // 强制更新激活状态
    nextTick(() => {
      // 关闭子菜单
      closeAllSubMenus()
    })
  },
  { immediate: true }
)

onMounted(() => {
  window.addEventListener('resize', handleResize)
  document.addEventListener('keydown', handleEscKey)

  // 监听路由变化（作为后备）
  router.afterEach(() => {
    // 使用nextTick确保DOM更新后再关闭子菜单
    nextTick(() => {
      closeAllSubMenus()
    })
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  document.removeEventListener('keydown', handleEscKey)
})

// 检查菜单项是否有激活的子项
// const hasActiveChild = (item: any) => {
//   if (!item.children) return false
//   const activePath = getActiveMenuPath(currentPath.value)
//   return item.children.some((child: any) => activePath === child.path)
// }

// 监听路由变化（路由变化时通过 @click="closeMobileMenu" 自动处理）

const navItems = [
  { path: '/', label: 'nav.home' },
  {
    path: '/strategy',
    label: 'nav.strategy',
    children: [
      { path: '/strategy/office', label: 'nav.office' },
      { path: '/strategy/EAM', label: 'nav.EAM' },
      { path: '/strategy/trust', label: 'nav.trust' },
      { path: '/strategy/business', label: 'nav.business' },
      { path: '/strategy/company', label: 'nav.company' },
      { path: '/strategy/planning', label: 'nav.planning' },
      { path: '/strategy/services', label: 'nav.services' },
      { path: '/strategy/other', label: 'nav.other' }
    ]
  },
  { path: '/insights', label: 'nav.insights' },
  { path: '/news', label: 'nav.news' },
  { path: '/careers', label: 'nav.careers' },
  {
    path: '/about',
    label: 'nav.about',
    children: [
      { path: '/about/proposition', label: 'nav.proposition' },
      { path: '/about/team', label: 'nav.team' },
      { path: '/about/value', label: 'nav.value' },
      { path: '/about/licenses', label: 'nav.license' }
    ]
  },
  { path: '/contact', label: 'nav.contact' }
]

</script>



<style scoped>
/* 移动端菜单动画 */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease-in-out;
  transform-origin: top center;
}

.mobile-menu-enter-from {
  opacity: 0;
  transform: scaleY(0) translateY(-10px);
}

.mobile-menu-leave-to {
  opacity: 0;
  transform: scaleY(0) translateY(-10px);
}

.mobile-menu-enter-to,
.mobile-menu-leave-from {
  opacity: 1;
  transform: scaleY(1) translateY(0);
}

/* 自定义菜单样式 */
.dc-desktop-menu {
  border-bottom: none !important;
  overflow: visible !important;
  padding: 0 1rem;
  position: relative;
}

.dc-desktop-menu.custom-menu--horizontal {
  overflow: visible !important;
  white-space: nowrap;
  position: relative;
}

.dc-desktop-menu.custom-menu--horizontal .custom-menu-item,
.dc-desktop-menu.custom-menu--horizontal .custom-sub-menu {
  overflow: visible !important;
  position: relative;
}

/* 菜单项样式 */
:deep(.dc-menu-item.custom-menu-item) {
  padding: 10px 1rem !important;
  font-size: 24px;
  font-weight: normal;
  cursor: pointer;
  text-align: center;
  border-bottom: 4px solid transparent !important;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;
  overflow: hidden;

  margin-right: 2rem !important;
  text-overflow: ellipsis;
  background-color: transparent !important;
}

:deep(.dc-menu-item.custom-menu-item:hover),
:deep(.dc-menu-item.custom-menu-item.is-active) {
  background-color: transparent !important;
  color: #ffffff !important;
  font-weight: bold !important;
  border-bottom: 4px solid #C1A894 !important;
  box-shadow: 0 4px 8px rgba(193, 168, 148, 0.3) !important;
}

/* 桌面端导航容器 */
.desktop-nav {
  position: relative;
  z-index: 100;
  overflow: visible;
}

/* 移动端菜单样式 */
.dc-mobile-menu.custom-menu {
  background-color: #072867 !important;
  border: none !important;
}

/* 移动端菜单项 */
:deep(.dc-mobile-menu-item.custom-menu-item) {
  background-color: transparent !important;
  color: #506485 !important;
  font-size: 1.125rem;
  min-height: 48px;
  line-height: 48px;

  padding-left: 1.5rem !important;
  border-left: 4px solid transparent;
  transition: all 0.2s ease-in-out !important;
}

:deep(.dc-mobile-menu-item.custom-menu-item:hover),
:deep(.dc-mobile-menu-item.custom-menu-item.is-active) {
  background-color: #0a3a7a !important;
  color: #ffffff !important;
  font-weight: bold !important;
  border-left: 4px solid #C1A894 !important;
  box-shadow: inset 0 0 8px rgba(193, 168, 148, 0.3) !important;
}

/* 桌面端子菜单样式 */
:deep(.dc-submenu .custom-sub-menu__title) {
  font-size: 24px !important;
  font-weight: normal !important;
  padding: 10px 1rem !important;
  text-align: center !important;

  border-bottom: 4px solid transparent !important;
  transition: all 0.2s ease-in-out !important;
  position: relative !important;
  margin-right: 2rem !important;
  display: flex;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* 确保宽度动态调整 */
  min-width: fit-content !important;
  width: auto !important;
  background-color: transparent !important;
  color: #506485 !important;
  cursor: pointer !important;
}

/* 桌面端子菜单箭头标识 */
:deep(.dc-submenu .custom-sub-menu__title)::after {
  content: "" !important;
  display: inline-block !important;
  width: 0 !important;
  height: 0 !important;
  margin-left: 0.5rem !important;
  border-left: 4px solid transparent !important;
  border-right: 4px solid transparent !important;
  border-top: 5px solid #506485 !important;
  transition: all 0.2s ease-in-out !important;
  transform: rotate(0deg) !important;
  vertical-align: middle !important;
  flex-shrink: 0 !important;
}

:deep(.dc-submenu:hover .custom-sub-menu__title)::after {
  border-top-color: #ffffff !important;
}

:deep(.dc-submenu.is-opened .custom-sub-menu__title)::after {
  transform: rotate(180deg) !important;
}

:deep(.dc-submenu:hover .custom-sub-menu__title) {
  color: #ffffff !important;
  background-color: rgba(255, 255, 255, 0.1) !important;
}

/* 当子菜单有激活项时，父菜单标题也显示激活状态 */
:deep(.dc-submenu.is-active .custom-sub-menu__title),
:deep(.dc-submenu.is-opened .custom-sub-menu__title) {
  color: #ffffff !important;
  border-bottom: 4px solid #C1A894 !important;
  box-shadow: 0 4px 8px rgba(193, 168, 148, 0.3) !important;
  font-weight: bold !important;
}

/* 激活状态时箭头也变色 */
:deep(.dc-submenu.is-active .custom-sub-menu__title)::after {
  border-top-color: #ffffff !important;
}

:deep(.custom-sub-menu__content) {
  background-color: #072867 !important;
  border: 1px solid #506485 !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
  /* 动态宽度：与父菜单保持一致 */
  width: 100% !important;
  min-width: fit-content !important;
  /* 让全局缩放系统接管定位和缩放 */
  /* position, zoom 等属性由全局缩放系统动态设置 */
}

:deep(.dc-submenu-item.custom-menu-item) {
  background-color: #072867 !important;
  color: #506485 !important;
  font-size: 1.1rem !important;
  min-height: 40px !important;
  line-height: 40px !important;
  padding: 0 20px !important;
  border-left: 3px solid transparent !important;
  transition: all 0.2s ease-in-out !important;
}

:deep(.dc-submenu-item.custom-menu-item:hover) {
  background-color: #0a3a7a !important;
  color: #ffffff !important;
  border-left-color: #C1A894 !important;
}

:deep(.dc-submenu-item.custom-menu-item.is-active) {
  background-color: #0a3a7a !important;
  color: #ffffff !important;
  font-weight: bold !important;
  border-left-color: #C1A894 !important;
}

/* 父级菜单项特殊样式 */
:deep(.dc-parent-item.custom-menu-item) {
  border-bottom: 1px solid #506485 !important;
  font-weight: 600 !important;
  font-size: 1.1rem !important;
}

:deep(.dc-parent-item.custom-menu-item:hover) {
  background-color: #0a3a7a !important;
  color: #ffffff !important;
}

/* 父菜单项只在当前页面是父菜单页面时才激活 */
:deep(.dc-parent-item.custom-menu-item.is-parent-only.is-active) {
  background-color: #0a3a7a !important;
  color: #ffffff !important;
  border-left: 4px solid #C1A894 !important;
  box-shadow: inset 0 0 8px rgba(193, 168, 148, 0.3) !important;
}



/* 移动端子菜单样式 */
:deep(.dc-mobile-submenu .custom-sub-menu__title) {
  height: 48px !important;
  line-height: 48px !important;
  color: #506485 !important;
  font-size: 1.125rem !important;
  padding: 0.25rem 1.5rem !important;
  border-left: 4px solid transparent !important;
  position: relative !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  background-color: transparent !important;
  cursor: pointer !important;
  transition: all 0.2s ease-in-out !important;
}

/* 移动端子菜单箭头标识 */
:deep(.dc-mobile-submenu .custom-sub-menu__title)::after {
  content: "" !important;
  display: inline-block !important;
  width: 0 !important;
  height: 0 !important;
  border-left: 4px solid transparent !important;
  border-right: 4px solid transparent !important;
  border-top: 5px solid #506485 !important;
  transition: all 0.2s ease-in-out !important;
  transform: rotate(0deg) !important;
  flex-shrink: 0 !important;
}

:deep(.dc-mobile-submenu:hover .custom-sub-menu__title)::after {
  border-top-color: #ffffff !important;
}

:deep(.dc-mobile-submenu.is-opened .custom-sub-menu__title)::after {
  transform: rotate(180deg) !important;
}

:deep(.dc-mobile-submenu:hover .custom-sub-menu__title) {
  background-color: #0a3a7a !important;
  color: #ffffff !important;
  border-left: 4px solid #C1A894 !important;
  box-shadow: inset 0 0 8px rgba(193, 168, 148, 0.3) !important;
}

:deep(.dc-mobile-submenu.is-active .custom-sub-menu__title) {
  color: #ffffff !important;
  font-weight: bold !important;
  border-left: 4px solid #C1A894 !important;
  box-shadow: inset 0 0 8px rgba(193, 168, 148, 0.3) !important;
}

:deep(.dc-mobile-submenu-item.custom-menu-item) {
  background-color: #054078 !important;
  color: #506485 !important;
  font-size: 1rem !important;
  min-height: 44px !important;
  line-height: 44px !important;
  padding: 0.125rem 2.5rem !important;
  border-left: 4px solid transparent !important;
  transition: all 0.2s ease-in-out !important;
}

/* 移动端父级菜单项特殊样式 */
:deep(.dc-mobile-submenu .dc-parent-item.custom-menu-item) {
  border-bottom: 1px solid #506485 !important;
  font-weight: 600 !important;
  background-color: #054078 !important;
}

:deep(.dc-mobile-submenu .dc-parent-item.custom-menu-item:hover) {
  background-color: #0a3a7a !important;
  color: #ffffff !important;
}

/* 移动端父菜单项只在当前页面是父菜单页面时才激活 */
:deep(.dc-mobile-submenu .dc-parent-item.custom-menu-item.is-parent-only.is-active) {
  background-color: #0a3a7a !important;
  color: #ffffff !important;
  border-left: 4px solid #C1A894 !important;
  box-shadow: inset 0 0 8px rgba(193, 168, 148, 0.3) !important;
}

:deep(.dc-mobile-submenu-item.custom-menu-item:hover),
:deep(.dc-mobile-submenu-item.custom-menu-item.is-active) {
  background-color: #0a3a7a !important;
  color: #ffffff !important;
  font-weight: bold !important;
  border-left: 4px solid #C1A894 !important;
  box-shadow: inset 0 0 8px rgba(193, 168, 148, 0.3) !important;
}




/* 汉堡菜单按钮动画 */
.hamburger-btn {
  transition: transform 0.2s ease-in-out;
}

.hamburger-btn:active {
  transform: scale(0.95);
}

/* 触摸优化 */
@media (hover: none) and (pointer: coarse) {

  /* 移动设备上增加触摸区域 */
  .mobile-nav-item {
    min-height: 48px;
    display: flex;
    align-items: center;
  }

  /* 移动端语言按钮触摸优化 */
  .mobile-lang-btn {
    min-height: 44px;
    min-width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

/* 防止移动端菜单下的内容滚动 */
.menu-open {
  overflow: hidden;
}

/* 增强移动端可访问性 */
@media (max-width: 767px) {

  /* 确保触摸目标足够大 */
  .touch-target {
    min-height: 44px;
    min-width: 44px;
  }

  /* 移动端字体调整 */
  .mobile-nav-link {
    font-size: 1.125rem;
    /* 18px */
    line-height: 1.5;
  }
}

/* 高对比度支持 */
@media (prefers-contrast: high) {
  .mobile-menu-item:hover {
    outline: 2px solid currentColor;
    outline-offset: -2px;
  }
}

/* 桌面端优化 */
@media (min-width: 768px) {
  .nav-item {
    font-size: 1rem;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
}



/* 减少动画设置 */
@media (prefers-reduced-motion: reduce) {

  .mobile-menu-enter-active,
  .mobile-menu-leave-active {
    transition: none;
  }

  .hamburger-btn {
    transition: none;
  }
}
</style>
