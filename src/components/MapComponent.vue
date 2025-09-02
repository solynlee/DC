<template>
  <div class="border-2 border-[#D0E0ED] rounded-sm overflow-hidden relative bg-gray-100">

    <!-- 腾讯地图iframe容器 -->
    <iframe ref="mapIframe" :src="`/map-loader.html`" :style="{ width: '100%', height: '100%', border: 'none' }"
      class="tencent-map-iframe" @load="onIframeLoad">
    </iframe>

    <!-- 加载状态 -->
    <div v-if="loading" class="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-40">
      <div class="text-gray-500 text-sm">地图加载中...</div>
    </div>

    <!-- 错误状态 -->
    <div v-if="error" class="absolute inset-0 flex items-center justify-center bg-gray-50 z-40">
      <div class="text-center text-gray-500">
        <div class="text-sm mb-2">地图加载失败</div>
        <div class="text-xs mb-1">{{ location.address }}</div>
        <div class="text-xs mb-2">坐标: {{ location.latitude }}, {{ location.longitude }}</div>
        <div class="flex gap-2 justify-center">
          <div class="text-xs text-blue-500 cursor-pointer" @click="retryMap">重试</div>
          <div class="text-xs text-green-500 cursor-pointer" @click="openInExternal">外部地图</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { MapLocation } from '../../types/tencent-map'

interface Props {
  location: MapLocation
  zoom?: number
  height?: string
  width?: string
}

const props = withDefaults(defineProps<Props>(), {
  zoom: 16,
  height: '300px',
  width: '100%'
})

const mapIframe = ref<HTMLIFrameElement>()
const loading = ref(true)
const error = ref(false)

// iframe加载完成处理
const onIframeLoad = () => {

}

// 处理来自iframe的消息
const handleIframeMessage = (event: MessageEvent) => {
  // 安全检查：确保消息来自我们的iframe
  if (!mapIframe.value?.contentWindow || event.source !== mapIframe.value.contentWindow) {
    return
  }



  switch (event.data.type) {
    case 'apiReady':
      sendMapConfig()
      break

    case 'mapReady':
      if (event.data.success) {

        loading.value = false
        error.value = false
      } else {

        error.value = true
        loading.value = false
      }
      break
  }
}

// 发送地图配置到iframe
const sendMapConfig = () => {
  if (mapIframe.value?.contentWindow) {
    const config = {
      type: 'initMap',
      config: {
        latitude: props.location.latitude,
        longitude: props.location.longitude,
        zoom: props.zoom,
        title: props.location.title,
        address: props.location.address
      }
    }


    mapIframe.value.contentWindow.postMessage(config, '*')
  }
}

// 重试地图加载
const retryMap = () => {
  loading.value = true
  error.value = false

  // 重新加载iframe
  if (mapIframe.value) {
    mapIframe.value.src = mapIframe.value.src
  }
}

// 打开外部地图
const openInExternal = () => {
  const { latitude, longitude } = props.location
  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`
  window.open(googleMapsUrl, '_blank')
}

onMounted(() => {

  window.addEventListener('message', handleIframeMessage)
})

onUnmounted(() => {

  window.removeEventListener('message', handleIframeMessage)
})

// 声明全局变量类型
declare global {
  interface Window {
    qq: {
      maps: any
    }
  }
}
</script>

<style scoped>
.tencent-map-iframe {
  position: relative;
}

/* 确保iframe完全填充容器 */
.tencent-map-iframe {
  width: 100% !important;
  height: 100% !important;
}
</style>