<template>
  <section class="h-full w-full text-[#072867]">
    <div class="relative">
      <img src="@/assets/images/strategy/company/banner.png" alt="" srcset="" class="h-170 w-full object-cover">
      <div class="text-white absolute bottom-0 w-full ">
        <Container type="extra-wide">
          <div class="px-10">
            <p class="text-5xl font-bold">{{ t('pages.company.title1') }}
            </p>
            <p class="text-7xl font-bold mt-5 mb-10">
              {{ t('pages.company.title') }}
            </p>
            <div class="w-60 h-2 bg-[#A37B24]"></div>
          </div>
        </Container>
      </div>
    </div>

    <div class="py-20 bg-[#f7f9fa]">
      <Container type="extra-wide">
        <div class="px-10">


          <p class="text-3xl font-bold">{{ t('pages.company.subtitle') }}</p>
          <p class="text-xl my-10 leading-relaxed">
            {{ t('pages.company.description') }}</p>
          <p class="text-3xl font-bold mb-6 border-b border-[#1A2E56] pb-3 mt-16">
            {{ t('pages.company.serviceModules.title') }}</p>
          <!-- <p class="text-base sm:text-lg md:text-xl leading-relaxed">
            {{ t('pages.company.serviceModules.content') }}
          </p> -->
          <div class="px-16 py-20">
            <img :src="images" alt="" class="w-full h-auto" srcset="">
          </div>
          <p class="text-3xl font-bold mb-6 border-b border-[#1A2E56] pb-3 mt-16">
            {{ t('pages.company.whyChoose.title') }}</p>
          <div class="flex flex-row justify-center items-center gap-20">
            <div class="w-1/2 flex justify-center">
              <img src="@/assets/images/strategy/company/bg.png" alt="" srcset="" class="w-full max-w-none">
            </div>
            <div class="w-1/2">
              <p class="text-3xl font-bold mb-4 leading-tight">
                {{ t('pages.company.whyChoose.content') }}<br />
                {{ t('pages.company.whyChoose.contents') }}
              </p>
              <p class="text-3xl font-bold mt-10">
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
    return image1
  } else if (locale.value === 'zh-TW') {
    return image2
  } else {
    return image3
  }
})

</script>

<style scoped></style>