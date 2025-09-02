<template>
  <section>
    <div class="relative h-60 md:h-163 bg-cover bg-center bg-no-repeat"
      :style="`background-image: url(${newsBgImage})`">

      <!-- 统一标题和搜索区域 - 响应式缩放 -->
      <Container type="extra-wide">
        <div class="text-[#072867] py-8 sm:py-12 md:pt-45 ">
          <p class="text-xl sm:text-2xl md:text-8xl font-bold">{{ t('pages.careers.title') }}
          </p>
          <p
            class="text-base sm:text-lg md:text-4xl font-bold mt-2 sm:mt-3 md:mt-4 lg:mt-6 xl:mt-8 mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-24">
            {{ t('pages.careers.subtitle') }}<br></br> {{ t('pages.careers.subtitle2') }}</p>

          <!-- 搜索区域 - 统一样式，响应式缩放，移动端隐藏 -->
          <div
            class="hidden sm:flex flex-col sm:flex-row w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            <!-- 输入容器：统一高度，input 使用 h-full 占满 -->
            <div
              class="flex items-center bg-white px-3 sm:px-3 md:px-4 gap-1.5 sm:gap-2 flex-1 rounded-lg sm:rounded-l-lg sm:rounded-r-none shadow-lg mb-2 sm:mb-0 h-12 sm:h-11 md:h-18">
              <img src="@/assets/images/careers/shape.png" alt=""
                class="w-4 sm:w-5 md:w-6 lg:w-7 xl:w-8 h-4 sm:h-5 md:h-8 flex-shrink-0">
              <input v-model="searchKeyword" @keypress="handleKeyPress"
                class="flex-1 border-none outline-none bg-transparent text-[#072867] placeholder-gray-500 text-sm sm:text-base md:text-lg min-w-0"
                type="text" :placeholder="t('pages.careers.search.placeholder')">
            </div>

            <!-- 按钮：与输入容器使用相同高度类 -->
            <div @click="performSearch"
              class="flex items-center bg-[#345CAC] text-white justify-center sm:justify-between px-4 sm:px-3 md:px-4 w-full sm:w-28 md:w-32 lg:w-36 xl:w-40 rounded-lg sm:rounded-r-lg sm:rounded-l-none shadow-lg cursor-pointer h-12 md:h-18  touch-manipulation hover:bg-blue-600 transition-colors"
              :class="{ 'opacity-50 cursor-not-allowed': isSearching }" :disabled="isSearching">
              <span class="text-sm sm:text-sm md:text-base lg:text-lg">
                {{ isSearching ? (t('common.searching') || '搜索中...') : t('pages.careers.search.button') }}
              </span>
              <img v-if="!isSearching" src="@/assets/images/careers/jiantou.png" alt=""
                class="w-3 sm:w-3 md:w-4 lg:w-4 xl:w-5 h-2 sm:h-2 md:h-2 lg:h-2.5 xl:h-3 ml-1.5 sm:ml-2 flex-shrink-0">
            </div>
          </div>
        </div>
      </Container>
    </div>
    <div class="bg-[#f7f7f7]  py-12 md:py-16 lg:py-20 text-[#072867]">
      <Container type="extra-wide">
        <p class="text-base md:text-lg lg:text-xl mb-6 md:mb-8 lg:mb-10">{{ t('pages.careers.principles.intro') }}</p>

        <div class="space-y-6 md:space-y-8 lg:space-y-10">
          <div>
            <p class="text-lg md:text-xl font-bold mb-3 md:mb-4">{{ t('pages.careers.principles.items[0].name') }}</p>
            <p class="text-base md:text-lg lg:text-xl">{{ t('pages.careers.principles.items[0].desc') }}</p>
          </div>

          <div>
            <p class="text-lg md:text-xl font-bold mb-3 md:mb-4">{{ t('pages.careers.principles.items[1].name') }}</p>
            <p class="text-base md:text-lg lg:text-xl">{{ t('pages.careers.principles.items[1].desc') }}</p>
          </div>

          <div>
            <p class="text-lg md:text-xl font-bold mb-3 md:mb-4">{{ t('pages.careers.principles.items[2].name') }}</p>
            <p class="text-base md:text-lg lg:text-xl">{{ t('pages.careers.principles.items[2].desc') }}</p>
          </div>

          <div>
            <p class="text-lg md:text-xl font-bold mb-3 md:mb-4">{{ t('pages.careers.principles.items[3].name') }}</p>
            <p class="text-base md:text-lg lg:text-xl">{{ t('pages.careers.principles.items[3].desc') }}</p>
          </div>
        </div>

        <p class="text-base md:text-lg lg:text-xl mt-8 md:mt-12 lg:mt-16 mb-16 md:mb-20 lg:mb-30 font-medium">
          {{ t('pages.careers.principles.closing') }}</p>
        <div ref="jobListRef"
          class="flex items-center gap-4 md:gap-6 border-b border-[#1A2E56] pb-4 md:pb-6 mb-3 md:mb-4">
          <img src="@/assets/images/strategy/icon.png" alt="" srcset="" class="w-8 h-8 md:w-10 md:h-10">
          <p class="text-2xl md:text-3xl font-bold">{{ t('pages.careers.jobOpenings.title') }}</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 py-6 md:py-8 lg:py-10">
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
            <div class="bg-white flex flex-col justify-between p-4 md:p-5 lg:p-6 rounded-lg shadow-md cursor-pointer"
              @click="navigateTo(`/careers/detail?code=${item.jobCode}`)">
              <p class=" font-bold text-lg md:text-xl lg:text-2xl mb-3 md:mb-4">{{ item.jobTitle }}</p>
              <p class="text-sm md:text-base flex-1 text-gray-600 mb-4 md:mb-6 leading-relaxed">{{ item.abstract }}</p>
              <div class="flex items-center justify-between">
                <span class="text-xs md:text-sm text-gray-500">{{ t('pages.careers.jobOpenings.workPlace') }}:{{
                  item.workPlace }}</span>
                <div
                  class="h-10 w-10 md:h-12 md:w-12 bg-[#345CAC] rounded-full flex items-center justify-center min-h-[40px] min-w-[40px] touch-manipulation">
                  <svg class="w-4 md:w-5 h-4 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

