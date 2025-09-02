<template>
  <PageWrapper>
    <section class="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      :style="`background-image: url(${newsBgImage})`">
      <!-- 背景遮罩层 -->
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>

      <!-- 内容容器 - 不使用绝对定位 -->
      <Container type="extra-wide">


        <div class="relative z-10 w-full pb-8 md:pb-16">
          <!-- 桌面端标题布局 -->
          <div class="hidden md:flex items-center justify-center pl-4 md:pl-30 pt-16 md:pt-40">
            <div class="w-2 md:w-3 h-16 md:h-32 bg-[#345CAC] mr-6 md:mr-10"></div>
            <div class="flex-1 flex justify-center flex-col">
              <h1 class="text-xl md:text-4xl font-bold text-[#072867] tracking-wider mb-4 md:mb-6">
                {{ t('pages.news.title2') }}
              </h1>
              <h2 class="text-2xl md:text-5xl font-bold text-[#072867] tracking-wide">
                {{ t('pages.news.title') }}
              </h2>
            </div>
          </div>

          <!-- 移动端布局 -->
          <div class="md:hidden w-full">
            <!-- 顶部标题区域 -->
            <div class=" to-transparent pt-12 md:pt-16 pb-6 md:pb-8 px-4 md:px-6">
              <div class="text-center">
                <div class="w-10 h-1 md:h-12 bg-[#345CAC] mx-auto mb-3 md:mb-4 rounded-full"></div>
                <h1 class="text-base md:text-lg font-light text-white tracking-wider mb-1 md:mb-2">{{
                  t('pages.news.title2') }}</h1>
                <h2 class="text-xl md:text-2xl font-bold text-white tracking-wide">{{ t('pages.news.title') }}</h2>
              </div>
            </div>

            <!-- 中间间距 -->
            <div class="h-8 md:h-16"></div>

            <!-- 公司动态内容区域 -->
            <div
              class="bg-gradient-to-b from-[#01398E]/90 via-[#01398E]/95 to-[#01398E] backdrop-blur-sm mx-4 rounded-lg pt-6 md:pt-8 pb-8 md:pb-8 px-3 md:px-4 ">
              <!-- 公司动态标题 -->
              <div class="text-center mb-4 md:mb-6">
                <div class="w-12 md:w-16 h-0.5 bg-white/40 mx-auto mb-2 md:mb-3"></div>
                <h3 class="text-lg md:text-xl font-bold text-white tracking-wider">{{ t('pages.news.title3') }}</h3>
                <div class="w-12 md:w-16 h-0.5 bg-white/40 mx-auto mt-2 md:mt-3"></div>
              </div>

              <!-- 移动端新闻卡片垂直列表 -->
              <div class="space-y-3 md:space-y-4 max-w-xs md:max-w-sm mx-auto">
                <div v-for="(item) in newsData" :key="item.id"
                  class="mobile-news-card bg-gradient-to-b from-white/15 via-[#072867]/70 to-[#072867] rounded-lg overflow-hidden shadow-lg">
                  <!-- 图片区域 -->
                  <div class="relative aspect-[16/9] overflow-hidden">
                    <img :src="item.conver" :alt="item.title" class="w-full h-full object-cover">
                    <!-- 图片上的渐变遮罩 -->
                    <div class="absolute inset-0 bg-gradient-to-t from-[#072867]/40 via-transparent to-transparent">
                    </div>
                  </div>

                  <!-- 内容区域 -->
                  <div class="p-3 md:p-4 bg-[#072867]">
                    <!-- 装饰线 -->
                    <div class="w-5 md:w-6 h-0.5 bg-[#A37B24] rounded-full mb-2"></div>

                    <!-- 标题 -->
                    <h4 class="text-xs md:text-sm font-bold text-white mb-2 line-clamp-2 leading-tight">
                      {{ item.title }}
                    </h4>

                    <!-- 摘要 -->
                    <p class="text-white/80 text-xs leading-relaxed mb-3 line-clamp-2">
                      {{ item.summary }}
                    </p>

                    <!-- 底部操作区 -->
                    <div class="flex items-center justify-between">
                      <span
                        class="text-xs text-[#A37B24] bg-[#A37B24]/20 px-1.5 md:px-2 py-0.5 rounded-full font-medium">
                        {{ item.category }}
                      </span>
                      <button @click="handleNewsClick(item.articleCode)"
                        class="inline-flex items-center text-xs font-medium text-white bg-[#A37B24] hover:bg-[#A37B24]/80 px-2 py-1 rounded-full transition-all duration-300">
                        <span>{{ t('pages.news.btn') }}</span>
                        <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
          <!-- 桌面端公司动态区域 -->
          <div class="hidden md:flex justify-center w-full mt-16 md:mt-44 pb-8 md:pb-16">
            <div class="w-[90%] md:w-[95%] px-2 md:px-8">
              <div class="bg-gradient-to-b from-[#01398E] to-[#6997DD] backdrop-blur-sm rounded-lg p-4 md:p-10">

                <div class="absolute inset-0 opacity-10">
                  <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/20 to-transparent"></div>
                  <div class="absolute bottom-0 left-0 w-1/2 h-1/3 bg-gradient-to-tr from-white/10 to-transparent">
                  </div>
                </div>

                <div class="relative flex flex-col justify-center px-4 md:px-16 py-6 md:py-12">

                  <div class="text-center mb-6 md:mb-12">
                    <div class="flex items-center justify-center mb-3 md:mb-4">
                      <div class="w-12 md:w-16 h-px bg-white/60"></div>
                      <h3 class="text-xl md:text-4xl font-bold text-white mx-4 md:mx-6 tracking-wider">
                        {{ t('pages.news.title3') }}
                      </h3>
                      <div class="w-12 md:w-16 h-px bg-white/60"></div>
                    </div>
                  </div>


                  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8">
                    <!-- 桌面端动态新闻卡片 -->
                    <div v-for="item in newsData" :key="item.id"
                      class="group bg-gradient-to-b from-white/20 via-[#072867]/80 to-[#072867] backdrop-blur-sm rounded-lg overflow-hidden hover:from-white/30 hover:via-[#072867]/90 hover:to-[#072867] transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                      @click="handleNewsClick(item.articleCode)">
                      <div class="aspect-[4/3] overflow-hidden">
                        <img :src="item.conver" :alt="item.title"
                          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                      </div>
                      <div class="p-3 md:p-6">
                        <div class="w-6 md:w-8 h-0.5 md:h-1 bg-[#A37B24] mb-2 md:mb-3"></div>

                        <h4 class="text-xs md:text-lg font-bold text-white mb-2 md:mb-3 line-clamp-2 leading-tight">
                          {{ item.title }}
                        </h4>

                        <p class="text-white/80 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-2">
                          {{ item.summary }}
                        </p>

                        <div class="flex items-center justify-between">
                          <!-- <span
                            class="text-xs md:text-sm text-[#A37B24] bg-[#A37B24]/20 px-2 py-1 rounded-full font-medium">
                            {{ item.category }}
                          </span> -->
                          <button
                            class="group/btn flex items-center text-white font-medium hover:text-yellow-400 transition-colors duration-300 text-xs md:text-sm">
                            <span>{{ t('pages.news.btn') }}</span>
                            <svg class="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform duration-300"
                              fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                              </path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </Container>
    </section>
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from '@/components/PageWrapper.vue'
import Container from '@/components/Container.vue'

