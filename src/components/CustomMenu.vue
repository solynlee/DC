<template>
  <ul :class="menuClass" role="menu" :aria-orientation="mode === 'vertical' ? 'vertical' : 'horizontal'">
    <slot></slot>
  </ul>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue'

interface Props {
  mode: 'horizontal' | 'vertical'
  defaultActive?: string
  mappedActiveMenu?: string
  backgroundColor?: string
  textColor?: string
  activeTextColor?: string
  uniqueOpened?: boolean
  collapse?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  mode: 'vertical',
  defaultActive: '',
  mappedActiveMenu: '',
  backgroundColor: 'transparent',
  textColor: '#606266',
  activeTextColor: '#409eff',
  uniqueOpened: false,
  collapse: false
})

const emit = defineEmits<{
  select: [index: string]
}>()

const menuClass = computed(() => [
  'custom-menu',
  `custom-menu--${props.mode}`,
  {
    'custom-menu--collapse': props.collapse
  }
])

// 提供给子组件使用的上下文
provide('customMenuContext', {
  mode: props.mode,
  activeIndex: props.defaultActive,
  mappedActiveMenu: props.mappedActiveMenu,
  textColor: props.textColor,
  activeTextColor: props.activeTextColor,
  backgroundColor: props.backgroundColor,
  onSelect: (index: string) => {
    emit('select', index)
  }
})
</script>

<style scoped>
.custom-menu {
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: v-bind('props.backgroundColor');
  color: v-bind('props.textColor');
  border: none;
  position: relative;
}

.custom-menu--horizontal {
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: visible;
  white-space: nowrap;
}

.custom-menu--vertical {
  display: flex;
  flex-direction: column;
}

.custom-menu--collapse {
  width: 64px;
}
</style>
