<template>
  <section class="h-full w-full text-[#072867]">
    <div class="relative">
      <img src="@/assets/images/strategy/company/banner.png" alt="" srcset=""
        class="h-[20vh] md:h-170 w-full object-cover">
      <div class="text-white absolute bottom-0 w-full ">
        <Container type="extra-wide">
          <div class="px-10">
            <p class="text-sm md:text-5xl font-bold">{{ t('pages.company.title1') }}
            </p>
            <p class="text-xl md:text-7xl font-bold mt-2 sm:mt-3 md:mt-4 lg:mt-5 mb-4 sm:mb-6 md:mb-8 lg:mb-10">
              {{ t('pages.company.title') }}
            </p>
            <div class="w-24 md:w-60  h-1.5 md:h-2 bg-[#A37B24]"></div>
          </div>
        </Container>
      </div>
    </div>

    <div class=" py-8 sm:py-12 md:py-16 lg:py-20 bg-[#f7f9fa]">
      <Container type="extra-wide">
        <div class="px-10">


          <p class="text-xl sm:text-2xl md:text-3xl font-bold">{{ t('pages.company.subtitle') }}</p>
          <p class="text-base sm:text-lg md:text-xl my-6 sm:my-8 md:my-10 leading-relaxed">
            {{ t('pages.company.description') }}</p>
          <p
            class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 border-b border-[#1A2E56] pb-2 sm:pb-2.5 md:pb-3 mt-6 sm:mt-8 md:mt-12 lg:mt-16">
            {{ t('pages.company.serviceModules.title') }}</p>
          <!-- <p class="text-base sm:text-lg md:text-xl leading-relaxed">
            {{ t('pages.company.serviceModules.content') }}
          </p> -->
          <div class="px-4 sm:px-8 md:px-16  py-8 sm:py-12 md:py-16 lg:py-20">
            <img :src="images" alt="" class="w-full h-auto" srcset="">
          </div>
          <p
            class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 border-b border-[#1A2E56] pb-2 sm:pb-2.5 md:pb-3 mt-6 sm:mt-8 md:mt-12 lg:mt-16">
            {{ t('pages.company.whyChoose.title') }}</p>
          <div class="flex flex-col lg:flex-row justify-center items-center gap-12">
            <div class="flex-1 flex justify-center">
              <img src="@/assets/images/strategy/company/bg.png" alt="" srcset=""
                class="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none lg:w-full">
            </div>
            <div>
              <p class=" text-3xl font-bold sm:mb-4 leading-tight">
                {{ t('pages.company.whyChoose.content') }}</p>
              <p class="text-3xl font-bold mt-6 sm:mt-8 md:mt-10">
                {{ t('pages.company.whyChoose.partner') }}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Container from '@/components/Container.vue'
import image1 from '@/assets/images/strategy/company/image1.png'
import image2 from '@/assets/images/strategy/company/image2.png'
import image3 from '@/assets/images/strategy/company/image3.png'
import { computed } from 'vue'


const { t, locale } = useI18n()

const images = computed(() => {
  if (locale.value === 'zh-CN') {
    return image3
  } else if (locale.value === 'zh-TW') {
    return image1
  } else {
    return image2
  }
})

</script>

<style scoped></style>