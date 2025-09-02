<template>
  <li :class="subMenuClass" role="menuitem" aria-haspopup="true" :aria-expanded="isOpen" @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave">
    <!-- 菜单标题 -->
    <div class="custom-sub-menu__title" @click="handleTitleClick" @keydown.enter="toggleSubMenu"
      @keydown.space.prevent="toggleSubMenu" tabindex="0" :aria-expanded="isOpen">
      <slot name="title"></slot>
    </div>

    <!-- 子菜单内容 -->
    <transition name="custom-submenu">
      <ul v-if="isOpen" class="custom-sub-menu__content" role="menu" :aria-label="title"
        @mouseenter="handleContentMouseEnter" @mouseleave="handleContentMouseLeave">
        <slot></slot>
      </ul>
    </transition>
  </li>
</template>

<script setup lang="ts">
import { computed, ref, inject, onMounted, onUnmounted } from 'vue'

interface Props {
  index: string
  disabled?: boolean
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  title: ''
})

const context = inject('customMenuContext') as any
const isOpen = ref(false)

// 检查是否有激活的子项
const hasActiveChild = computed(() => {
  // 检查子菜单项是否激活
  if (!props.index) return false

  // 获取当前激活的完整路径和映射路径
  const currentActive = context?.activeIndex || ''
  const mappedActive = context?.mappedActiveMenu || ''

  // 对于有子菜单的项目，检查当前路径是否是其子项
  if (currentActive && currentActive !== props.index) {
    // 检查是否是当前子菜单的子项（使用完整路径）
    if (props.index === '/strategy' && currentActive.startsWith('/strategy/')) {
      return true
    }
    if (props.index === '/about' && currentActive.startsWith('/about/')) {
      return true
    }
    if (props.index === '/news' && currentActive.startsWith('/news/')) {
      return true
    }
    if (props.index === '/insights' && currentActive.startsWith('/insights/')) {
      return true
    }
    if (props.index === '/careers' && currentActive.startsWith('/careers/')) {
      return true
    }
  }

  // 也检查映射路径是否匹配当前子菜单
  if (mappedActive && mappedActive === props.index) {
    return true
  }

  return false
})

const isActive = computed(() => {
  const active = context?.activeIndex === props.index || hasActiveChild.value
  console.log(`SubMenu ${props.index}: activeIndex=${context?.activeIndex}, hasActiveChild=${hasActiveChild.value}, isActive=${active}`)
  return active
})

const subMenuClass = computed(() => [
  'custom-sub-menu',
  {
    'is-active': isActive.value,
    'is-opened': isOpen.value,
    'is-disabled': props.disabled
  }
])

const toggleSubMenu = () => {
  if (!props.disabled) {
    isOpen.value = !isOpen.value

    // 如果需要唯一展开，关闭其他子菜单
    if (context?.uniqueOpened && isOpen.value) {
      // 这里可以实现关闭其他子菜单的逻辑
    }
  }
}

// 处理标题点击事件
const handleTitleClick = () => {
  if (!props.disabled) {
    // 在垂直模式（移动端）下，点击标题切换展开/收起
    if (context?.mode === 'vertical') {
      toggleSubMenu()
    }
    // 在水平模式（桌面端）下，鼠标悬停控制展开/收起，点击无效果
    // 桌面端保持原有的鼠标悬停行为
  }
}

// 鼠标悬停处理
let hoverTimeout: number | null = null

const handleMouseEnter = () => {
  if (!props.disabled) {
    // 只在水平模式（桌面端）下响应鼠标悬停
    if (context?.mode === 'horizontal') {
      // 清除可能存在的关闭定时器
      if (hoverTimeout) {
        clearTimeout(hoverTimeout)
        hoverTimeout = null
      }
      // 立即打开子菜单
      isOpen.value = true
    }
  }
}

const handleMouseLeave = () => {
  if (!props.disabled) {
    // 只在水平模式（桌面端）下响应鼠标离开
    if (context?.mode === 'horizontal') {
      // 延迟关闭子菜单，给用户时间移动到子菜单上
      hoverTimeout = window.setTimeout(() => {
        isOpen.value = false
        hoverTimeout = null
      }, 300) // 300ms 延迟
    }
  }
}

