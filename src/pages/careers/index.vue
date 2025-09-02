<template>
  <section>
    <div class="relative h-163 bg-cover bg-center bg-no-repeat" :style="`background-image: url(${newsBgImage})`">

      <!-- 统一标题和搜索区域 -->
      <Container type="extra-wide">
        <div class="text-[#072867] pt-45">
          <p class="text-8xl font-bold">{{ t('pages.careers.title') }}
          </p>
          <p class="text-4xl font-bold mt-8 mb-24">
            {{ t('pages.careers.subtitle') }}<br></br> {{ t('pages.careers.subtitle2') }}</p>

          <!-- 搜索区域 -->
          <div class="flex flex-row w-full max-w-2xl">
            <!-- 输入容器 -->
            <div class="flex items-center bg-white px-4 gap-2 flex-1 rounded-l-lg shadow-lg h-18">
              <img src="@/assets/images/careers/shape.png" alt="" class="w-8 h-8 flex-shrink-0">
              <input v-model="searchKeyword" @keypress="handleKeyPress"
                class="flex-1 border-none outline-none bg-transparent text-[#072867] placeholder-gray-500 text-lg min-w-0"
                type="text" :placeholder="t('pages.careers.search.placeholder')">
            </div>

            <!-- 按钮 -->
            <div @click="performSearch"
              class="flex items-center bg-[#345CAC] text-white justify-between px-4 w-40 rounded-r-lg shadow-lg cursor-pointer h-18 touch-manipulation hover:bg-blue-600 transition-colors"
              :class="{ 'opacity-50 cursor-not-allowed': isSearching }" :disabled="isSearching">
              <span class="text-lg">
                {{ isSearching ? (t('common.searching') || '搜索中...') : t('pages.careers.search.button') }}
              </span>
              <img v-if="!isSearching" src="@/assets/images/careers/jiantou.png" alt=""
                class="w-5 h-3 ml-2 flex-shrink-0">
            </div>
          </div>
        </div>
      </Container>
    </div>
    <div class="bg-[#f7f7f7] py-20 text-[#072867]">
      <Container type="extra-wide">
        <p class="text-xl mb-10">{{ t('pages.careers.principles.intro') }}</p>

        <div class="space-y-10">
          <div>
            <p class="text-xl font-bold mb-4">{{ t('pages.careers.principles.items[0].name') }}</p>
            <p class="text-xl">{{ t('pages.careers.principles.items[0].desc') }}</p>
          </div>

          <div>
            <p class="text-xl font-bold mb-4">{{ t('pages.careers.principles.items[1].name') }}</p>
            <p class="text-xl">{{ t('pages.careers.principles.items[1].desc') }}</p>
          </div>

          <div>
            <p class="text-xl font-bold mb-4">{{ t('pages.careers.principles.items[2].name') }}</p>
            <p class="text-xl">{{ t('pages.careers.principles.items[2].desc') }}</p>
          </div>

          <div>
            <p class="text-xl font-bold mb-4">{{ t('pages.careers.principles.items[3].name') }}</p>
            <p class="text-xl">{{ t('pages.careers.principles.items[3].desc') }}</p>
          </div>
        </div>

        <p class="text-xl mt-16 mb-30 font-medium">
          {{ t('pages.careers.principles.closing') }}</p>
        <div ref="jobListRef" class="flex items-center gap-6 border-b border-[#1A2E56] pb-6 mb-4">
          <img src="@/assets/images/strategy/icon.png" alt="" srcset="" class="w-10 h-10">
          <p class="text-3xl font-bold">{{ t('pages.careers.jobOpenings.title') }}</p>
        </div>
        <div class="grid grid-cols-3 gap-6 py-10">
          <!-- 加载状态 -->
          <div v-if="loading" class="col-span-full flex justify-center items-center py-8">
            <div class=" text-lg">{{ t('common.loading') || '加载中...' }}</div>
          </div>
          <!-- 错误状态 -->
          <div v-else-if="error" class="col-span-full flex justify-center items-center py-8">
            <div class="text-red-500 text-lg">{{ t('common.error') || '加载失败，请重试' }}</div>
            <button @click="refresh" class="ml-4 px-4 py-2 bg-[#345CAC] text-white rounded hover:bg-blue-600">
              {{ t('common.retry') || '重试' }}
            </button>
          </div>
          <!-- 无搜索结果提示 -->
          <div v-else-if="hasSearched && (!list || list.length === 0)"
            class="col-span-full flex flex-col justify-center items-center py-12">
            <div class="text-gray-500 text-lg mb-4">
              {{ searchKeyword ? t('pages.careers.search.noResults') || `未找到包含"${searchKeyword}"的职位` :
                t('pages.careers.search.noJobsAvailable') || '暂无职位信息' }}
            </div>
            <button @click="() => { searchKeyword = ''; hasSearched = false; refresh() }"
              class="px-6 py-2 bg-[#345CAC] text-white rounded hover:bg-blue-600 transition-colors">
              {{ t('pages.careers.search.viewAll') || '查看所有职位' }}
            </button>
          </div>
          <!-- 职位列表 -->
          <template v-else v-for="item in list || []" :key="item.jobTitle">
            <div class="bg-white flex flex-col justify-between p-6 rounded-lg shadow-md cursor-pointer"
              @click="navigateTo(`/careers/detail?code=${item.jobCode}`)">
              <p class="font-bold text-2xl mb-4">{{ item.jobTitle }}</p>
              <p class="text-base flex-1 text-gray-600 mb-6 leading-relaxed">{{ item.abstract }}</p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">{{ t('pages.careers.jobOpenings.workPlace') }}:{{
                  item.workPlace }}</span>
                <div
                  class="h-12 w-12 bg-[#345CAC] rounded-full flex items-center justify-center min-h-[40px] min-w-[40px] touch-manipulation">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </template>
        </div>
      </Container>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, nextTick } from 'vue'
