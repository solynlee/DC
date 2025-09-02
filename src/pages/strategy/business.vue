<template>
  <section class="h-full w-full text-[#072867]">
    <div class="relative">
      <img src="@/assets/images/strategy/business/banner.png" alt="" srcset=""
        class="h-[20vh] md:h-170 w-full object-cover">
      <div class="text-white absolute bottom-0 w-full ">
        <Container type="extra-wide">
          <div class="px-10">
            <p class="text-sm md:text-5xl font-bold">{{ t('pages.business.title1') }}
            </p>
            <p class="text-xl md:text-7xl font-bold mt-2 sm:mt-3 md:mt-4 lg:mt-5 mb-4 sm:mb-6 md:mb-8 lg:mb-10">
              {{ t('pages.business.title') }}
            </p>
            <div class="w-24 md:w-60  h-1.5 md:h-2 bg-[#A37B24]"></div>
          </div>
        </Container>
      </div>
    </div>
    <div class=" py-8 sm:py-12 md:py-16 lg:py-20 bg-[#f7f9fa]">
      <Container type="extra-wide">
        <div class="px-10">
          <p class="text-xl sm:text-2xl md:text-3xl font-bold">{{ t('pages.business.subtitle') }}</p>
          <p class="text-base sm:text-lg md:text-xl my-6 sm:my-8 md:my-10 leading-relaxed">
            {{ t('pages.business.description') }}</p>
          <p
            class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 border-b border-[#1A2E56] pb-2 sm:pb-2.5 md:pb-3 mt-6 sm:mt-8 md:mt-12 lg:mt-16">
            {{ t('pages.business.serviceMatrix.title') }}</p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 my-10">
            <div class="lg:gap-10 py-10 px-20 text-center bg-white shadow-xs rounded-lg hover:shadow-2xl">
              <p class="text-base  sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight">
                {{ t('pages.business.serviceMatrix.items.0.name') }}</p>
              <p class="text-sm px-10 md:text-xl opacity-60 leading-relaxed">
                {{ t('pages.business.serviceMatrix.items.0.desc') }}
              </p>
            </div>
            <div class="lg:gap-10 py-10 px-20 text-center bg-white shadow-xs rounded-lg hover:shadow-2xl">
              <p class="text-base  sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight">
                {{ t('pages.business.serviceMatrix.items.1.name') }}</p>
              <p class="text-sm md:text-xl opacity-60 leading-relaxed">
                {{ t('pages.business.serviceMatrix.items.1.desc') }}
              </p>
            </div>
            <div class="lg:gap-10 py-10 px-20 text-center bg-white shadow-xs rounded-lg hover:shadow-2xl">
              <p class="text-base  sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight">
                {{ t('pages.business.serviceMatrix.items.2.name') }}</p>
              <p class="text-sm md:text-xl opacity-60 leading-relaxed">
                {{ t('pages.business.serviceMatrix.items.2.desc') }}
              </p>
            </div>
            <div class="lg:gap-10 py-10 px-10 text-center bg-white shadow-xs rounded-lg hover:shadow-2xl">
              <p class="text-base  sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight">
                {{ t('pages.business.serviceMatrix.items.3.name') }}</p>
              <p class="text-sm  md:text-xl opacity-60 leading-relaxed">
                {{ t('pages.business.serviceMatrix.items.3.desc') }}
              </p>
            </div>
            <div class="lg:gap-10 py-10 px-20 text-center bg-white shadow-xs rounded-lg hover:shadow-2xl">
              <p class="text-base  sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight">
                {{ t('pages.business.serviceMatrix.items.4.name') }}</p>
              <p class="text-sm md:text-xl opacity-60 leading-relaxed">
                {{ t('pages.business.serviceMatrix.items.4.desc') }}
              </p>
            </div>
          </div>
          <p
            class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 border-b border-[#1A2E56] pb-2 sm:pb-2.5 md:pb-3 mt-6 sm:mt-8 md:mt-12 lg:mt-16">
            {{ t('pages.business.whyChoose.title') }}</p>
          <div
            class="flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20">
            <div class="w-full lg:w-1/2 flex justify-center">
              <img src="@/assets/images/strategy/business/image2.png" alt="" srcset=""
                class="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none lg:w-full">
            </div>
            <div class="w-full lg:w-1/2 ">
              <p class="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
                {{ t('pages.business.whyChoose.content') }}</p>

              <div class="flex  gap-2 sm:gap-3 my-3 sm:my-4">
                <img src="@/assets/images/strategy/business/icon.png" class="h-4 mt-1 w-4 sm:h-5 sm:w-5 flex-shrink-0"
                  alt="" srcset="">
                <p class="text-sm sm:text-base md:text-lg lg:text-xl opacity-60 leading-relaxed">
                  {{ t('pages.business.whyChoose.points.0') }}</p>
              </div>
              <div class="flex  gap-2 sm:gap-3 my-3 sm:my-4">
                <img src="@/assets/images/strategy/business/icon.png" class="h-4 mt-1 w-4 sm:h-5 sm:w-5 flex-shrink-0"
                  alt="" srcset="">
                <p class="text-sm sm:text-base md:text-lg lg:text-xl opacity-60 leading-relaxed">
                  {{ t('pages.business.whyChoose.points.1') }}</p>
              </div>
              <div class="flex  gap-2 sm:gap-3 my-3 sm:my-4">
                <img src="@/assets/images/strategy/business/icon.png" class="h-4 mt-1 w-4 sm:h-5 sm:w-5 flex-shrink-0"
                  alt="" srcset="">
                <p class="text-sm sm:text-base md:text-lg lg:text-xl opacity-60 leading-relaxed">
                  {{ t('pages.business.whyChoose.points.2') }}</p>
              </div>
              <p class="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mt-6 sm:mt-8 md:mt-10">
                {{ t('pages.business.whyChoose.partner') }}
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
const { t } = useI18n()
console.log(t('pages.business.serviceMatrix.items.0.desc'));

</script>

<style scoped></style>