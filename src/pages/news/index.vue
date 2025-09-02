<template>
  <PageWrapper>
    <section class="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      :style="`background-image: url(${newsBgImage})`">
      <!-- 背景遮罩层 -->
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>

      <!-- 内容容器 - 不使用绝对定位 -->
      <Container type="extra-wide">


        <div class="relative z-10 w-full pb-16">
          <!-- 标题布局 -->
          <div class="flex items-center justify-center pl-30 pt-40">
            <div class="w-3 h-32 bg-[#345CAC] mr-10"></div>
            <div class="flex-1 flex justify-center flex-col">
              <h1 class="text-4xl font-bold text-[#072867] tracking-wider mb-6">
                {{ t('pages.news.title2') }}
              </h1>
              <h2 class="text-5xl font-bold text-[#072867] tracking-wide">
                {{ t('pages.news.title') }}
              </h2>
            </div>
          </div>

          <!-- 公司动态区域 -->
          <div class="flex justify-center w-full mt-44 pb-16">
            <div class="w-[95%] px-8">
              <div class="bg-gradient-to-b from-[#01398E] to-[#6997DD] backdrop-blur-sm rounded-lg p-10">

                <div class="absolute inset-0 opacity-10">
                  <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/20 to-transparent"></div>
                  <div class="absolute bottom-0 left-0 w-1/2 h-1/3 bg-gradient-to-tr from-white/10 to-transparent">
                  </div>
                </div>

                <div class="relative flex flex-col justify-center px-16 py-12">

                  <div class="text-center mb-12">
                    <div class="flex items-center justify-center mb-4">
                      <div class="w-16 h-px bg-white/60"></div>
                      <h3 class="text-4xl font-bold text-white mx-6 tracking-wider">
                        {{ t('pages.news.title3') }}
                      </h3>
                      <div class="w-16 h-px bg-white/60"></div>
                    </div>
                  </div>




                  <!-- <div class="absolute inset-0 opacity-10">
                      <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/20 to-transparent">
                      </div>
                      <div class="absolute bottom-0 left-0 w-1/2 h-1/3 bg-gradient-to-tr from-white/10 to-transparent">
                      </div>
                    </div> -->

                  <div class="grid grid-cols-3 gap-8">
                    <!-- 桌面端动态新闻卡片 -->
                    <div v-for="item in newsData" :key="item.id"
                      class="group bg-gradient-to-b from-white/20 via-[#072867]/80 to-[#072867] backdrop-blur-sm rounded-lg overflow-hidden hover:from-white/30 hover:via-[#072867]/90 hover:to-[#072867] transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                      @click="handleNewsClick(item.articleCode)">
                      <div class="aspect-[4/3] overflow-hidden">
                        <img :src="item.conver" :alt="item.title"
                          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                      </div>
                      <div class="p-6">
                        <div class="w-8 h-1 bg-[#A37B24] mb-3"></div>

                        <h4 class="text-lg font-bold text-white mb-3 line-clamp-2 leading-tight">
                          {{ item.title }}
                        </h4>

                        <p class="text-white/80 text-sm leading-relaxed mb-4 line-clamp-2">
                          {{ item.summary }}
                        </p>

                        <div class="flex items-center justify-between">
                          <button
                            class="group/btn flex items-center text-white font-medium hover:text-yellow-400 transition-colors duration-300 text-sm">
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