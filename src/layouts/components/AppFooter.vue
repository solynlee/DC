<template>
  <footer class="bg-[#072867] px-8 py-12">
    <!-- 桌面端：上半部分 -->
    <Container type="extra-wide">
      <div class="flex justify-between items-start">
        <div class="flex flex-col">
          <img src="@/assets/images/footer/logo.png" alt="logo" class="h-10 w-auto">
          <span @click="showDisclaimer"
            class="text-white border-b w-30 border-white pb-4 inline-flex items-center gap-2 cursor-pointer hover:text-gray-200 transition-colors duration-200 mt-10">
            {{ t('footer.btn') }}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
        <div class="flex-1  px-20  text-white opacity-60 ">
          <p class="mb-4 " v-if="title">{{ t(title) }}</p>
          <p v-if="title2">{{ t(title2) }}</p>
        </div>
        <div class="flex items-center justify-end gap-4">
          <div class="text-right">
            <p class="text-[#A37B24] text-2xl">Contact Us</p>
            <p class="text-white">关注我们</p>
          </div>
          <img src="@/assets/images/footer/code.png" alt="" srcset="" class="h-30 w-30">
        </div>
      </div>

      <!-- 移动端专用部分已移除 - 统一使用桌面端样式 -->

      <!-- 中间部分 -->
      <div class="block pt-10 " v-if="showTable">
        <table class="w-full border-collapse border border-[#2d5eab]">
          <thead>
            <tr>
              <th v-for="(header, idx) in tableHeaders" :key="idx"
                class="text-base  py-4 font-bold  bg-[#2d5eab] border-r border-b border-[#2b58a1] text-white">
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, rowIdx) in tableRows" :key="rowIdx" class="text-[#6293e4]">
              <td class="text-sm font-bold p-8 border-r border-b border-[#2d5eab] word-break-keep-all text-center w-60">{{ row.corporation }}<br />{{
                row.corporation2 }}</td>
              <td class="text-xs w-60  p-8 border-r border-b border-[#2d5eab]">{{ row.relationship }}</td>
              <td class="text-xs w-130 p-8 border-r border-b border-[#2d5eab] text-algin-justify">{{ row.license }}</td>
              <td class="text-xs p-8 border-r border-b border-[#2d5eab] w-90">{{ row.service }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4" class="text-xs text-[#727e9b] italic p-8 border-r border-b border-[#2d5eab]">
                {{ t('pages.licenses.disclaimer') }}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <!-- 移动端卡片布局已移除 - 统一使用桌面端表格样式 -->
      <!-- 统一底部版权信息 -->
      <div class="flex justify-end items-end mt-8">
        <p class="text-[#999] ">Copyright © 2025 德萃财富集团 All Rights Reserved </p>
      </div>

      <!-- 移动端底部信息已移除 - 统一使用桌面端样式 -->
      <DisclaimerModal ref="disclaimerModalRef" />
    </Container>
  </footer>
</template>


<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import DisclaimerModal from '@/components/DisclaimerModal.vue'
import Container from '@/components/Container.vue'
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const { t, tm } = useI18n()
const disclaimerModalRef = ref<InstanceType<typeof DisclaimerModal> | null>(null)
const showDisclaimer = () => {
  if (disclaimerModalRef.value) {
    disclaimerModalRef.value.showDisclaimer()
  }
}

const showTable = ref(false)
const title = ref('')
const title2 = ref('')
const routeName = ['EAM', 'business', 'company', 'office', 'trust', 'services']

const route = useRoute()
watch(() => route.name, (newVal) => {
  if (routeName.includes(String(newVal))) {
    title.value = `footer.${String(newVal)}.title`
    title2.value = `footer.${String(newVal)}.title2`
  } else {
    title.value = ''
    title2.value = ''
  }
  if (newVal === 'home') {
    showTable.value = true
  } else {
    showTable.value = false
  }
}, { immediate: true })


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


<style scoped></style>
