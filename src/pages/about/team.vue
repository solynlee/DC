<template>
  <section
    class="h-full w-full py-30 text-[#072867] bg-[url('@/assets/images/about/team/bg.png')] bg-cover bg-no-repeat">
    <Container type="extra-wide">
      <div class="flex items-center gap-10">
        <div class="bg-[#345CAC] w-2 h-36"> </div>
        <div class="text-4xl font-bold leading-14">
          <p>{{ t('pages.team.title1') }}</p>
          <p class="text-5xl">{{ t('pages.team.title') }}</p>
        </div>
      </div>
      <div class="my-20 text-xl leading-relaxed">
        <p>{{ t('pages.team.desc') }}</p>
        <p>{{ t('pages.team.desc2') }}</p>
      </div>
      <div class="grid grid-cols-3 gap-10">
        <template v-for="item in teamList" :key="item.id">
          <div class="rounded-lg overflow-hidden shadow-xl flex flex-col">
            <div class="bg-white px-4">
              <div class="flex justify-center items-center">
                <img :src="item.conver" alt="avatar" class="w-80 h-80 object-cover rounded-lg">
              </div>
              <div class="py-4 px-10">
                <p class="text-3xl font-bold leading-tight">{{ item.title }}</p>
                <p class="text-xl mt-2">{{ item.abstract }}</p>
              </div>
            </div>
            <div class="p-4 bg-[#072867] text-white flex-1">
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