<template>
  <section>
    <div class="relative mb-8 md:mb-20">
      <img src="@/assets/images/about/bg.png" alt="" srcset="" class="w-full">

      <div class="absolute w-full px-4 md:px-30 -bottom-[5%] md:-bottom-1/10">
        <Container type="extra-wide">
          <img src="@/assets/images/about/video.png" alt="" srcset="" class="w-full">
        </Container>
      </div>
    </div>
    <Container type="extra-wide">
      <div class=" pt-8 md:pt-30 flex flex-col md:flex-row md:justify-between gap-8 md:gap-40 text-base md:text-xl">
        <div class="flex-1 text-[#072867] order-2 md:order-1">
          <img src="@/assets/images/about/logo.png" alt="" srcset="" class="h-12 md:h-16">
          <div
            class="flex items-center gap-3  md:gap-6 border-b border-[#1A2E56] pb-3  md:pb-6 mb-3  md:mb-6 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
            <img src="@/assets/images/about/icon.png" alt="" srcset="" class="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
            <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#082867] flex-1">{{
              t('pages.about.coreValue.title') }}</p>
            <div class="flex items-center gap-2 sm:gap-3 md:gap-4 cursor-pointer " @click="handleProposition">
              <span class=" text-sm sm:text-base hover:text-[#072867] transition-colors duration-200">{{
                t('pages.about.btn') }}</span>
              <svg class="w-3 h-4 sm:w-4 sm:h-6 md:w-6 md:h-9 text-[#A37B24]" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          <p class="my-6 sm:my-8 md:my-10 font-semibold">{{ t('pages.about.coreValue.subtitle') }}</p>
          <p class="leading-relaxed">
            {{ t('pages.about.coreValue.desc') }}
          </p>
          <p class="my-6 sm:my-8 md:my-10 font-semibold">{{ t('pages.about.coreValue.desc2') }}</p>
          <p class="leading-relaxed">
            {{ t('pages.about.coreValue.desc3') }} <br>
            {{ t('pages.about.coreValue.decs4') }}
          </p>
        </div>
        <div class="flex justify-center order-1 md:order-2">
          <img src="@/assets/images/about/bg2.png" alt="" srcset=""
            class="w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-40 xl:w-160 h-auto">
        </div>
      </div>
    </Container>
    <div
      class="bg-[url('@/assets/images/about/bg3.png')] bg-cover bg-center bg-no-repeat py-4 sm:py-6 md:py-8 lg:py-16 xl:py-30">
      <Container type="extra-wide">
        <div
          class="flex items-center gap-3 md:gap-4 md:gap-6 border-b border-[#1A2E56] pb-3 md:pb-4 md:pb-6 mb-3 md:mb-4 md:mb-6 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <img src="@/assets/images/about/icon.png" alt="" srcset="" class="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
          <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#082867] flex-1">{{
            t('pages.about.team.title') }}</p>
          <div class="flex items-center gap-2 sm:gap-3 md:gap-4 cursor-pointer" @click="handleTeam">
            <span class=" text-sm sm:text-base hover:text-[#072867] transition-colors duration-200">{{
              t('pages.about.btn') }}</span>
            <svg class="w-3 h-4 sm:w-4 sm:h-6 md:w-6 md:h-9 text-[#A37B24]" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        <div
          class="flex flex-col md:flex-row md:justify-between lg:items-center gap-6 sm:gap-8 md:gap-10 lg:gap-15 px-0 sm:px-4 md:px-8 lg:px-16 xl:px-30 py-4 sm:py-6 md:py-8 lg:py-10 text-base md:text-xl text-[#072867]">
          <div class="flex justify-center lg:justify-start order-1 lg:order-1">
            <img src="@/assets/images/about/users.png" alt="" srcset=""
              class="w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-48 xl:w-200 h-auto">
          </div>
          <div class="order-2 lg:order-2 lg:flex-1">
            <p class="mb-6 sm:mb-8 md:mb-10 leading-relaxed">
              {{ t('pages.about.team.desc') }}
            </p>
            <p class="leading-relaxed">
              {{ t('pages.about.team.desc2') }}
            </p>
          </div>
        </div>
      </Container>
    </div>
    <Container type="extra-wide">
      <div class=" py-8 sm:py-12 md:py-16 lg:py-20 text-base md:text-xl text-[#072867]">
        <div class="flex items-center gap-3 md:gap-6 border-b border-[#1A2E56] pb-3 md:pb-6 mb-3  md:mb-6">
          <img src="@/assets/images/about/icon.png" alt="" srcset="" class="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
          <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#082867] flex-1">{{
            t('pages.about.compliance.title') }}</p>
          <div class="flex items-center gap-2 sm:gap-3 md:gap-4 cursor-pointer" @click="handleValue">
            <span class=" text-sm sm:text-base hover:text-[#072867] transition-colors duration-200">{{
              t('pages.about.btn') }}</span>
            <svg class="w-3 h-4 sm:w-4 sm:h-6 md:w-6 md:h-9 text-[#A37B24]" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        <p class="leading-relaxed mb-6 sm:mb-8 md:mb-10">
          {{ t('pages.about.compliance.desc') }}
        </p>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-20 py-4 sm:py-6 md:py-8 lg:py-10 text-base md:text-xl text-[#072867]">
          <div class="text-center p-4 sm:p-6 md:p-8 lg:p-10">
            <img :src="images[0]" alt="" srcset="" class="w-full max-w-xs mx-auto">
            <p class="text-lg sm:text-xl md:text-2xl font-bold mt-3 sm:mt-4">{{
              t('pages.about.compliance.licenses[0].name') }}</p>
            <p class="text-sm sm:text-base md:text-lg">{{
              t('pages.about.compliance.licenses[0].desc') }}</p>
          </div>
          <div class="text-center p-4 sm:p-6 md:p-8 lg:p-10">
            <img :src="images[1]" alt="" srcset="" class="w-full max-w-xs mx-auto">
            <p class="text-lg sm:text-xl md:text-2xl font-bold mt-3 sm:mt-4">{{
              t('pages.about.compliance.licenses[1].name') }}</p>
            <p class="text-sm sm:text-base md:text-lg">{{
              t('pages.about.compliance.licenses[1].desc') }}</p>
          </div>
          <div class="text-center p-4 sm:p-6 md:p-8 lg:p-10 md:col-span-2 lg:col-span-1">
            <img :src="images[2]" alt="" srcset="" class="w-full max-w-xs mx-auto">
            <p class="text-lg sm:text-xl md:text-2xl font-bold mt-3 sm:mt-4">{{
              t('pages.about.compliance.licenses[2].name') }}</p>
            <p class="text-sm sm:text-base md:text-lg">{{
              t('pages.about.compliance.licenses[2].desc') }}</p>
          </div>
        </div>
        <div class="flex items-center gap-3 md:gap-4  border-b border-[#1A2E56] pb-3 md:pb-6 mb-3  md:mb-6">
          <img src="@/assets/images/about/icon.png" alt="" srcset="" class="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
          <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#082867] flex-1">{{
            t('pages.about.licenses.title') }}</p>
          <div class="flex items-center gap-2 sm:gap-3 md:gap-4 cursor-pointer" @click="handleLicenses">
            <span class=" text-sm sm:text-base hover:text-[#072867] transition-colors duration-200">{{
              t('pages.about.btn') }}</span>
            <svg class="w-3 h-4 sm:w-4 sm:h-6 md:w-6 md:h-9 text-[#A37B24]" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        <p class="leading-relaxed mb-6 sm:mb-8 md:mb-10">
          {{ t('pages.about.licenses.desc') }}
        </p>
      </div>
    </Container>
  </section>
</template>


<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Container from '@/components/Container.vue'
const { t, locale } = useI18n()
const router = useRouter()
import image1 from '@/assets/images/about/image1.png'
import image2 from '@/assets/images/about/image2.png'
import image3 from '@/assets/images/about/image3.png'
import image4 from '@/assets/images/about/image4.png'
import image5 from '@/assets/images/about/image5.png'
import image6 from '@/assets/images/about/image6.png'
import image7 from '@/assets/images/about/image7.png'
import image8 from '@/assets/images/about/image8.png'
import image9 from '@/assets/images/about/image9.png'
import { computed } from 'vue'

const images = computed(() => {
  if (locale.value === 'zh-CN') {
    return [image1, image2, image3]
  } else if (locale.value === 'zh-TW') {
    return [image4, image5, image6]
  } else {
    return [image7, image8, image9]
  }
})

const handleProposition = () => {
  router.push({ name: 'proposition' })
}
const handleTeam = () => {
  router.push({ name: 'team' })
}
const handleValue = () => {
  router.push({ name: 'value' })
}
const handleLicenses = () => {
  router.push({ name: 'licenses' })
}
</script>


<style scoped></style>
