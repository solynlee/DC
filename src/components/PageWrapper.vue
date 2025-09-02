<template>
  <div class="page-wrapper">
    <slot />
  </div>
</template>

<script setup lang="ts">
// 最简单的实现，直接渲染内容
</script>

<style scoped>
.page-wrapper {
  position: relative;
  min-height: 100vh;
  width: 100%;
}
</style>