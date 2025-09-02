<template>
  <section class="h-full w-full text-[#072867]">
    <div class="relative">
      <img src="@/assets/images/strategy/planning/banner.png" alt="" srcset=""
        class="h-[20vh] md:h-170 w-full object-cover">
      <div class="text-white absolute bottom-0 w-full ">
        <Container type="extra-wide">
          <div class="px-10">
            <p class="text-sm md:text-5xl font-bold">
              {{ t('pages.planning.title1') }}
            </p>
            <p class="text-xl md:text-7xl font-bold mt-2 sm:mt-3 md:mt-4 lg:mt-5 mb-4 sm:mb-6 md:mb-8 lg:mb-10">
              {{ t('pages.planning.title') }}
            </p>
            <div class="w-24 md:w-60  h-1.5 md:h-2 bg-[#A37B24]"></div>
          </div>
        </Container>
      </div>
    </div>
    <div class="pt-10">
      <Container type="extra-wide">
        <div class="px-10 ">
          <p class="text-base sm:text-lg md:text-xl leading-relaxed">
            {{ t('pages.planning.desc') }}</p>
          <p
            class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 border-b border-[#1A2E56] pb-2 sm:pb-2.5 md:pb-3 mt-6 sm:mt-8 md:mt-12 lg:mt-16">
            {{ t('pages.planning.solutions.title') }}</p>

          <div class="mt-6 sm:mt-8 md:mt-10">
            <div class="relative mb-2">
              <div
                class="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 rounded-full bg-[#345CAC] absolute -left-4 sm:-left-6 md:-left-8 top-1/2 -translate-y-1/2">
              </div>
              <p class=" text-lg sm:text-xl md:text-2xl font-bold">
                {{ t('pages.planning.solutions.items[0].name') }}
              </p>
            </div>
            <p class="text-base sm:text-lg md:text-xl leading-relaxed">
              {{ t('pages.planning.solutions.items[0].desc') }}</p>
          </div>
          <div class="mt-6 sm:mt-8 md:mt-10">
            <div class="relative mb-2">
              <div
                class="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 rounded-full bg-[#345CAC] absolute -left-4 sm:-left-6 md:-left-8 top-1/2 -translate-y-1/2">
              </div>
              <p class=" text-lg sm:text-xl md:text-2xl font-bold">
                {{ t('pages.planning.solutions.items[1].name') }}
              </p>
            </div>
            <p class="text-base sm:text-lg md:text-xl leading-relaxed">
              {{ t('pages.planning.solutions.items[1].desc') }}</p>
          </div>
          <div class="mt-6 sm:mt-8 md:mt-10">
            <div class="relative mb-2">
              <div
                class="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 rounded-full bg-[#345CAC] absolute -left-4 sm:-left-6 md:-left-8 top-1/2 -translate-y-1/2">
              </div>
              <p class=" text-lg sm:text-xl md:text-2xl font-bold">
                {{ t('pages.planning.solutions.items[2].name') }}
              </p>
            </div>
            <p class="text-base sm:text-lg md:text-xl leading-relaxed">
              {{ t('pages.planning.solutions.items[2].desc') }}
            </p>
          </div>
          <div class="mt-6 sm:mt-8 md:mt-10">
            <div class="relative mb-2">
              <div
                class="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 rounded-full bg-[#345CAC] absolute -left-4 sm:-left-6 md:-left-8 top-1/2 -translate-y-1/2">
              </div>
              <p class=" text-lg sm:text-xl md:text-2xl font-bold">
                {{ t('pages.planning.solutions.items[3].name') }}
              </p>
            </div>
            <p class="text-base sm:text-lg md:text-xl leading-relaxed">
              {{ t('pages.planning.solutions.items[3].desc') }}
            </p>
          </div>
        </div>
      </Container>
      <div class="bg-[#EBEFF4] mt-20">
        <Container type="extra-wide">
          <div
            class="flex flex-col lg:flex-row justify-center items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-33 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 gap-6 sm:gap-8 md:gap-12 lg:gap-20 xl:gap-30">
            <div class="w-full lg:w-1/2 flex justify-center">
              <img src="@/assets/images/strategy/planning/image.png" alt="" srcset=""
                class="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none lg:w-full">
            </div>
            <div class="w-full lg:w-1/2 ">
              <div class="bg-[#A37B24] w-20 sm:w-24 md:w-28 lg:w-30 h-2 sm:h-2.5 md:h-3 mb-6 sm:mb-8 md:mb-10"></div>
              <p
                class="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold leading-tight sm:leading-normal md:leading-relaxed lg:leading-12">
                {{ t('pages.planning.value.content') }}
              </p>
              <p class="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold mb-6 sm:mb-8 md:mb-10">
                {{ t('pages.planning.value.content2') }}
              </p>
              <p class="text-base sm:text-lg md:text-xl my-6 sm:my-8 md:my-10 leading-relaxed">
                {{ t('pages.planning.value.subDesc') }}
              </p>
            </div>
          </div>
        </Container>
      </div>

    </div>

  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Container from '@/components/Container.vue'
const { t } = useI18n()
</script>

<style scoped></style>