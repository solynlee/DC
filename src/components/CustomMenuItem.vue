<template>
  <li :class="menuItemClass" role="menuitem" tabindex="0" @click="handleClick" @keydown.enter="handleClick"
    @keydown.space.prevent="handleClick">
    <slot></slot>
  </li>
</template>

<script setup lang="ts">
import { computed, inject, useAttrs } from 'vue'

interface Props {
  index: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false
})

const context = inject('customMenuContext') as any

const isActive = computed(() => {
  // 检查完整路径匹配（用于子菜单项和父菜单项当页面正好是父菜单页面时）
  if (context?.activeIndex === props.index) {
    console.log(`MenuItem ${props.index}: active (full path match)`)
    return true
  }

  // 对于有子菜单的父菜单项，只有当当前页面正好是父菜单页面时才激活
  // 这种情况通过is-parent-only类来标识
  const attrs = useAttrs()
  const hasParentOnlyClass = (attrs.class as string)?.includes('is-parent-only')
  if (hasParentOnlyClass && context?.activeIndex === props.index) {
    console.log(`MenuItem ${props.index}: active (parent-only mode)`)
    return true
  }

  // 检查映射路径匹配（用于详情页激活父级菜单）
  const mappedActive = context?.mappedActiveMenu || ''
  if (mappedActive && mappedActive === props.index) {
    console.log(`MenuItem ${props.index}: active (mapped path match)`)
    return true
  }

  console.log(`MenuItem ${props.index}: not active (activeIndex=${context?.activeIndex}, mappedActive=${mappedActive}, hasParentOnly=${hasParentOnlyClass})`)
  return false
})

const menuItemClass = computed(() => [
  'custom-menu-item',
  {
    'is-active': isActive.value,
    'is-disabled': props.disabled
  }
])

const handleClick = () => {
  if (!props.disabled) {
    context?.onSelect?.(props.index)
  }
}
</script>

<style scoped>
.custom-menu-item {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: v-bind('context?.textColor || "#606266"');
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
}

.custom-menu-item:hover:not(.is-disabled) {
  background-color: rgba(0, 0, 0, 0.1);
  color: v-bind('context?.activeTextColor || "#409eff"');
}

.custom-menu-item.is-active {
  color: v-bind('context?.activeTextColor || "#409eff"');
  border-bottom-color: v-bind('context?.activeTextColor || "#409eff"');
  font-weight: 500;
}

.custom-menu-item.is-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
}

/* 水平菜单特殊样式 */
:deep(.custom-menu--horizontal .custom-menu-item) {
  height: 60px;
  border-bottom: 2px solid transparent;
  justify-content: center;
  margin-right: 20px;
}

/* 垂直菜单特殊样式 */
:deep(.custom-menu--vertical .custom-menu-item) {
  border-left: 3px solid transparent;
  justify-content: flex-start;
}

:deep(.custom-menu--vertical .custom-menu-item.is-active) {
  border-left-color: v-bind('context?.activeTextColor || "#409eff"');
  border-bottom-color: transparent;
}
</style>
