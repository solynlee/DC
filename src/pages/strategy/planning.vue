<template>
  <section class="h-full w-full text-[#072867]">
    <div class="relative">
      <img src="@/assets/images/strategy/planning/banner.png" alt="" srcset="" class="h-170 w-full object-cover">
      <div class="text-white absolute bottom-0 w-full ">
        <Container type="extra-wide">
          <div class="px-10">
            <p class="text-5xl font-bold">
              {{ t('pages.planning.title1') }}
            </p>
            <p class="text-7xl font-bold mt-4 mb-8">
              {{ t('pages.planning.title') }}
            </p>
            <div class="w-60 h-2 bg-[#A37B24]"></div>
          </div>
        </Container>
      </div>
    </div>
    <div class="pt-10">
      <Container type="extra-wide">
        <div class="px-10 ">
          <p class="text-xl leading-relaxed">
            {{ t('pages.planning.desc') }}</p>
          <p class="text-3xl font-bold mb-6 border-b border-[#1A2E56] pb-3 mt-16">
            {{ t('pages.planning.solutions.title') }}</p>

          <div class="mt-10">
            <div class="relative mb-2">
              <div class="h-3 w-3 rounded-full bg-[#345CAC] absolute -left-8 top-1/2 -translate-y-1/2">
              </div>
              <p class="text-2xl font-bold">
                {{ t('pages.planning.solutions.items[0].name') }}
              </p>
            </div>
            <p class="text-xl leading-relaxed">
              {{ t('pages.planning.solutions.items[0].desc') }}</p>
          </div>
          <div class="mt-10">
            <div class="relative mb-2">
              <div class="h-3 w-3 rounded-full bg-[#345CAC] absolute -left-8 top-1/2 -translate-y-1/2">
              </div>
              <p class="text-2xl font-bold">
                {{ t('pages.planning.solutions.items[1].name') }}
              </p>
            </div>
            <p class="text-xl leading-relaxed">
              {{ t('pages.planning.solutions.items[1].desc') }}</p>
          </div>
          <div class="mt-10">
            <div class="relative mb-2">
              <div class="h-3 w-3 rounded-full bg-[#345CAC] absolute -left-8 top-1/2 -translate-y-1/2">
              </div>
              <p class="text-2xl font-bold">
                {{ t('pages.planning.solutions.items[2].name') }}
              </p>
            </div>
            <p class="text-xl leading-relaxed">
              {{ t('pages.planning.solutions.items[2].desc') }}
            </p>
          </div>
          <div class="mt-10">
            <div class="relative mb-2">
              <div class="h-3 w-3 rounded-full bg-[#345CAC] absolute -left-8 top-1/2 -translate-y-1/2">
              </div>
              <p class="text-2xl font-bold">
                {{ t('pages.planning.solutions.items[3].name') }}
              </p>
            </div>
            <p class="text-xl leading-relaxed">
              {{ t('pages.planning.solutions.items[3].desc') }}
            </p>
          </div>
        </div>
      </Container>
      <div class="bg-[#EBEFF4] mt-20">
        <Container type="extra-wide">
          <div class="flex flex-row justify-center items-center px-16 py-20 gap-20">
            <div class="w-1/2 flex justify-center">
              <img src="@/assets/images/strategy/planning/image.png" alt="" srcset="" class="w-full">
            </div>
            <div class="w-1/2">
              <div class="bg-[#A37B24] w-30 h-3 mb-10"></div>
              <p class="text-4xl font-bold leading-relaxed">
                {{ t('pages.planning.value.content') }}
              </p>
              <p class="text-4xl font-bold mb-10">
                {{ t('pages.planning.value.content2') }}
              </p>
              <p class="text-xl my-10 leading-relaxed">
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