// 导入图片
import newsBgImage from '@/assets/images/news/bg.png'

import router from '@/router'
import { useCustomApiWithAutoRefresh } from '@/utils/useAutoRefreshApi'
import api from '@/utils/http'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()


// 新闻数据
interface NewsItem {
  id: number
  title: string
  summary: string
  conver: string
  category: string
  articleCode: string
}

const { data: newsData } = useCustomApiWithAutoRefresh<NewsItem[]>(() => api.get({
  url: '/article/list',
  params: {
    column: 'news',
    count: 3
  }
}))


// 新闻点击处理
const handleNewsClick = (code: string) => {
  router.push({ name: 'newsDetail', query: { code } })
}

// 新闻数据已准备就绪
</script>

<style scoped>
/* 文本截断样式 */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 确保最小高度，允许内容扩展 */
section {
  min-height: 100vh;
  background-attachment: scroll;
  background-size: cover;
  background-position: center;
}

/* 桌面端卡片悬停效果 */
.group:hover .aspect-\[4\/3\] img {
  filter: brightness(1.1);
}

/* 新闻卡片渐变背景优化 */
.group {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(7, 40, 103, 0.8), #072867);
}

.group:hover {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(7, 40, 103, 0.9), #072867);
}

/* 移动端专用样式 */
@media (max-width: 768px) {

  /* 移动端背景图片自适应 */
  section {
    min-height: 100vh;
    background-attachment: scroll;
    background-size: cover;
    background-position: center top;
  }

  /* 移动端新闻卡片 */
  .mobile-news-card {
    box-shadow: 0 6px 20px rgba(7, 40, 103, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }

  .mobile-news-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(7, 40, 103, 0.4);
  }

  /* 移动端图片优化 */
  .mobile-news-card img {
    transition: transform 0.4s ease;
  }

  .mobile-news-card:hover img {
    transform: scale(1.03);
  }

  /* 移动端标题区域文字阴影 */
  .md\:hidden h1,
  .md\:hidden h2 {
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  }
}

/* 平板端优化 */
@media (min-width: 768px) and (max-width: 1024px) {
  .lg\:grid-cols-3 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .lg\:px-16 {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

/* 平滑过渡效果 */
* {
  transition-property: transform, opacity, background-color, color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* 背景图片优化 */
img {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}
</style>