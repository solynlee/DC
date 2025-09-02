<template>
  <transition :name="transitionName" mode="out-in">
    <slot />
  </transition>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useRoute } from 'vue-router'

// 定义props
interface Props {
  currentRoute?: {
    name?: string | symbol | null | undefined
    path?: string
    params?: Record<string, any>
    query?: Record<string, any>
    meta?: Record<string, any>
  } | null
}

const props = withDefaults(defineProps<Props>(), {
  currentRoute: undefined
})

const route = useRoute()
const transitionName = ref('fade-slide')

// 安全地获取路由名称，优先使用props，回退到useRoute
const routeName = computed(() => {
  try {
    // 优先使用通过props传递的路由信息
    if (props.currentRoute?.name) {
      return props.currentRoute.name as string
    }

    // 检查route对象是否完整初始化
    if (route && typeof route === 'object' && 'name' in route && route.name) {
      return route.name as string
    }

    return undefined
  } catch (error) {
    console.warn('获取路由名称失败:', error)
    return undefined
  }
})

// 根据路由变化动态设置过渡效果
const routeOrder: Record<string, number> = {
  'home': 0,
  'strategy': 1,
  'insights': 2,
  'news': 3,
  'careers': 4,
  'about': 5,
  'contact': 6
}

watch(routeName, (newRoute, oldRoute) => {
  try {
    // 添加安全检查，确保路由名称存在
    if (oldRoute && newRoute && typeof oldRoute === 'string' && typeof newRoute === 'string') {
      const oldIndex = routeOrder[oldRoute] ?? 0
      const newIndex = routeOrder[newRoute] ?? 0

      if (newIndex > oldIndex) {
        transitionName.value = 'slide-left'
      } else if (newIndex < oldIndex) {
        transitionName.value = 'slide-right'
      } else {
        transitionName.value = 'fade-slide'
      }
    } else {
      // 如果路由信息不完整，使用默认动画
      transitionName.value = 'fade-slide'
    }
  } catch (error) {
    console.warn('路由切换动画处理失败:', error)
    transitionName.value = 'fade-slide'
  }
}, { immediate: false, flush: 'post' })
</script>

<style scoped>
/* 淡入淡出 + 轻微滑动 */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.2s ease-out;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* 向左滑动 */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease-out;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* 向右滑动 */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease-out;
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* 确保过渡容器占满高度 */
.fade-slide-enter-active,
.fade-slide-leave-active,
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  min-height: 100vh;
}
</style>