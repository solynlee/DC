<template>
  <section class="h-full w-full text-[#072867]" v-loading="loading">
    <Container type="extra-wide">
      <div class="py-20 pl-4">
        <div class="h-2 w-40 bg-[#A37B24]"></div>
        <p class="text-3xl font-bold my-10">{{ article?.title }}</p>
        <p class="text-xl text-[#2d5ca9]">{{ dayjs.unix(article?.publishDate).format('YYYY-MM-DD') }}</p>
      </div>
    </Container>
    <!-- <div class="bg-[#EBEFF4] mt-10 md:mt-30">
      <Container type="extra-wide" class=" flex flex-col md:flex-row md:items-center gap-6 md:gap-40 relative ">
        <div class="w-full md:w-2/5 order-2 md:order-1">
          <p
            class="text-sm md:text-base lg:text-lg xl:text-xl mb-4 md:mb-8 lg:mb-10 xl:mb-12 leading-relaxed line-clamp-4">
            {{
              article?.abstract }}</p>
        </div>
        <div class="w-full md:w-3/5 order-1 md:order-2" v-if="article?.conver">
          <img :src="url + article?.conver" alt="" srcset=""
            class="w-full h-48 md:h-auto object-cover md:-translate-y-40 md:-translate-x-8">
        </div>
      </Container>
    </div> -->
    <div class="bg-[#ebeff4]">
      <Container type="extra-wide">
        <div class="rich-text-content prose max-w-none" v-html="article?.content"></div>
      </Container>
    </div>
  </section>
</template>

<script setup lang="ts">
import Container from '@/components/Container.vue'
import { useCustomApiWithAutoRefresh } from '@/utils/useAutoRefreshApi'
import api from '@/utils/http'
import dayjs from 'dayjs'

import { useRoute } from 'vue-router'
const route = useRoute()



const { data: article, loading } = useCustomApiWithAutoRefresh<any>(() => api.get({
  url: `/article/code`,
  params: {
    code: route.query.code
  }
}))

console.log(route.query.id);



</script>

<style lang="scss" scoped></style>