/* 移动端优化 */
@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
}

/* 平板端优化 */
@media (min-width: 640px) and (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* 大屏幕优化 */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

/* 搜索区域间距等比例缩放 */
@media (max-width: 640px) {

  /* 小屏幕下搜索区域垂直布局 */
  .flex-col .rounded-lg:first-child {
    border-radius: 0.5rem;
    margin-bottom: 0.375rem;
    /* 6px */
  }

  .flex-col .rounded-lg:last-child {
    border-radius: 0.5rem;
  }
}

@media (min-width: 640px) and (max-width: 768px) {

  /* 中小屏幕间距调整 */
  .mb-1\.5 {
    margin-bottom: 0.5rem;
    /* 8px */
  }
}

@media (min-width: 768px) and (max-width: 1024px) {

  /* 平板端间距调整 */
  .mb-1\.5 {
    margin-bottom: 0.75rem;
    /* 12px */
  }
}

@media (min-width: 1024px) {

  /* 大屏幕间距调整 */
  .mb-1\.5 {
    margin-bottom: 1rem;
    /* 16px */
  }
}

/* 文字阴影增强 */
.text-white {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* 背景图片响应式 */
@media (max-width: 768px) {
  .relative img {
    object-position: center;

  }
}

/* 确保搜索框在所有设备上无边框 */
input[type="text"]:active,
input[type="text"]:focus-visible {
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
}

/* 精确的间距等比例缩放 */
@media (max-width: 640px) {

  /* 小屏幕：基础间距 */
  .mt-3 {
    margin-top: 0.5rem;
  }

  /* 8px */
  .mb-8 {
    margin-bottom: 1rem;
  }

  /* 16px */
  .gap-1\.5 {
    gap: 0.25rem;
  }

  /* 4px */
  .p-1\.5 {
    padding: 0.25rem;
  }

  /* 4px */
}

@media (min-width: 640px) and (max-width: 768px) {

  /* 中小屏幕：1.2倍间距 */
  .sm\:mt-4 {
    margin-top: 0.75rem;
  }

  /* 12px */
  .sm\:mb-12 {
    margin-bottom: 1.5rem;
  }

  /* 24px */
  .sm\:gap-2 {
    gap: 0.375rem;
  }

  /* 6px */
  .sm\:p-2 {
    padding: 0.375rem;
  }

  /* 6px */
}

@media (min-width: 768px) and (max-width: 1024px) {

  /* 平板端：1.5倍间距 */
  .md\:mt-6 {
    margin-top: 1rem;
  }

  /* 16px */
  .md\:mb-16 {
    margin-bottom: 2rem;
  }

  /* 32px */
  .md\:p-3 {
    padding: 0.5rem;
  }

  /* 8px */
}

@media (min-width: 1024px) and (max-width: 1280px) {

  /* 大屏幕：2倍间距 */
  .lg\:mt-8 {
    margin-top: 1.5rem;
  }

  /* 24px */
  .lg\:mb-24 {
    margin-bottom: 3rem;
  }

  /* 48px */
  .lg\:p-4 {
    padding: 0.75rem;
  }

  /* 12px */
}

@media (min-width: 1280px) {

  /* 超大屏幕：2.5倍间距 */
  .xl\:mt-10 {
    margin-top: 2rem;
  }

  /* 32px */
  .xl\:mb-40 {
    margin-bottom: 4rem;
  }

  /* 64px */
  .xl\:p-4 {
    padding: 1rem;
  }

  /* 16px */
}
</style>
