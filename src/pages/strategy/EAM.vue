<template>
  <section class="h-full w-full text-[#072867]">
    <div class="relative">
      <img src="@/assets/images/strategy/EAM/bg.png" alt="" srcset="" class="h-170 w-full object-cover">
      <div class="text-white absolute bottom-0 w-full">
        <Container type="extra-wide">
          <div class="px-10">
            <p class="text-5xl font-bold">{{ t('pages.EAM.title1') }}</p>
            <p class="text-7xl font-bold mt-5 mb-10">
              {{ t('pages.EAM.title') }}
            </p>
            <div class="w-60 h-2 bg-[#A37B24]"></div>
          </div>
        </Container>
      </div>
    </div>
    <div class="py-10">
      <Container type="extra-wide">
        <div class="px-6">


          <p class="text-xl leading-relaxed">
            {{ t('pages.EAM.description') }}</p>
          <p class="text-3xl font-bold mb-6 border-b border-[#1A2E56] pb-3 mt-16">
            {{ t('pages.EAM.ourAdvantages.title') }}</p>
          <p class="text-xl leading-relaxed">
            {{ t('pages.EAM.ourAdvantages.content') }}</p>
          <div class="mt-10">
            <div class="relative mb-2">
              <div class="h-3 w-3 rounded-full bg-[#345CAC] -left-8 top-1/2 -translate-y-1/2" style="display: inline-block;">
              </div>
              <p class="text-2xl font-bold" style="display: inline-block;margin-left: 30px;">
                {{ t('pages.EAM.ourAdvantages.points[0].label') }}</p>
            </div>
            <p class="text-xl leading-relaxed" style="margin-left: 40px;">
              {{ t('pages.EAM.ourAdvantages.points[0].desc') }}</p>
          </div>
          <div class="mt-10">
            <div class="relative mb-2">
              <div class="h-3 w-3 rounded-full bg-[#345CAC] -left-8 top-1/2 -translate-y-1/2"  style="display: inline-block;">
              </div>
              <p class="text-2xl font-bold" style="display: inline-block;margin-left: 30px;">
                {{ t('pages.EAM.ourAdvantages.points[1].label') }}</p>
            </div>
            <p class="text-xl leading-relaxed" style="margin-left: 40px;">
              {{ t('pages.EAM.ourAdvantages.points[1].desc') }}</p>
          </div>
          <div class="mt-10">
            <div class="relative mb-2">
              <div class="h-3 w-3 rounded-full bg-[#345CAC] -left-8 top-1/2 -translate-y-1/2"  style="display: inline-block;">
              </div>
              <p class="text-2xl font-bold" style="display: inline-block;margin-left: 30px;">
                {{ t('pages.EAM.ourAdvantages.points[2].label') }}</p>
            </div>
            <p class="text-xl leading-relaxed" style="margin-left: 40px;">
              {{ t('pages.EAM.ourAdvantages.points[2].desc') }}
            </p>
          </div>
          <p class="text-3xl font-bold mb-6 border-b border-[#1A2E56] pb-3 mt-16">
            {{ t('pages.EAM.valueLink.title') }}</p>
          <div class="p-4">
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