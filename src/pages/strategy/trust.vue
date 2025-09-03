<template>
  <section class="h-full w-full text-[#072867]">
    <div class="relative">
      <img src="@/assets/images/strategy/EAM/bg.png" alt="" srcset="" class="h-170 w-full object-cover">
      <div class="text-white absolute bottom-0 w-full ">
        <Container type="extra-wide">
          <div class="px-10">
            <p class="text-5xl font-bold">{{ t('pages.trust.title1') }}
            </p>
            <p class="text-7xl font-bold mt-4 mb-8">
              {{ t('pages.trust.title') }}
            </p>
            <div class="w-60 h-2 bg-[#A37B24]"></div>
          </div>
        </Container>
      </div>
    </div>
    <div class="py-16 bg-[#f7f9fa]">
      <Container type="extra-wide">
        <div class="px-10">
          <p class="text-3xl font-bold">{{ t('pages.trust.subtitle') }}</p>
          <p class="text-xl my-10 leading-relaxed">
            {{ t('pages.trust.description') }}</p>
          <div class="grid grid-cols-3 gap-8">
            <template v-for="item in officeList" :key="item.title">
              <div class="flex items-center gap-8 p-8 bg-white shadow-xs rounded-lg">
                <img :src="item.image" alt="" class="w-14 flex-shrink-0">
                <div class="min-w-0 h-full">
                  <p class="text-2xl font-bold mb-4 leading-tight">
                    {{
                      t(item.title) }}</p>
                  <p class="text-lg opacity-60 leading-relaxed">{{
                    t(item.description)
                  }}
                  </p>
                </div>
              </div>
            </template>
          </div>
          <p class="text-3xl font-bold mb-6 border-b border-[#1A2E56] pb-3 mt-16">
            {{ t('pages.trust.establishment.title') }}</p>
          <p class="text-xl leading-relaxed">
            {{ t('pages.trust.establishment.content') }}
          </p>
          <p class="text-3xl font-bold mb-6 border-b border-[#1A2E56] pb-3 mt-16">
            {{ t('pages.trust.coreValues.title') }}</p>

          <div class="py-10">
            <p class="text-2xl font-bold text-center">
              {{ t('pages.trust.coreValues.sections[0].name') }}
            </p>
            <div class="grid grid-cols-3 gap-4 text-white mt-7 mb-14">
              <div class="bg-[#082867] flex items-center gap-6 pl-10 py-3 px-2">
                <img src="@/assets/images/strategy/trust/image4.png" alt="" class="h-7 w-7 flex-shrink-0" srcset="">
                <p class="text-xl">
                  {{ t('pages.trust.coreValues.sections[0].items[0]') }}
                </p>
              </div>
              <div class="bg-[#082867] flex items-center gap-6 pl-10 py-3 px-2">
                <img src="@/assets/images/strategy/trust/image4.png" alt="" class="h-7 w-7 flex-shrink-0" srcset="">
                <p class="text-xl">
                  {{ t('pages.trust.coreValues.sections[0].items[1]') }}
                </p>
              </div>
              <div class="bg-[#082867] flex items-center gap-6 pl-10 py-3 px-2">
                <img src="@/assets/images/strategy/trust/image4.png" alt="" class="h-7 w-7 flex-shrink-0" srcset="">
                <p class="text-xl">
                  {{ t('pages.trust.coreValues.sections[0].items[2]') }}
                </p>
              </div>
            </div>
            <p class="text-2xl font-bold text-center">
              {{ t('pages.trust.coreValues.sections[1].name') }}
            </p>
            <div class="grid grid-cols-3 gap-4 text-white mt-7 mb-14">
              <div class="bg-[#082867] flex items-center gap-6 pl-10 py-3 px-2">
                <img src="@/assets/images/strategy/trust/image4.png" alt="" class="h-7 w-7 flex-shrink-0" srcset="">
                <p class="text-xl">
                  {{ t('pages.trust.coreValues.sections[1].items[0]') }}
                </p>
              </div>
              <div class="bg-[#082867] flex items-center gap-6 pl-10 py-3 px-2">
                <img src="@/assets/images/strategy/trust/image4.png" alt="" class="h-7 w-7 flex-shrink-0" srcset="">
                <p class="text-xl">
                  {{ t('pages.trust.coreValues.sections[1].items[1]') }}
                </p>
              </div>
              <div class="bg-[#082867] flex items-center gap-6 pl-10 py-3 px-2">
                <img src="@/assets/images/strategy/trust/image4.png" alt="" class="h-7 w-7 flex-shrink-0" srcset="">
                <p class="text-xl">
                  {{ t('pages.trust.coreValues.sections[1].items[2]') }}
                </p>
              </div>
            </div>
            <p class="text-2xl font-bold text-center">
              {{ t('pages.trust.coreValues.sections[2].name') }}
            </p>
            <div class="grid grid-cols-3 gap-4 text-white mt-7 mb-14">
              <div class="bg-[#082867] flex items-center gap-6 pl-10 py-3 px-2">
                <img src="@/assets/images/strategy/trust/image4.png" alt="" class="h-7 w-7 flex-shrink-0" srcset="">
                <p class="text-xl">
                  {{ t('pages.trust.coreValues.sections[2].items[0]') }}
                </p>
              </div>
              <div class="bg-[#082867] flex items-center gap-6 pl-10 py-3 px-2">
                <img src="@/assets/images/strategy/trust/image4.png" alt="" class="h-7 w-7 flex-shrink-0" srcset="">
                <p class="text-xl">
                  {{ t('pages.trust.coreValues.sections[2].items[1]') }}
                </p>
              </div>
              <div class="bg-[#082867] flex items-center gap-6 pl-10 py-3 px-2">
                <img src="@/assets/images/strategy/trust/image4.png" alt="" class="h-7 w-7 flex-shrink-0" srcset="">
                <p class="text-xl">
                  {{ t('pages.trust.coreValues.sections[2].items[2]') }}
                </p>
              </div>
            </div>
            <p class="text-2xl font-bold text-center">
              {{ t('pages.trust.coreValues.sections[3].name') }}
            </p>
            <div class="grid grid-cols-2 gap-4 text-white mt-7 mb-14">
              <div class="bg-[#082867] flex items-center gap-6 pl-10 py-3 px-2">
                <img src="@/assets/images/strategy/trust/image4.png" alt="" class="h-7 w-7 flex-shrink-0" srcset="">
                <p class="text-xl">
                  {{ t('pages.trust.coreValues.sections[3].items[0]') }}
                </p>
              </div>
              <div class="bg-[#082867] flex items-center gap-6 pl-10 py-3 px-2">
                <img src="@/assets/images/strategy/trust/image4.png" alt="" class="h-7 w-7 flex-shrink-0" srcset="">
                <p class="text-xl">
                  {{ t('pages.trust.coreValues.sections[3].items[1]') }}
                </p>
              </div>
            </div>
          </div>
          <p class="text-3xl font-bold mb-6 border-b border-[#1A2E56] pb-3 mt-16">
            {{ t('pages.trust.closing.content') }}</p>
          <div class="px-24">
            <img :src="images" alt="" srcset="" class="w-full h-auto"></img>
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
import image1 from '@/assets/images/strategy/trust/image1.png'
import image2 from '@/assets/images/strategy/trust/image2.png'
import image3 from '@/assets/images/strategy/trust/image3.png'
import bg2 from '@/assets/images/strategy/trust/bg2.jpg'
import bg3 from '@/assets/images/strategy/trust/bg3.jpg'
import bg4 from '@/assets/images/strategy/trust/bg4.jpg'
import { computed } from 'vue'

const images = computed(() => {
  if (locale.value === 'zh-CN') {
    return bg2
  } else if (locale.value === 'zh-TW') {
    return bg3
  } else {
    return bg4
  }
})

const officeList = [
  {
    image: image2,
    title: 'pages.trust.features[0].name',
    description: 'pages.trust.features[0].desc',
  },

  {
    image: image1,
    title: 'pages.trust.features[1].name',
    description: 'pages.trust.features[1].desc',
  },

  {
    image: image3,
    title: 'pages.trust.features[2].name',
    description: 'pages.trust.features[2].desc',
  },

]

</script>

<style scoped></style>