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
            <p class="text-7xl font-bold mt-8 mb-12">
              {{ t('pages.licenses.title') }}
            </p>
            <div class="w-60  h-2 bg-[#A37B24]"></div>
          </div>
        </Container>
      </div>
    </div>
    <Container type="extra-wide">
      <!-- 桌面端表格 -->
      <div class="py-20 px-10">
        <table class="w-full border-collapse border border-[#072867]">
          <thead>
            <tr>
              <th v-for="(header, idx) in tableHeaders" :key="idx"
                class="text-2xl py-8 font-bold text-center bg-[#072867] text-white">
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, rowIdx) in tableRows" :key="rowIdx" class="">
              <td class="text-2xl font-bold p-8 border-r border-b border-[#072867] text-center word-break-keep-all">{{ row.corporation
                }}<br />{{
                  row.corporation2 }}</td>
              <td class="text-xl w-60 p-6 border-r border-b border-[#072867]">{{ row.relationship }}</td>
              <td class="text-xl p-6 border-r border-b border-[#072867] text-algin-justify">{{ row.license }}</td>
              <td class="text-xl p-8 border-r border-b border-[#072867] ">{{ row.service }}</td>
            </tr>
            <!-- text-algin-justify line-break-anywhere -->
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4" class="text-xl text-[#727e9b] italic p-16 border-r border-b border-[#072867] text-algin-justify">
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
/* 基础样式保持 */
</style>