// 子菜单内容区域的鼠标事件处理
const handleContentMouseEnter = () => {
  if (!props.disabled) {
    // 只在水平模式（桌面端）下处理
    if (context?.mode === 'horizontal') {
      // 当鼠标进入子菜单内容区域时，清除关闭定时器
      if (hoverTimeout) {
        clearTimeout(hoverTimeout)
        hoverTimeout = null
      }
    }
  }
}

const handleContentMouseLeave = () => {
  if (!props.disabled) {
    // 只在水平模式（桌面端）下处理
    if (context?.mode === 'horizontal') {
      // 当鼠标离开子菜单内容区域时，延迟关闭
      hoverTimeout = window.setTimeout(() => {
        isOpen.value = false
        hoverTimeout = null
      }, 300) // 300ms 延迟
    }
  }
}

onMounted(() => {
  // 监听全局关闭子菜单事件
  window.addEventListener('close-all-submenus', () => {
    isOpen.value = false
  })
})

onUnmounted(() => {
  // 清理定时器
  if (hoverTimeout) {
    clearTimeout(hoverTimeout)
    hoverTimeout = null
  }

  window.removeEventListener('close-all-submenus', () => {
    isOpen.value = false
  })
})
</script>

<style scoped>
.custom-sub-menu {
  position: relative;
}

.custom-sub-menu__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  /* padding: 0 20px; */
  font-size: 14px;
  color: v-bind('context?.textColor || "#606266"');
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-bottom: 2px solid transparent;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
}

.custom-sub-menu__title:hover:not(.is-disabled) {
  background-color: rgba(0, 0, 0, 0.1);
  color: v-bind('context?.activeTextColor || "#409eff"');
}

/* .custom-sub-menu__title:focus {
  outline: 2px solid v-bind('context?.activeTextColor || "#409eff"');
  outline-offset: -2px;
} */



.custom-sub-menu.is-active .custom-sub-menu__title {
  color: v-bind('context?.activeTextColor || "#409eff"');
  border-bottom-color: v-bind('context?.activeTextColor || "#409eff"');
  font-weight: 500;
}

.custom-sub-menu.is-opened .custom-sub-menu__title {
  background-color: rgba(0, 0, 0, 0.05);
}

.custom-sub-menu__content {
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: v-bind('context?.backgroundColor || "#ffffff"');
  border: 1px solid #e4e7ed;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 100%;
  z-index: 1000;
  /* 确保在缩放环境中正确显示 */
  zoom: 1;
  transform-origin: top left;
}

.custom-submenu-enter-active,
.custom-submenu-leave-active {
  transition: all 0.3s ease-in-out;
  transform-origin: top center;
}

.custom-submenu-enter-from {
  opacity: 0;
  transform: scaleY(0) translateY(-10px);
}

.custom-submenu-leave-to {
  opacity: 0;
  transform: scaleY(0) translateY(-10px);
}

.custom-submenu-enter-to,
.custom-submenu-leave-from {
  opacity: 1;
  transform: scaleY(1) translateY(0);
}

/* 确保子菜单内容正确显示 */
.custom-sub-menu__content ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* 水平菜单特殊样式 */
:deep(.custom-menu--horizontal .custom-sub-menu) {
  position: relative;
}

:deep(.custom-menu--horizontal .custom-sub-menu__title) {
  height: 60px;
  border-bottom: 2px solid transparent;
  justify-content: center;
  margin-right: 20px;
  position: relative;
}

:deep(.custom-menu--horizontal .custom-sub-menu__content) {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* 垂直菜单特殊样式 */
:deep(.custom-menu--vertical .custom-sub-menu__title) {
  border-left: 3px solid transparent;
  justify-content: space-between;
}

:deep(.custom-menu--vertical .custom-sub-menu__content) {
  position: static;
  box-shadow: none;
  border: none;
  background-color: transparent;
  margin-left: 20px;
}

:deep(.custom-menu--vertical .custom-sub-menu.is-active .custom-sub-menu__title) {
  border-left-color: v-bind('context?.activeTextColor || "#409eff"');
  border-bottom-color: transparent;
}

.custom-sub-menu.is-disabled .custom-sub-menu__title {
  color: #c0c4cc;
  cursor: not-allowed;
}

.custom-sub-menu.is-disabled .custom-sub-menu__arrow {
  border-top-color: #c0c4cc;
}
</style>
