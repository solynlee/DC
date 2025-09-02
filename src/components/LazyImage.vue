<template>
  <div class="lazy-image-container" :class="containerClass" :style="containerStyle">
    <!-- 实际图片 -->
    <img ref="imageRef" :src="src" :alt="alt" :class="imageClass" :style="imageStyle" @load="handleLoad"
      @error="handleError" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  src: string
  alt?: string
  containerClass?: string
  imageClass?: string
  width?: string | number
  height?: string | number
  aspectRatio?: string
}

const props = withDefaults(defineProps<Props>(), {
  alt: '',
  containerClass: '',
  imageClass: '',
  aspectRatio: '16/9'
})

const emit = defineEmits<{
  load: [event: Event]
  error: [event: Event]
}>()

const imageRef = ref<HTMLImageElement>()

// 样式计算
const containerStyle = computed(() => {
  const style: Record<string, any> = {}

  if (props.width) {
    style.width = typeof props.width === 'number' ? `${props.width}px` : props.width
  }

  if (props.height) {
    style.height = typeof props.height === 'number' ? `${props.height}px` : props.height
  } else if (props.aspectRatio) {
    style.aspectRatio = props.aspectRatio
  }

  return style
})

const imageStyle = computed(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover' as const,
  transition: 'opacity 0.15s ease-in-out'
}))

const handleLoad = (event: Event) => {
  emit('load', event)
}

const handleError = (event: Event) => {
  emit('error', event)
}
</script>

<style scoped>
.lazy-image-container {
  position: relative;
  overflow: hidden;
  background-color: #f3f4f6;
  border-radius: 0.5rem;
}
</style>