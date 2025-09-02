<template>
  <div ref="containerRef" class="smooth-height-container">
    <div ref="contentRef" class="content-wrapper">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

const containerRef = ref<HTMLElement>()
const contentRef = ref<HTMLElement>()

// 更新高度的方法（保持接口兼容性）
const updateHeight = async () => {
  await nextTick()
  // 对于即时加载，不需要复杂的高度动画
}

onMounted(async () => {
  await nextTick()
})

// 暴露方法给父组件
defineExpose({
  updateHeight,
  cleanup: () => { } // 空的清理方法，保持兼容性
})
</script>

<style scoped>
.smooth-height-container {
  position: relative;
  min-height: 100vh;
}

.content-wrapper {
  opacity: 1;
  width: 100%;
}
</style>