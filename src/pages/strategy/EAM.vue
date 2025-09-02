<template>
  <section class="h-full w-full text-[#072867]">
    <div class="relative">
      <img src="@/assets/images/strategy/EAM/bg.png" alt="" srcset="" class="h-[20vh] md:h-170 w-full object-cover">
      <div class="text-white absolute bottom-0 w-full">
        <Container type="extra-wide">
          <div class="px-10">
            <p class="text-sm sm:text-base md:text-5xl font-bold">{{ t('pages.EAM.title1') }}</p>
            <p
              class="text-xl sm:text-2xl md:text-7xl font-bold mt-2 sm:mt-3 md:mt-4 lg:mt-5 mb-4 sm:mb-6 md:mb-8 lg:mb-10">
              {{ t('pages.EAM.title') }}
            </p>
            <div class="w-24 md:w-60  h-1.5 md:h-2 bg-[#A37B24]"></div>
          </div>
        </Container>
      </div>
    </div>
    <div class=" py-6 sm:py-8 md:py-10">
      <Container type="extra-wide">
        <div class="px-10">


          <p class="text-base sm:text-lg md:text-xl leading-relaxed">
            {{ t('pages.EAM.description') }}</p>
          <p
            class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 border-b border-[#1A2E56] pb-2 sm:pb-2.5 md:pb-3 mt-6 sm:mt-8 md:mt-12 lg:mt-16">
            {{ t('pages.EAM.ourAdvantages.title') }}</p>
          <p class="text-base sm:text-lg md:text-xl leading-relaxed">
            {{ t('pages.EAM.ourAdvantages.content') }}</p>
          <div class="mt-6 sm:mt-8 md:mt-10">
            <div class="relative mb-2">
              <div
                class="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 rounded-full bg-[#345CAC] absolute -left-4 sm:-left-6 md:-left-8 top-1/2 -translate-y-1/2">
              </div>
              <p class=" text-lg sm:text-xl md:text-2xl font-bold">
                {{ t('pages.EAM.ourAdvantages.points[0].label') }}</p>
            </div>
            <p class="text-base sm:text-lg md:text-xl leading-relaxed">
              {{ t('pages.EAM.ourAdvantages.points[0].desc') }}</p>
          </div>
          <div class="mt-6 sm:mt-8 md:mt-10">
            <div class="relative mb-2">
              <div
                class="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 rounded-full bg-[#345CAC] absolute -left-4 sm:-left-6 md:-left-8 top-1/2 -translate-y-1/2">
              </div>
              <p class=" text-lg sm:text-xl md:text-2xl font-bold">
                {{ t('pages.EAM.ourAdvantages.points[1].label') }}</p>
            </div>
            <p class="text-base sm:text-lg md:text-xl leading-relaxed">
              {{ t('pages.EAM.ourAdvantages.points[1].desc') }}</p>
          </div>
          <div class="mt-6 sm:mt-8 md:mt-10">
            <div class="relative mb-2">
              <div
                class="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 rounded-full bg-[#345CAC] absolute -left-4 sm:-left-6 md:-left-8 top-1/2 -translate-y-1/2">
              </div>
              <p class=" text-lg sm:text-xl md:text-2xl font-bold">
                {{ t('pages.EAM.ourAdvantages.points[2].label') }}</p>
            </div>
            <p class="text-base sm:text-lg md:text-xl leading-relaxed">
              {{ t('pages.EAM.ourAdvantages.points[2].desc') }}
            </p>
          </div>
          <p
            class="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 border-b border-[#1A2E56] pb-2 sm:pb-2.5 md:pb-3 mt-6 sm:mt-8 md:mt-12 lg:mt-16">
            {{ t('pages.EAM.valueLink.title') }}</p>
          <div class="p-2 sm:p-3 md:p-4">
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
import bg2 from '@/assets/images/strategy/EAM/bg2.png'
import bg3 from '@/assets/images/strategy/EAM/bg3.png'
import bg4 from '@/assets/images/strategy/EAM/bg4.png'
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
</script>

<style scoped></style>