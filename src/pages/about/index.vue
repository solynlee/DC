<template>
  <section>
    <div class="relative mb-20">
      <img src="@/assets/images/about/bg.png" alt="" srcset="" class="w-full">

      <div class="absolute w-full px-30 -bottom-1/10">
        <Container type="extra-wide">
          <img src="@/assets/images/about/video.png" alt="" srcset="" class="w-full">
        </Container>
      </div>
    </div>
    <Container type="extra-wide">
      <div class="pt-30 flex flex-row justify-between gap-40 text-xl">
        <div class="flex-1 text-[#072867] order-1">
          <img src="@/assets/images/about/logo.png" alt="" srcset="" class="h-16">
          <div class="flex items-center gap-6 border-b border-[#1A2E56] pb-6 mb-6 mt-20">
            <img src="@/assets/images/about/icon.png" alt="" srcset="" class="w-10 h-10">
            <p class="text-3xl font-bold text-[#082867] flex-1">{{
              t('pages.about.coreValue.title') }}</p>
            <div class="flex items-center gap-4 cursor-pointer" @click="handleProposition">
              <span class="text-base hover:text-[#072867] transition-colors duration-200">{{
                t('pages.about.btn') }}</span>
              <svg class="w-6 h-9 text-[#A37B24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          <p class="my-10 font-semibold">{{ t('pages.about.coreValue.subtitle') }}</p>
          <p class="leading-relaxed text-algin-justify">
            {{ t('pages.about.coreValue.desc') }}
          </p>
          <p class="my-10 font-semibold">{{ t('pages.about.coreValue.desc2') }}</p>
          <p class="leading-relaxed text-algin-justify">
            {{ t('pages.about.coreValue.desc3') }} <br>
            {{ t('pages.about.coreValue.decs4') }}
          </p>
        </div>
        <div class="flex justify-center order-2">
          <img src="@/assets/images/about/bg2.png" alt="" srcset="" class="w-160 h-auto">
        </div>
      </div>
    </Container>
    <div class="bg-[url('@/assets/images/about/bg3.png')] bg-cover bg-center bg-no-repeat py-30">
      <Container type="extra-wide">
        <div class="flex items-center gap-6 border-b border-[#1A2E56] pb-6 mb-6 mt-20">
          <img src="@/assets/images/about/icon.png" alt="" srcset="" class="w-10 h-10">
          <p class="text-3xl font-bold text-[#082867] flex-1">{{
            t('pages.about.team.title') }}</p>
          <div class="flex items-center gap-4 cursor-pointer" @click="handleTeam">
            <span class="text-base hover:text-[#072867] transition-colors duration-200">{{
              t('pages.about.btn') }}</span>
            <svg class="w-6 h-9 text-[#A37B24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        <div class="flex flex-row justify-between items-center gap-15 px-30 py-10 text-xl text-[#072867]">
          <div class="flex justify-start order-1">
            <img src="@/assets/images/about/users.png" alt="" srcset="" class="w-200 h-auto">
          </div>
          <div class="order-2 flex-1">
            <p class="mb-10 leading-relaxed text-algin-justify">
              {{ t('pages.about.team.desc') }}
            </p>
            <p class="leading-relaxed text-algin-justify">
              {{ t('pages.about.team.desc2') }}
            </p>
          </div>
        </div>
      </Container>
    </div>
    <Container type="extra-wide">
      <div class="py-20 text-xl text-[#072867]">
        <div class="flex items-center gap-6 border-b border-[#1A2E56] pb-6 mb-6">
          <img src="@/assets/images/about/icon.png" alt="" srcset="" class="w-10 h-10">
          <p class="text-3xl font-bold text-[#082867] flex-1">{{
            t('pages.about.compliance.title') }}</p>
          <div class="flex items-center gap-4 cursor-pointer" @click="handleValue">
            <span class="text-base hover:text-[#072867] transition-colors duration-200">{{
              t('pages.about.btn') }}</span>
            <svg class="w-6 h-9 text-[#A37B24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        <p class="leading-relaxed mb-10">
          {{ t('pages.about.compliance.desc') }}
        </p>
        <div class="grid grid-cols-3 gap-20 py-10 text-xl text-[#072867]">
          <div class="text-center p-10">
            <img :src="images[0]" alt="" srcset="" class="w-full max-w-xs mx-auto">
            <p class="text-2xl font-bold mt-4">{{
              t('pages.about.compliance.licenses[0].name') }}</p>
            <p class="text-lg">{{
              t('pages.about.compliance.licenses[0].desc') }}</p>
          </div>
          <div class="text-center p-10">
            <img :src="images[1]" alt="" srcset="" class="w-full max-w-xs mx-auto">
            <p class="text-2xl font-bold mt-4">{{
              t('pages.about.compliance.licenses[1].name') }}</p>
            <p class="text-lg">{{
              t('pages.about.compliance.licenses[1].desc') }}</p>
          </div>
          <div class="text-center p-10">
            <img :src="images[2]" alt="" srcset="" class="w-full max-w-xs mx-auto">
            <p class="text-2xl font-bold mt-4">{{
              t('pages.about.compliance.licenses[2].name') }}</p>
            <p class="text-lg">{{
              t('pages.about.compliance.licenses[2].desc') }}</p>
          </div>
        </div>
        <div class="flex items-center gap-4 border-b border-[#1A2E56] pb-6 mb-6">
          <img src="@/assets/images/about/icon.png" alt="" srcset="" class="w-10 h-10">
          <p class="text-3xl font-bold text-[#082867] flex-1">{{
            t('pages.about.licenses.title') }}</p>
          <div class="flex items-center gap-4 cursor-pointer" @click="handleLicenses">
            <span class="text-base hover:text-[#072867] transition-colors duration-200">{{
              t('pages.about.btn') }}</span>
            <svg class="w-6 h-9 text-[#A37B24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        <p class="leading-relaxed mb-10">
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
