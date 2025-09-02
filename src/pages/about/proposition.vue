<template>
  <PageWrapper>
    <section class="h-full w-full text-[#072867]">
      <div class="relative">
        <img src="@/assets/images/about/proposition/bg.png" alt="" srcset=""
          class="h-[25vh] sm:h-[30vh] md:h-170 w-full object-cover">
        <div class="text-white absolute bottom-0 w-full ">
          <Container type="extra-wide">
            <div class="px-10">
              <p class="text-sm md:text-5xl font-bold">{{
                t('pages.proposition.title1') }}</p>
              <p class="text-xl md:text-7xl font-bold mt-2 sm:mt-3 md:mt-4 lg:mt-5 mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                {{ t('pages.proposition.title') }}</p>
              <div class="w-24 md:w-60  h-1.5 md:h-2 bg-[#A37B24]"></div>
            </div>
          </Container>
        </div>
      </div>
      <Container type="extra-wide">
        <div class="px-10 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-30">
          <p class="text-xl sm:text-2xl md:text-3xl font-bold">{{ t('pages.proposition.subtitle') }}</p>
          <p class="text-base sm:text-lg md:text-xl my-6 sm:my-8 md:my-10 leading-relaxed">
            {{ t('pages.proposition.intro') }}
          </p>
          <p
            class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold border-b border-[#1A2E56] py-3 sm:py-4 md:py-5">
            {{ t('pages.proposition.philosophy.title') }}</p>
          <div class=" relative mt-6 sm:mt-8 md:mt-10 pl-6 sm:pl-8 md:pl-10">
            <div
              class="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-[#345CAC] rounded-sm absolute left-0 sm:-left-1 md:-left-2 top-1/2 -translate-y-1/2">
            </div>
            <p class="text-lg sm:text-xl md:text-2xl font-bold">{{
              t('pages.proposition.philosophy.items[0].name') }}</p>
          </div>
          <p class="text-base sm:text-lg md:text-xl mt-2 mb-6 sm:mb-8 md:mb-10 leading-relaxed pl-6 sm:pl-8 md:pl-10">
            {{ t('pages.proposition.philosophy.items[0].desc') }}
          </p>
          <div class=" relative mt-6 sm:mt-8 md:mt-10 pl-6 sm:pl-8 md:pl-10">
            <div
              class="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-[#345CAC] rounded-sm absolute left-0 sm:-left-1 md:-left-2 top-1/2 -translate-y-1/2">
            </div>
            <p class="text-lg sm:text-xl md:text-2xl font-bold">{{
              t('pages.proposition.philosophy.items[1].name') }}</p>
          </div>
          <p class="text-base sm:text-lg md:text-xl mt-2 mb-6 sm:mb-8 md:mb-10 leading-relaxed pl-6 sm:pl-8 md:pl-10">
            {{ t('pages.proposition.philosophy.items[1].desc') }}
          </p>
        </div>
      </Container>
      <div class="bg-[#EBEFF4] ">
        <Container type="extra-wide">
          <div
            class="px-10 flex flex-col lg:flex-row justify-center items-center  py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 gap-6  md:gap-10 ">
            <div class="w-full md:w-1/2 flex justify-center">
              <img src="@/assets/images/about/proposition/bg2.png" alt="" srcset=""
                class="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none lg:w-full">
            </div>
            <div class="w-full md:w-1/2 ">
              <div class="bg-[#A37B24] w-20 sm:w-24 md:w-28 lg:w-30 h-2 sm:h-2.5 md:h-3 mb-6 sm:mb-8 md:mb-10"></div>
              <p class="text-2xl  md:text-4xl   leading-tight sm:leading-normal md:leading-relaxed lg:leading-12">
                {{ t('pages.proposition.groupValue.title') }}</p>
              <p class="text-2xll md:text-4xl  mb-6 sm:mb-8 md:mb-10">
                {{ t('pages.proposition.groupValue.title1') }}<br />{{ t('pages.proposition.groupValue.title2') }}
              </p>
              <p class="text-base  md:text-xl my-6  md:my-10 leading-relaxed">
                {{ t('pages.proposition.groupValue.desc') }}
              </p>
            </div>
          </div>
        </Container>
      </div>

    </section>
  </PageWrapper>
</template>

<script lang="ts" setup>
import PageWrapper from '@/components/PageWrapper.vue'
import { useI18n } from 'vue-i18n'
import Container from '@/components/Container.vue'
const { t } = useI18n()
</script>

<style lang="scss" scoped></style>