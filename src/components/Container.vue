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
  padding: 0 20px;
}

/* 宽容器 - 适合需要更多空间的内容 */
.dc-container--wide {
  max-width: 1400px;
  padding: 0 24px;
}

/* 超宽容器 - 适合大屏幕展示 */
.dc-container--extra-wide {
  max-width: 1448px;
  padding: 0 12px;
}

/* 窄容器 - 适合文章阅读等 */
.dc-container--narrow {
  max-width: 800px;
  padding: 0 32px;
}

/* 全宽容器 - 占满整个宽度 */
.dc-container--full {
  max-width: none;
}

/* 统一缩放适配 - 在缩放模式下优化Container布局 */
.proportional-scaling-active .dc-container {
  /* 保持居中宽度，但优化内边距适应小屏幕 */
  /* padding-left: 8px !important;
  padding-right: 8px !important; */
}

/* 针对不同容器类型的特殊优化 */
.proportional-scaling-active .dc-container--extra-wide {
  /* 超宽容器在小屏幕上减少内边距 */
  padding-left: 4px !important;
  padding-right: 4px !important;
}

.proportional-scaling-active .dc-container--default,
.proportional-scaling-active .dc-container--wide {
  /* 默认和宽容器保持合理的内边距 */
  padding-left: 12px !important;
  padding-right: 12px !important;
}

.proportional-scaling-active .dc-container--narrow {
  /* 窄容器在小屏幕上适当增加内边距 */
  padding-left: 16px !important;
  padding-right: 16px !important;
}
</style>