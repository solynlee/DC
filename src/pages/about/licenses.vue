<template>
  <section class="h-full w-full text-[#072867]">
    <div class="relative">
      <img src="@/assets/images/about/bg4.png" alt="" srcset="" class="h-170 w-full object-cover">
      <div class="text-white absolute bottom-0 w-full ">
        <Container type="extra-wide">
          <div class="px-10">
            <p class="text-5xl font-bold">
              {{ t('pages.licenses.title1') }}
            </p>
            <p class="text-7xl font-bold mt-5 mb-10">
              {{ t('pages.licenses.title') }}
            </p>
            <div class="w-60  h-2 bg-[#A37B24]"></div>
          </div>
        </Container>
      </div>
    </div>
    <Container type="extra-wide">
      <!-- 桌面端表格 -->
      <div class=" py-40 px-10">
        <table class="w-full border-collapse border border-[#072867]">
          <thead>
            <tr>
              <th v-for="(header, idx) in tableHeaders" :key="idx"
                class="text-2xl  py-8 font-bold text-center bg-[#072867] text-white">
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, rowIdx) in tableRows" :key="rowIdx" class="">
              <td class="text-2xl font-bold p-8 border-r border-b border-[#072867]">{{ row.corporation }}<br />{{
                row.corporation2 }}</td>
              <td class="text-xl w-60  p-8 border-r border-b border-[#072867]">{{ row.relationship }}</td>
              <td class="text-xl  p-8 border-r border-b border-[#072867]">{{ row.license }}</td>
              <td class="text-xl  p-8 border-r border-b border-[#072867]">{{ row.service }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4" class="text-xl text-[#727e9b] italic p-16 border-r border-b border-[#072867]">
                {{ t('pages.licenses.disclaimer') }}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>


    </Container>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Container from '@/components/Container.vue'
const { t, tm } = useI18n()


// 处理表格头和行数据，使用国际化翻译
const tableHeaders = computed(() => {
  try {
    // 尝试使用 tm() 获取翻译消息
    const licensesData = tm('pages.licenses') as any

    if (licensesData?.table?.headers && Array.isArray(licensesData.table.headers)) {
      return licensesData.table.headers as string[]
    }

    // 备用方案：使用 t() 函数
    const headers = t('pages.licenses.table.headers', { returnObjects: true })

    if (Array.isArray(headers) && headers.length > 0) {
      return headers as string[]
    }
    return ['公司名称', '说明', '牌照', '服务'] // fallback
  } catch (error) {
    console.warn('Failed to get table headers:', error)
    return ['公司名称', '说明', '牌照', '服务'] // fallback
  }
})

const tableRows = computed(() => {
  try {
    // 尝试使用 tm() 获取翻译消息
    const licensesData = tm('pages.licenses') as any

    if (licensesData?.table?.rows && Array.isArray(licensesData.table.rows)) {

      return licensesData.table.rows as any[]
    }

    // 备用方案：使用 t() 函数
    const rows = t('pages.licenses.table.rows', { returnObjects: true })
    if (Array.isArray(rows) && rows.length > 0) {
      return rows as any[]
    }

    return [] // fallback
  } catch (error) {
    return [] // fallback
  }
})
</script>

<style scoped lang="scss">
/* 移动端卡片触摸优化 */
@media (max-width: 767px) {

  /* 确保触摸目标足够大 */
  .card-item {
    min-height: 44px;
    cursor: pointer;
  }

  /* 移动端卡片悬停效果 */
  .mobile-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  /* 移动端卡片激活状态 */
  .mobile-card:active {
    transform: translateY(0);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
}

/* 移动端字体优化 */
@media (max-width: 480px) {
  .mobile-title {
    font-size: 1.125rem;
    line-height: 1.5;
  }

  .mobile-text {
    font-size: 0.75rem;
    line-height: 1.4;
  }
}

/* 移动端间距优化 */
@media (max-width: 767px) {
  .mobile-section {
    padding: 1.5rem 1rem;
  }

  .mobile-card-spacing {
    gap: 1rem;
  }
}

/* 移动端阴影和边框优化 */
@media (max-width: 767px) {
  .mobile-card {
    border-radius: 0.75rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid #e5e7eb;
  }

  .mobile-card-header {
    border-radius: 0.75rem 0.75rem 0 0;
  }
}

/* 触摸设备优化 */
@media (hover: none) and (pointer: coarse) {
  .mobile-card {
    transition: transform 0.15s ease-out, box-shadow 0.15s ease-out;
  }

  .mobile-card:active {
    transform: scale(0.98);
  }
}

/* 高对比度模式支持 */
@media (prefers-contrast: high) {
  .mobile-card {
    border: 2px solid currentColor;
  }

  .mobile-card-header {
    background-color: #000;
    color: #fff;
  }
}

/* 减少动画设置 */
@media (prefers-reduced-motion: reduce) {
  .mobile-card {
    transition: none;
  }

  .mobile-card:hover,
  .mobile-card:active {
    transform: none;
  }
}

/* 移动端专用样式增强 */
@media (max-width: 767px) {

  /* 移动端卡片容器 */
  .mobile-card {
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  }

  /* 移动端卡片头部增强 */
  .mobile-card-header {
    position: relative;
    background: linear-gradient(135deg, #072867 0%, #0a3a7a 100%);
  }

  /* 移动端卡片内容区域 */
  .mobile-card .p-3 {
    background: rgba(255, 255, 255, 0.95);
  }

  /* 移动端标签样式 */
  .mobile-card span[class*="font-semibold"] {
    color: #072867;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.025em;
    font-size: 0.75rem;
  }

  /* 移动端内容文本 */
  .mobile-card span[class*="text-gray-700"] {
    color: #374151;
    line-height: 1.5;
    font-size: 0.875rem;
  }
}

/* 小屏手机特殊优化 */
@media (max-width: 480px) {
  .mobile-card {
    margin: 0 -0.5rem;
    border-radius: 0.5rem;
  }

  .mobile-card-header {
    border-radius: 0.5rem 0.5rem 0 0;
    padding: 0.75rem 1rem;
  }

  .mobile-card .p-3 {
    padding: 1rem;
  }

  /* 小屏手机上的间距调整 */
  .space-y-4> :not([hidden])~ :not([hidden]) {
    margin-top: 1rem;
  }
}

/* 平板端优化 */
@media (min-width: 768px) and (max-width: 1023px) {
  .mobile-card {
    border-radius: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  .mobile-card-header {
    border-radius: 1rem 1rem 0 0;
    padding: 1rem 1.5rem;
  }

  .mobile-card .p-3 {
    padding: 1.5rem;
  }
}

/* 触摸反馈增强 */
@media (hover: none) and (pointer: coarse) {
  .mobile-card {
    -webkit-tap-highlight-color: transparent;
    user-select: none;
  }

  .mobile-card:active {
    transform: scale(0.96);
    transition: transform 0.1s ease-out;
  }

  /* 触摸时的视觉反馈 */
  .mobile-card:active .mobile-card-header {
    background: linear-gradient(135deg, #0a3a7a 0%, #072867 100%);
  }
}

/* 移动端滚动优化 */
@media (max-width: 767px) {
  .md\\:hidden {
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: contain;
  }
}

/* 移动端焦点状态 */
@media (max-width: 767px) {
  .mobile-card:focus-within {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }

  .mobile-card-header:focus-within {
    outline: 2px solid #ffffff;
    outline-offset: -2px;
  }
}
</style>