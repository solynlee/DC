<script setup lang="ts">
import { onMounted, onErrorCaptured, ref, nextTick } from 'vue'
import DefaultLayout from './layouts/index.vue'
import { useGlobalScale } from '@/composables/useGlobalScale'

const hasError = ref(false)
const isAppReady = ref(false)

// 初始化全局缩放
const { initGlobalScale, destroyGlobalScale } = useGlobalScale()

// 页面重载函数
const reloadPage = () => {
  window.location.reload()
}

onMounted(async () => {

  try {
    // 等待下一个tick，确保所有组件已挂载
    await nextTick()
    // 初始化全局缩放功能
    initGlobalScale()
    isAppReady.value = true
  } catch (error) {
    console.error('应用初始化失败:', error)
    hasError.value = true
  }
})

// 错误捕获
onErrorCaptured((error, _instance, info) => {
  console.error('应用错误:', error, info)
  hasError.value = true
  return false // 阻止错误继续传播
})

// 组件卸载时清理缩放功能
import { onUnmounted } from 'vue'
onUnmounted(() => {
  destroyGlobalScale()
})
</script>

<template>
  <div class="h-full">
    <!-- 错误界面 -->
    <div v-if="hasError" class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="text-center p-8">

        <h1 class="text-2xl font-bold text-gray-800 mb-2">糟糕，出了点问题</h1>
        <p class="text-gray-600 mb-4">应用加载时遇到了错误，请刷新页面重试</p>
        <button @click="reloadPage"
          class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          刷新页面
        </button>
      </div>
    </div>

    <!-- 主应用内容 -->
    <DefaultLayout v-if="!hasError && isAppReady" />
  </div>
</template>

<style scoped>
/* 移除了所有加载动画样式 */
</style>