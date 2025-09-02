<template>
  <section
    class="h-full w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-30 text-[#072867] bg-[url('@/assets/images/about/team/bg.png')] bg-cover bg-no-repeat">
    <Container type="extra-wide">
      <div class="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        <div class="bg-[#345CAC] w-1.5 sm:w-2 h-24 sm:h-28 md:h-32 lg:h-36"> </div>
        <div class="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight sm:leading-normal md:leading-14">
          <p>{{ t('pages.team.title1') }}</p>
          <p class="text-3xl sm:text-4xl md:text-5xl">{{ t('pages.team.title') }}</p>
        </div>
      </div>
      <div class="my-8 sm:my-12 md:my-16 lg:my-20 text-base sm:text-lg md:text-xl leading-relaxed">
        <p>{{ t('pages.team.desc') }}</p>
        <p>{{ t('pages.team.desc2') }}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        <template v-for="item in teamList" :key="item.id">
          <div class="rounded-lg overflow-hidden shadow-xl flex flex-col">
            <div class="bg-white px-3 sm:px-4">
              <div class="flex justify-center items-center">
                <img :src="item.conver" alt="avatar" class="w-80 h-80 object-cover rounded-lg">
              </div>
              <div class="py-3 sm:py-4 px-4 sm:px-6 md:px-8 lg:px-10">
                <p class="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">{{ item.title }}</p>
                <p class="text-base sm:text-lg md:text-xl mt-1 sm:mt-2">{{ item.abstract }}</p>
              </div>
            </div>
            <div class="p-3 sm:p-4 bg-[#072867] text-white flex-1">
              <div class="rich-text-content prose max-w-none" v-html="item.content"></div>
            </div>
          </div>
        </template>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from '@/components/Container.vue'
import { useI18n } from 'vue-i18n'
import { useCustomApiWithAutoRefresh } from '@/utils/useAutoRefreshApi'
import api from '@/utils/http'
const { t } = useI18n()

interface TeamItem {
  id: number
  title: string
  abstract: string
  conver: string
  content: string
}

const { data: teamList } = useCustomApiWithAutoRefresh<TeamItem[]>(() => api.get({
  url: '/article/list',
  params: {
    column: 'team',
    count: 9999
  }
}))


</script>

<style scoped></style>