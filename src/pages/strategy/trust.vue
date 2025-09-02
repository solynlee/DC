<template>
  <section class="h-full w-full text-[#072867]">
    <div class="relative">
      <img src="@/assets/images/strategy/EAM/bg.png" alt="" srcset="" class="h-170 w-full object-cover">
      <div class="text-white absolute bottom-0 w-full ">
        <Container type="extra-wide">
          <div class="px-10">
            <p class="text-5xl font-bold">{{ t('pages.trust.title1') }}
            </p>
            <p class="text-7xl font-bold mt-2 sm:mt-3 md:mt-4 lg:mt-5 mb-4 sm:mb-6 md:mb-8 lg:mb-10">
              {{ t('pages.trust.title') }}
            </p>
            <div class="w-24 md:w-60  h-1.5 md:h-2 bg-[#A37B24]"></div>
          </div>
        </Container>
      </div>
    </div>
    <div class=" py-8 sm:py-12 md:py-16 lg:py-20 bg-[#f7f9fa]">
      <Container type="extra-wide">
        <div class="px-10">
          <p class="text-xl sm:text-2xl md:text-3xl font-bold">{{ t('pages.trust.subtitle') }}</p>
          <p class="text-base sm:text-lg md:text-xl my-6 sm:my-8 md:my-10 leading-relaxed">
            {{ t('pages.trust.description') }}</p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            <template v-for="item in officeList" :key="item.title">
              <div class="flex items-center gap-4  md:gap-8  p-4  md:p-8  bg-white shadow-xs rounded-lg">
                <img :src="item.image" alt="" class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex-shrink-0">
                <div class="min-w-0 h-full">
                  <p class="text-base  sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight">
                    {{
                      t(item.title) }}</p>
                  <p class="text-sm sm:text-base md:text-lg lg:text-xl opacity-60 leading-relaxed">{{
                    t(item.description)
                    }}
                  </p>
                </div>
              </div>
            </template>
          </div>
          <p
            class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 border-b border-[#1A2E56] pb-2 sm:pb-2.5 md:pb-3 mt-6 sm:mt-8 md:mt-12 lg:mt-16">
            {{ t('pages.trust.establishment.title') }}</p>
          <p class="text-base sm:text-lg md:text-xl leading-relaxed">
            {{ t('pages.trust.establishment.content') }}
          </p>
          <p
            class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 border-b border-[#1A2E56] pb-2 sm:pb-2.5 md:pb-3 mt-6 sm:mt-8 md:mt-12 lg:mt-16">
            {{ t('pages.trust.coreValues.title') }}</p>

          <div class="py-6 sm:py-8 md:py-10">
            <p class="text-lg sm:text-xl md:text-2xl font-bold  text-center">
              {{ t('pages.trust.coreValues.sections[0].name') }}
            </p>
            <div
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 text-white mt-4 sm:mt-5 md:mt-7 mb-8 sm:mb-10 md:mb-14">
              <div class="bg-[#082867] flex items-center gap-3 sm:gap-4 md:gap-6 pl-10 py-2 sm:py-2.5 md:py-3 px-2">
                <img src="@/assets/images/strategy/trust/image4.png" alt=""
                  class="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 flex-shrink-0" srcset="">
                <p class="text-sm sm:text-base md:text-lg lg:text-xl">
                  {{ t('pages.trust.coreValues.sections[0].items[0]') }}
                </p>
              </div>
              <div class="bg-[#082867] flex items-center gap-3 sm:gap-4 md:gap-6  pl-10 py-2 sm:py-2.5 md:py-3 px-2">
                <img src="@/assets/images/strategy/trust/image4.png" alt=""
                  class="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 flex-shrink-0" srcset="">
                <p class="text-sm sm:text-base md:text-lg lg:text-xl">
                  {{ t('pages.trust.coreValues.sections[0].items[1]') }}
                </p>
              </div>
              <div class="bg-[#082867] flex items-center gap-3 sm:gap-4 md:gap-6  pl-10 py-2 sm:py-2.5 md:py-3 px-2">
                <img src="@/assets/images/strategy/trust/image4.png" alt=""
                  class="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 flex-shrink-0" srcset="">
                <p class="text-sm sm:text-base md:text-lg lg:text-xl">
                  {{ t('pages.trust.coreValues.sections[0].items[2]') }}
                </p>
              </div>
            </div>
            <p class="text-lg sm:text-xl md:text-2xl font-bold  text-center">
              {{ t('pages.trust.coreValues.sections[1].name') }}
            </p>
            <div
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 text-white mt-4 sm:mt-5 md:mt-7 mb-8 sm:mb-10 md:mb-14">
              <div class="bg-[#082867] flex items-center gap-3 sm:gap-4 md:gap-6  pl-10 py-2 sm:py-2.5 md:py-3 px-2">
                <img src="@/assets/images/strategy/trust/image4.png" alt=""
                  class="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 flex-shrink-0" srcset="">
                <p class="text-sm sm:text-base md:text-lg lg:text-xl">
                  {{ t('pages.trust.coreValues.sections[1].items[0]') }}
                </p>
              </div>
              <div class="bg-[#082867] flex items-center gap-3 sm:gap-4 md:gap-6  pl-10 py-2 sm:py-2.5 md:py-3 px-2">
                <img src="@/assets/images/strategy/trust/image4.png" alt=""
                  class="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 flex-shrink-0" srcset="">
                <p class="text-sm sm:text-base md:text-lg lg:text-xl">
                  {{ t('pages.trust.coreValues.sections[1].items[1]') }}
                </p>
              </div>
              <div class="bg-[#082867] flex items-center gap-3 sm:gap-4 md:gap-6  pl-10 py-2 sm:py-2.5 md:py-3 px-2">
                <img src="@/assets/images/strategy/trust/image4.png" alt=""
                  class="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 flex-shrink-0" srcset="">
                <p class="text-sm sm:text-base md:text-lg lg:text-xl">
                  {{ t('pages.trust.coreValues.sections[1].items[2]') }}
                </p>
              </div>
            </div>
            <p class="text-lg sm:text-xl md:text-2xl font-bold  text-center">
              {{ t('pages.trust.coreValues.sections[2].name') }}
            </p>
            <div
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 text-white mt-4 sm:mt-5 md:mt-7 mb-8 sm:mb-10 md:mb-14">
              <div class="bg-[#082867] flex items-center gap-3 sm:gap-4 md:gap-6  pl-10 py-2 sm:py-2.5 md:py-3 px-2">
                <img src="@/assets/images/strategy/trust/image4.png" alt=""
                  class="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 flex-shrink-0" srcset="">
                <p class="text-sm sm:text-base md:text-lg lg:text-xl">
                  {{ t('pages.trust.coreValues.sections[2].items[0]') }}
                </p>
              </div>
              <div class="bg-[#082867] flex items-center gap-3 sm:gap-4 md:gap-6  pl-10 py-2 sm:py-2.5 md:py-3 px-2">
                <img src="@/assets/images/strategy/trust/image4.png" alt=""
                  class="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 flex-shrink-0" srcset="">
                <p class="text-sm sm:text-base md:text-lg lg:text-xl">
                  {{ t('pages.trust.coreValues.sections[2].items[1]') }}
                </p>
              </div>
              <div class="bg-[#082867] flex items-center gap-3 sm:gap-4 md:gap-6  pl-10 py-2 sm:py-2.5 md:py-3 px-2">
                <img src="@/assets/images/strategy/trust/image4.png" alt=""
                  class="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 flex-shrink-0" srcset="">
                <p class="text-sm sm:text-base md:text-lg lg:text-xl">
                  {{ t('pages.trust.coreValues.sections[2].items[2]') }}
                </p>
              </div>
            </div>
            <p class="text-lg sm:text-xl md:text-2xl font-bold  text-center">
              {{ t('pages.trust.coreValues.sections[3].name') }}
            </p>
            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4 text-white mt-4 sm:mt-5 md:mt-7 mb-8 sm:mb-10 md:mb-14">
              <div class="bg-[#082867] flex items-center gap-3 sm:gap-4 md:gap-6  pl-10 py-2 sm:py-2.5 md:py-3 px-2">
                <img src="@/assets/images/strategy/trust/image4.png" alt=""
                  class="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 flex-shrink-0" srcset="">
                <p class="text-sm sm:text-base md:text-lg lg:text-xl">
                  {{ t('pages.trust.coreValues.sections[3].items[0]') }}
                </p>
              </div>
              <div class="bg-[#082867] flex items-center gap-3 sm:gap-4 md:gap-6  pl-10 py-2 sm:py-2.5 md:py-3 px-2">
                <img src="@/assets/images/strategy/trust/image4.png" alt=""
                  class="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 flex-shrink-0" srcset="">
                <p class="text-sm sm:text-base md:text-lg lg:text-xl">
                  {{ t('pages.trust.coreValues.sections[3].items[1]') }}
                </p>
              </div>
            </div>
          </div>
          <p
            class="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 border-b border-[#1A2E56] pb-2 sm:pb-2.5 md:pb-3 mt-6 sm:mt-8 md:mt-12 lg:mt-16">
            {{ t('pages.trust.closing.content') }}</p>
          <div class="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
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