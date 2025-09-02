<template>
  <div :class="containerClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  // 容器类型
  type?: 'default' | 'wide' | 'extra-wide' | 'narrow' | 'full'
  // 是否无边距（用于banner等全宽组件）
  noPadding?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'default',
  noPadding: false
})

const containerClass = computed(() => {
  const classes = ['dc-container']

  classes.push(`dc-container--${props.type}`)

  if (props.noPadding) {
    classes.push('dc-container--no-padding')
  }

  return classes
})
</script>

<style scoped>
/* 基础容器样式 */
.dc-container {
  width: 100%;
  margin: 0 auto;
  /* 移动端基础边距 */
  position: relative;
}

/* 无边距模式 - 用于banner */
.dc-container--no-padding {
  padding: 0;
}

/* 默认容器 - 适合大部分内容 */
.dc-container--default {
  max-width: 1200px;
}

/* 宽容器 - 适合需要更多空间的内容 */
.dc-container--wide {
  max-width: 1400px;
}

/* 超宽容器 - 适合大屏幕展示 */
.dc-container--extra-wide {
  max-width: 1448px;
  padding: 0 6px;
}

/* 窄容器 - 适合文章阅读等 */
.dc-container--narrow {
  max-width: 800px;
}

/* 全宽容器 - 占满整个宽度 */
.dc-container--full {
  max-width: none;
}

/* 统一缩放适配 - 所有设备保持固定宽度以支持比例缩放 */
</style>