<template>
  <section class="h-full w-full text-[#072867]">
    <div class="relative">
      <img src="@/assets/images/strategy/business/banner.png" alt="" srcset="" class="h-170 w-full object-cover">
      <div class="text-white absolute bottom-0 w-full ">
        <Container type="extra-wide">
          <div class="px-10">
            <p class="text-5xl font-bold">{{ t('pages.business.title1') }}
            </p>
            <p class="text-7xl font-bold mt-5 mb-10">
              {{ t('pages.business.title') }}
            </p>
            <div class="w-60  h-2 bg-[#A37B24]"></div>
          </div>
        </Container>
      </div>
    </div>
    <div class=" py-20 bg-[#f7f9fa]">
      <Container type="extra-wide">
        <div class="px-10">
          <p class="text-3xl font-bold">{{ t('pages.business.subtitle') }}</p>
          <p class="text-xl my-10 leading-relaxed">
            {{ t('pages.business.description') }}</p>
          <p class="text-3xl font-bold mb-6 border-b border-[#1A2E56] pb-3 mt-16">
            {{ t('pages.business.serviceMatrix.title') }}</p>
          <div class="grid grid-cols-2 gap-10 my-10">
            <div class=" py-10 px-20 text-center bg-white shadow-xs rounded-lg hover:shadow-2xl">
              <p class="text-2xl font-bold mb-4 leading-tight">
                {{ t('pages.business.serviceMatrix.items.0.name') }}</p>
              <p class="text-xl px-10 opacity-60 leading-relaxed">
                {{ t('pages.business.serviceMatrix.items.0.desc') }}
              </p>
            </div>
            <div class=" py-10 px-20 text-center bg-white shadow-xs rounded-lg hover:shadow-2xl">
              <p class="text-2xl font-bold mb-4 leading-tight">
                {{ t('pages.business.serviceMatrix.items.1.name') }}</p>
              <p class="text-xl opacity-60 leading-relaxed">
                {{ t('pages.business.serviceMatrix.items.1.desc') }}
              </p>
            </div>
            <div class=" py-10 px-20 text-center bg-white shadow-xs rounded-lg hover:shadow-2xl">
              <p class="text-2xl font-bold mb-4 leading-tight">
                {{ t('pages.business.serviceMatrix.items.2.name') }}</p>
              <p class="text-xl opacity-60 leading-relaxed">
                {{ t('pages.business.serviceMatrix.items.2.desc') }}
              </p>
            </div>
            <div class=" py-10 px-10 text-center bg-white shadow-xs rounded-lg hover:shadow-2xl">
              <p class="text-2xl font-bold mb-4 leading-tight">
                {{ t('pages.business.serviceMatrix.items.3.name') }}</p>
              <p class="text-xl opacity-60 leading-relaxed">
                {{ t('pages.business.serviceMatrix.items.3.desc') }}
              </p>
            </div>
            <div class=" py-10 px-20 text-center bg-white shadow-xs rounded-lg hover:shadow-2xl">
              <p class="text-2xl font-bold mb-4 leading-tight">
                {{ t('pages.business.serviceMatrix.items.4.name') }}</p>
              <p class="text-xl opacity-60 leading-relaxed">
                {{ t('pages.business.serviceMatrix.items.4.desc') }}
              </p>
            </div>
          </div>
          <p class="text-3xl font-bold mb-6 border-b border-[#1A2E56] pb-3 mt-16">
            {{ t('pages.business.whyChoose.title') }}</p>
          <div class="flex flex-row justify-center items-center gap-20">
            <div class="w-1/2 flex justify-center">
              <img src="@/assets/images/strategy/business/image2.png" alt="" srcset="" class="w-full max-w-none w-full">
            </div>
            <div class="w-1/2 ">
              <p class="text-3xl font-bold mb-4 leading-tight">
                {{ t('pages.business.whyChoose.content') }}</p>

              <div class="flex  gap-3 my-4">
                <img src="@/assets/images/strategy/business/icon.png" class="h-5 mt-1 w-5 flex-shrink-0" alt=""
                  srcset="">
                <p class="text-xl opacity-60 leading-relaxed">
                  {{ t('pages.business.whyChoose.points.0') }}</p>
              </div>
              <div class="flex  gap-3 my-4">
                <img src="@/assets/images/strategy/business/icon.png" class="h-5 mt-1 w-5 flex-shrink-0" alt=""
                  srcset="">
                <p class="text-xl opacity-60 leading-relaxed">
                  {{ t('pages.business.whyChoose.points.1') }}</p>
              </div>
              <div class="flex  gap-3 my-4">
                <img src="@/assets/images/strategy/business/icon.png" class="h-5 mt-1 w-5 flex-shrink-0" alt=""
                  srcset="">
                <p class="text-xl opacity-60 leading-relaxed">
                  {{ t('pages.business.whyChoose.points.2') }}</p>
              </div>
              <p class="text-3xl font-bold mt-10">
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