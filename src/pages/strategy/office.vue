<template>
  <section class="h-full w-full text-[#072867]">
    <div class="relative">
      <img src="@/assets/images/strategy/office/bg.png" alt="" srcset="" class="h-170 w-full object-cover">
      <div class="text-white absolute bottom-0 w-full">
        <Container type="extra-wide">
          <div class="px-10">
            <p class="text-5xl font-bold">{{ t('pages.office.title1')
            }}</p>
            <p class="text-7xl font-bold mt-5 mb-10">
              {{ t('pages.office.title') }}
            </p>
            <div class="w-60  h-2 bg-[#A37B24]"></div>
          </div>
        </Container>
      </div>
    </div>
    <div class="py-30 bg-[#f7f7f7]">
      <Container type="extra-wide">
        <div class="px-10">
          <p class="text-2xl font-bold">{{ t('pages.office.subtitle') }}</p>
          <p class="text-xl mt-8 leading-relaxed">
            {{ t('pages.office.description') }}</p>
          <p class="text-2xl font-bold mb-6 border-b border-[#1A2E56] pb-3 mt-16">
            {{ t('pages.office.whyChooseUs.title') }}</p>
          <p class="text-xl my-8 leading-relaxed">
            {{ t('pages.office.whyChooseUs.content') }}</p>
          <div class="grid grid-cols-2  gap-10">
            <template v-for="item in officeList" :key="item.title">
              <div class="flex items-center gap-10 p-10 bg-white shadow-xs rounded-lg">
                <img :src="item.image" alt="" class="w-14 h-14 flex-shrink-0">
                <div class="min-w-0 h-full">
                  <p class="text-2xl font-bold mb-4 leading-tight">{{
                    t(item.title) }}</p>
                  <p class="text-xl opacity-60 leading-relaxed">{{
                    t(item.description)
                  }}
                  </p>
                </div>
              </div>
            </template>
          </div>
        </div>
      </Container>
    </div>
    <div class="bg-[#EBEFF4]  ">
      <Container type="extra-wide">
        <div class="px-10 flex flex-row justify-center items-center py-16 xl:py-20 gap-20 xl:gap-30">
          <div class="w-1/2 flex justify-center">
            <img :src="images" alt="" srcset="" class="w-full  bg-[#EBEFF4] ">
          </div>
          <div class="w-1/2 pr-40">
            <p class="text-2xl xl:text-3xl 2xl:text-4xl font-bold leading-12">
              {{ t('pages.office.valueProposition.title') }} </p>
            <p class="text-2xl xl:text-3xl 2xl:text-4xl font-bold  mb-10">
              {{ t('pages.office.valueProposition.title2') }}
            </p>

            <p class="text-xl pr-20 my-10 leading-relaxed text-algin-justify">
              {{ t('pages.office.valueProposition.content') }}
            </p>
          </div>
        </div>
      </Container>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Container from '@/components/Container.vue'
const { t, locale } = useI18n()

import image1 from '@/assets/images/strategy/office/image1.png'
import image2 from '@/assets/images/strategy/office/image2.png'
import image3 from '@/assets/images/strategy/office/image3.png'
import image4 from '@/assets/images/strategy/office/image4.png'
import image5 from '@/assets/images/strategy/office/image5.png'
import image6 from '@/assets/images/strategy/office/image6.png'
import bg2 from '@/assets/images/strategy/office/bg2.png'
import bg3 from '@/assets/images/strategy/office/bg3.jpg'
import bg4 from '@/assets/images/strategy/office/bg4.jpg'
import { computed } from 'vue'

const images = computed(() => {
  if (locale.value === 'zh-CN') {
    return bg2
  } else if (locale.value === 'zh-TW') {
    return bg4
  } else {
    return bg3
  }
})
const officeList = [
  {
    image: image3,
    title: 'pages.office.whyChooseUs.services[0].name',
    description: 'pages.office.whyChooseUs.services[0].desc',
  },
  {
    image: image6,
    title: 'pages.office.whyChooseUs.services[1].name',
    description: 'pages.office.whyChooseUs.services[1].desc',
  },
  {
    image: image1,
    title: 'pages.office.whyChooseUs.services[2].name',
    description: 'pages.office.whyChooseUs.services[2].desc',
  },

  {
    image: image2,
    title: 'pages.office.whyChooseUs.services[3].name',
    description: 'pages.office.whyChooseUs.services[3].desc',
  },
  {
    image: image4,
    title: 'pages.office.whyChooseUs.services[4].name',
    description: 'pages.office.whyChooseUs.services[4].desc',
  },

  {
    image: image5,
    title: 'pages.office.whyChooseUs.services[5].name',
    description: 'pages.office.whyChooseUs.services[5].desc',
  },
]

</script>

<style scoped></style>