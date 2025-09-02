<template>
  <section class="h-full w-full text-[#072867]">
    <div class="relative">
      <img src="@/assets/images/about/value/bg.png" alt="" srcset="" class="h-[25vh] md:h-170 w-full object-cover">
      <div class="text-white absolute bottom-0 w-full ">
        <Container type="extra-wide">
          <div class="px-10">
            <p class="text-sm md:text-5xl font-bold">{{
              t('pages.value.title1') }}</p>
            <p class="text-xl md:text-7xl font-bold mt-2 md:mt-5 mb-4 md:mb-10">
              {{ t('pages.value.title') }}</p>
            <div class="w-24 md:w-60 h-1.5 md:h-2 bg-[#A37B24]"></div>
          </div>
        </Container>
      </div>
    </div>
    <Container type="extra-wide">
      <div class="px-10 py-8 md:py-20">
        <p class="text-base md:text-xl mb-8 md:mb-20 leading-relaxed">
          {{ t('pages.value.intro') }}</p>
        <p class="text-lg md:text-2xl font-bold mb-4 md:mb-6 border-b border-[#1A2E56] pb-2 md:pb-3">
          {{ t('pages.value.licensedQualifications.title') }}</p>
        <p class="text-base md:text-xl leading-relaxed">
          {{ t('pages.value.licensedQualifications.desc') }}</p>
        <div
          class="bg-[#072767] text-white px-2 md:px-10 py-4 md:py-10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-20 mt-4 md:mt-6">
          <div class="flex justify-between items-center w-full md:w-1/2 gap-2 md:gap-12">
            <img src="@/assets/images/about/value/left.png" alt="" class="h-12 md:h-35 w-auto flex-shrink-0" srcset="">
            <div class="flex-1 text-center min-w-0">
              <p class="text-sm md:text-2xl mb-1 md:mb-4 leading-tight">
                {{ t('pages.value.licensedQualifications.items[0].name') }}</p>
              <p class="text-xs md:text-xl opacity-60">
                {{ t('pages.value.licensedQualifications.items[0].desc') }}

              </p>
            </div>
            <img src="@/assets/images/about/value/right.png" alt="" class="h-12 md:h-35 w-auto flex-shrink-0" srcset="">
          </div>
          <div class="w-full md:w-1/2 text-xs md:text-xl leading-5 md:leading-10 opacity-60 text-center md:text-left">
            <p class="text-center">{{ t('pages.value.licensedQualifications.items[0].desc1') }}
              <br>
              {{ t('pages.value.licensedQualifications.items[0].desc2') }}
              <br />
              {{ t('pages.value.licensedQualifications.items[0].desc3') }}
            </p>
          </div>
        </div>

        <div
          class="bg-[#072767] text-white px-2 md:px-10 py-4 md:py-10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-20 mt-4 md:mt-6">
          <div class="flex justify-between items-center w-full md:w-1/2 gap-2 md:gap-12">
            <img src="@/assets/images/about/value/left.png" alt="" class="h-12 md:h-35 w-auto flex-shrink-0" srcset="">
            <div class="flex-1 text-center min-w-0">
              <p class="text-sm md:text-2xl leading-tight">
                {{ t('pages.value.licensedQualifications.items[1].name') }}</p>
            </div>
            <img src="@/assets/images/about/value/right.png" alt="" class="h-12 md:h-35 w-auto flex-shrink-0" srcset="">
          </div>
          <div class="w-full md:w-1/2 text-xs md:text-xl leading-5 md:leading-10 opacity-60 text-center md:text-left">
            <p class="text-center">{{ t('pages.value.licensedQualifications.items[1].desc') }}
              <br>
              {{ t('pages.value.licensedQualifications.items[1].desc1') }}
            </p>
          </div>
        </div>
        <div
          class="bg-[#072767] text-white px-2 md:px-10 py-4 md:py-10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-20 mt-4 md:mt-6">
          <div class="flex justify-between items-center w-full md:w-1/2 gap-2 md:gap-6">
            <img src="@/assets/images/about/value/left.png" alt="" class="h-12 md:h-35 w-auto flex-shrink-0" srcset="">
            <div class="flex-1 text-center min-w-0">
              <p class="text-sm md:text-2xl mb-1 md:mb-4 leading-tight">
                {{ t('pages.value.licensedQualifications.items[2].name') }}</p>
              <!-- <p class="text-xs md:text-xl opacity-60">
                {{ t('pages.value.licensedQualifications.items[2].desc') }}</p> -->
            </div>
            <img src="@/assets/images/about/value/right.png" alt="" class="h-12 md:h-35 w-auto flex-shrink-0" srcset="">
          </div>
          <div class="w-full md:w-1/2 text-xs md:text-xl leading-5 md:leading-10 opacity-60 text-center md:text-left">
            <p class="text-center">{{ t('pages.value.licensedQualifications.items[2].desc1') }}</p>
          </div>
        </div>
        <p class="text-base md:text-xl mt-4 md:mt-6 leading-relaxed">
          {{ t('pages.value.licensedQualifications.closing') }}</p>
        <p class="text-lg md:text-2xl font-bold mb-4 md:mb-6 border-b border-[#1A2E56] pb-2 md:pb-3 mt-8 md:mt-20">
          {{ t('pages.value.professionalTeam.title') }}</p>
        <p class="text-base md:text-xl leading-relaxed">
          {{ t('pages.value.professionalTeam.desc') }}
        </p>
        <p class="text-lg md:text-2xl font-bold mb-4 md:mb-6 border-b border-[#1A2E56] pb-2 md:pb-3 mt-6 md:mt-10">
          {{ t('pages.value.policyFormulation.title') }}</p>
        <p class="text-base md:text-xl leading-relaxed">
          {{ t('pages.value.policyFormulation.desc') }}
        </p>
        <p class="text-lg md:text-2xl font-bold mb-4 md:mb-6 border-b border-[#1A2E56] pb-2 md:pb-3 mt-6 md:mt-10">
          {{ t('pages.value.riskMonitoring.title') }}</p>
        <p class="text-base md:text-xl leading-relaxed">
          {{ t('pages.value.riskMonitoring.desc') }}
        </p>
      </div>
    </Container>
    <div
      class="h-50  bg-[url('@/assets/images/about/value/bg2.png')] bg-cover bg-no-repeat flex items-center justify-center px-4 md:px-80">
      <p class="text-white text-center text-base md:text-2xl font-bold leading-relaxed">
        {{ t('pages.value.closing') }}<br />
        <span>
          {{ t('pages.value.closing1') }}
        </span>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Container from '@/components/Container.vue'
const { t } = useI18n()
</script>

<style scoped></style>