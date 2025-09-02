<template>
  <PageWrapper>
    <section class="h-full w-full text-[#072867]">
      <!-- Banner区域 -->
      <div class="relative">
        <img src="@/assets/images/insights/banner.png" alt="" srcset="" class="w-full h-170 object-cover">
        <div class="absolute bottom-0 w-full text-white  ">
          <Container type="extra-wide">
            <div class="px-10">
              <p class="text-5xl font-bold">{{ t('pages.insights.enTitle') }}</p>
              <p class="text-7xl font-bold mt-6 mb-12">
                {{
                  t('pages.insights.title') }}</p>
              <div class="w-60 h-2 bg-[#A37B24]"></div>
            </div>
          </Container>
        </div>
      </div>
      <Container type="extra-wide">
        <!-- 描述区域 -->
        <div class="px-10">
          <div class="py-20">

            <p class="text-xl leading-relaxed tracking-wide">
              {{ t('pages.insights.description') }}
            </p>
          </div>

          <!-- 投资洞察标题区域 -->

          <div class="flex items-center gap-6 border-b border-[#1A2E56] pb-6 mb-8">
            <img src="@/assets/images/strategy/icon.png" alt="" srcset="" class="w-10 h-10 flex-shrink-0">
            <span class="text-4xl font-bold">{{
              t('pages.insights.investmentInsights.title') }}</span>
          </div>
          <p class="text-xl leading-relaxed tracking-wide mb-20">
            {{ t('pages.insights.investmentInsights.content') }}
          </p>
        </div>
      </Container>
      <!-- 第一个洞察研究区域 -->
      <div class="bg-[#EBEFF4] " v-if="articles && articles.length > 0">
        <Container type="extra-wide">
          <div class="px-10 py-10 flex flex-row items-center gap-24 relative mb-40">
            <div class="">
              <img src="@/assets/images/insights/new.png" alt="" srcset="" class="h-10 w-auto object-cover mb-4">
              <p class="text-4xl font-bold mb-10 line-clamp-2">{{
                articles[0].title }}</p>
              <p class="text-2xl mb-12">{{
                dayjs.unix(articles[0].publishDate).format('YYYY-MM-DD') }}</p>
              <p class="text-xl mb-12 leading-relaxed line-clamp-4">
                {{
                  articles[0].abstract }}</p>
              <div
                class="inline-flex items-center py-1 px-6 gap-8 mt-6 bg-[#072867] text-white text-base cursor-pointer"
                @click="handleClick(articles[0].articleCode)">
                <span>{{ t('pages.insights.articles[0].linkText') }}</span>
                <svg class="w-6 h-9 text-[#A37B24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <img :src="articles[0].conver" alt="" srcset=""
              class="w-199 h-155 object-cover translate-y-30 -translate-x-8">

          </div>
        </Container>
      </div>
      <!-- 第二个洞察研究区域 -->
      <div class="relative my-60" v-if="articles && articles.length > 1">
        <Container type="extra-wide">
          <div class="flex justify-end items-end">
            <img :src="articles[1].conver" alt="" srcset="" class="w-199 h-155 object-cover" v-if="articles[1].conver">
            <div class="flex-1 px-20 py-10 bg-[#EBEFF4] h-130">
              <p class="text-4xl font-bold mb-10 line-clamp-2">{{
                articles[1].title }}</p>
              <p class="text-2xl mb-12">{{
                dayjs.unix(articles[1].publishDate).format('YYYY-MM-DD') }}</p>
              <p class="text-xl mb-12 leading-relaxed line-clamp-4">
                {{
                  articles[1].abstract }}</p>
              <div
                class="inline-flex items-center py-1 px-4 gap-8 mt-6 bg-[#072867] text-white text-base cursor-pointer"
                @click="handleClick(articles[1].articleCode)">
                <span>{{ t('pages.insights.articles[0].linkText') }}</span>
                <svg class="w-6 h-9 text-[#A37B24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <!-- 第三个洞察研究区域 -->
      <div class="bg-[#EBEFF4]" v-if="articles && articles.length > 2">
        <Container type="extra-wide">
          <div class="px-10 py-10 flex flex-row items-center gap-24 relative">
            <div class="">
              <p class="text-4xl font-bold mb-10 line-clamp-2">{{
                articles[2].title }}</p>
              <p class="text-2xl mb-12">{{
                dayjs.unix(articles[2].publishDate).format('YYYY-MM-DD') }}</p>
              <p class="text-xl mb-12 leading-relaxed line-clamp-4">
                {{
                  articles[2].abstract }}</p>
              <div
                class="inline-flex items-center py-1 px-6 gap-8 mt-6 bg-[#072867] text-white text-base cursor-pointer"
                @click="handleClick(articles[2].articleCode)">
                <span>{{ t('pages.insights.articles[0].linkText') }}</span>
                <svg class="w-6 h-9 text-[#A37B24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <img :src="articles[2].conver" alt="" srcset=""
              class="w-199 h-155 object-cover -translate-y-30 -translate-x-8">

          </div>
        </Container>

      </div>
    </section>
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from '@/components/PageWrapper.vue'
import { useI18n } from 'vue-i18n'
import Container from '@/components/Container.vue'
import dayjs from 'dayjs'
import { useCustomApiWithAutoRefresh } from '@/utils/useAutoRefreshApi'
import api from '@/utils/http'
import router from '@/router'

const { t } = useI18n()
const { data: articles } = useCustomApiWithAutoRefresh<any[]>(() => api.get({
  url: '/article/list',
  params: {
    column: 'insights',
    count: 3
  }
}))

const handleClick = (code: string) => {


  router.push({ name: 'insightsDetail', query: { code } })
}

</script>

<style lang="scss" scoped></style>