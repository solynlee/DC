<template>
  <section class="h-full w-full text-[#072867]">
    <div class="relative">
      <img src="@/assets/images/strategy/other/banner.png" alt="" srcset="" class="h-170 w-full object-cover">
      <div class="text-white absolute bottom-0 w-full px-16">
        <Container type="extra-wide">
          <div class="px-10">
            <p class="text-5xl font-bold">
              {{ t('pages.other.title1') }}
            </p>
            <p class="text-7xl font-bold mt-4 mb-8">
              {{ t('pages.other.title') }}
            </p>
            <div class="w-60 h-2 bg-[#A37B24]"></div>
          </div>
        </Container>
      </div>
    </div>
    <Container type="extra-wide">
      <div class="px-10 py-10">
        <p class="text-xl leading-relaxed">
          {{ t('pages.other.desc') }}</p>
        <p class="text-3xl font-bold mb-6 border-b border-[#1A2E56] pb-3 mt-16">
          {{ t('pages.other.services.title') }}</p>

        <div class="mt-10">
          <div class="relative mb-2">
            <div class="h-3 w-3 rounded-full bg-[#345CAC] -left-8 top-1/2 -translate-y-1/2" style="display: inline-block;">
            </div>
            <p class="text-2xl font-bold" style="display: inline-block;margin-left: 30px;">{{
              t('pages.other.services.items[0].name')
            }}</p>
          </div>
          <p class="text-xl leading-relaxed" style="margin-left: 40px;">
            {{ t('pages.other.services.items[0].desc') }}</p>
        </div>
        <div class="mt-10">
          <div class="relative mb-2">
            <div class="h-3 w-3 rounded-full bg-[#345CAC] -left-8 top-1/2 -translate-y-1/2" style="display: inline-block;">
            </div>
            <p class="text-2xl font-bold" style="display: inline-block;margin-left: 30px;">{{
              t('pages.other.services.items[1].name')
            }}</p>
          </div>
          <p class="text-xl leading-relaxed" style="margin-left: 40px;">
            {{ t('pages.other.services.items[1].desc') }}</p>
        </div>
        <div class="mt-10">
          <div class="relative mb-2">
            <div class="h-3 w-3 rounded-full bg-[#345CAC] -left-8 top-1/2 -translate-y-1/2" style="display: inline-block;">
            </div>
            <p class="text-2xl font-bold" style="display: inline-block;margin-left: 30px;">{{
              t('pages.other.services.items[2].name')
            }}</p>
          </div>
          <p class="text-xl leading-relaxed" style="margin-left: 40px;">
            {{ t('pages.other.services.items[2].desc') }}</p>

        </div>
        <div class="mt-10">
          <div class="relative mb-2">
            <div class="h-3 w-3 rounded-full bg-[#345CAC] -left-8 top-1/2 -translate-y-1/2" style="display: inline-block;">
            </div>
            <p class="text-2xl font-bold" style="display: inline-block;margin-left: 30px;">{{
              t('pages.other.services.items[3].name')
            }}</p>
          </div>
          <p class="text-xl leading-relaxed" style="margin-left: 40px;">
            {{ t('pages.other.services.items[3].desc') }}</p>

        </div>

      </div>
    </Container>
    <div class="bg-[#EBEFF4] ">
      <Container type="extra-wide">
        <div class="px-10 flex flex-row justify-center items-center py-20 gap-20">
          <div class="w-1/2 flex justify-center">
            <img src="@/assets/images/strategy/other/image.png" alt="" srcset="" class="w-full">
          </div>
          <div class="w-1/2">
            <div class="bg-[#A37B24] w-30 h-3 mb-10"></div>
            <p class="text-4xl font-bold leading-relaxed">
              {{ t('pages.other.value.content') }}<br />
              {{ t('pages.other.value.content2') }}
            </p>

            <p class="text-xl my-10 leading-relaxed">
              {{ t('pages.other.value.subDesc') }}
            </p>
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
</script>

<style scoped></style>