import newsBgImage from '@/assets/images/careers/banner.png'
import { useCustomApiWithAutoRefresh } from '@/utils/useAutoRefreshApi'
import api from '@/utils/http'
import { useRouter } from 'vue-router'
import Container from '@/components/Container.vue'

const { t } = useI18n()
const router = useRouter()
const navigateTo = (path: string) => {
  router.push(path)
}
interface Job {
  id: string,
  jobTitle: string
  abstract: string
  workPlace: number,
  jobCode: string
}

// 搜索关键词
const searchKeyword = ref('')
const isSearching = ref(false)
const hasSearched = ref(false)

// 使用自定义API hook支持搜索参数
const { data: list, loading, error, refresh } = useCustomApiWithAutoRefresh<Job[]>(async () => {
  const params: { keyword?: string } = {}
  if (searchKeyword.value.trim()) {
    params.keyword = searchKeyword.value.trim()
  }

  const res = await api.get({
    url: '/api/front/jobs/list',
    params
  })
  return res as Job[]
})

// 职位列表引用，用于滚动
const jobListRef = ref<HTMLElement>()

// 执行搜索
const performSearch = async () => {
  if (isSearching.value) return

  isSearching.value = true
  hasSearched.value = true

  try {
    await refresh()
    // 搜索完成后滚动到职位列表
    await nextTick()
    if (jobListRef.value) {
      jobListRef.value.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  } finally {
    isSearching.value = false
  }
}

// 回车事件处理
const handleKeyPress = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    performSearch()
  }
}
</script>


<style scoped>
/* 搜索框样式优化 */
input[type="text"] {
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  background: transparent;
}

input[type="text"]:focus {
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
}

/* 文字阴影增强 */
.text-white {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* 确保搜索框在所有设备上无边框 */
input[type="text"]:active,
input[type="text"]:focus-visible {
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
}
</style>
