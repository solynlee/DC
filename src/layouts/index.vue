<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { ElBacktop } from 'element-plus'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

const route = useRoute()
const isLayoutReady = ref(false)

// 简化的路由key
const routeKey = computed(() => route.path || 'default')

onMounted(() => {
  // 布局组件准备就绪
  isLayoutReady.value = true
})

onUnmounted(() => {
  // 清理工作（如果需要）
})
</script>

<template>
  <div class="layout">
    <!-- 头部导航 -->
    <transition name="header-slide" appear>
      <AppHeader v-if="isLayoutReady" />
    </transition>

    <!-- 主要内容区域 -->
    <main class="main-content">
      <router-view v-slot="{ Component }" :key="routeKey">
        <transition name="page-transition" mode="out-in">
          <component :is="Component" v-if="Component" />
        </transition>
      </router-view>
      <el-backtop :right="40" :bottom="250" />
    </main>

    <!-- 页脚 -->
    <transition name="footer-slide" appear>
      <AppFooter v-if="isLayoutReady" />
    </transition>


  </div>
</template>

<style scoped>
/* 固定宽度布局 - 无需额外样式，由全局CSS控制 */
.layout {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}

.main-content {
  width: 100%;
  flex: 1;
  background: #f7f9fb;
  position: relative;
}

/* 头部滑入动画 */
.header-slide-enter-active {
  transition: all 0.3s ease-out;
}

.header-slide-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

/* 页脚滑入动画 */
.footer-slide-enter-active {
  transition: all 0.3s ease-out;
  transition-delay: 0.1s;
}

.footer-slide-enter-from {
  opacity: 0;
  /* transform: translateY(20px); */
}
</style>