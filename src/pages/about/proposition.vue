<template>
  <PageWrapper>
    <section class="h-full w-full text-[#072867]">
      <div class="relative">
        <img src="@/assets/images/about/proposition/bg.png" alt="" srcset="" class="h-170 w-full object-cover">
        <div class="text-white absolute bottom-0 w-full ">
          <Container type="extra-wide">
            <div class="px-10">
              <p class="text-5xl font-bold">{{
                t('pages.proposition.title1') }}</p>
              <p class="text-7xl font-bold mt-4 mb-8">
                {{ t('pages.proposition.title') }}</p>
              <div class="w-60 h-2 bg-[#A37B24]"></div>
            </div>
          </Container>
        </div>
      </div>
      <Container type="extra-wide">
        <div class="px-10 py-30">
          <p class="text-3xl font-bold">{{ t('pages.proposition.subtitle') }}</p>
          <p class="text-xl my-10 leading-relaxed text-algin-justify">
            {{ t('pages.proposition.intro') }}
          </p>
          <p class="text-3xl font-bold border-b border-[#1A2E56] py-5">
            {{ t('pages.proposition.philosophy.title') }}</p>
          <div class="relative mt-10">
            <div class="w-3 h-3 bg-[#345CAC] rounded-full -left-2 top-1/2 -translate-y-1/2" style="display: inline-block;">
            </div>
            <p class="text-2xl font-bold" style="display: inline-block;margin-left: 30px;">{{
              t('pages.proposition.philosophy.items[0].name') }}</p>
          </div>
          <p class="text-xl mt-2 mb-10 leading-relaxed" style="margin-left: 40px;">
            {{ t('pages.proposition.philosophy.items[0].desc') }}
          </p>
          <div class="relative mt-10">
            <div class="w-3 h-3 bg-[#345CAC] rounded-full -left-2 top-1/2 -translate-y-1/2" style="display: inline-block;">
            </div>
            <p class="text-2xl font-bold" style="display: inline-block;margin-left: 30px;">{{
              t('pages.proposition.philosophy.items[1].name') }}</p>
          </div>
          <p class="text-xl mt-2 mb-10 leading-relaxed" style="margin-left: 40px;">
            {{ t('pages.proposition.philosophy.items[1].desc') }}
          </p>
        </div>
      </Container>
      <div class="bg-[#EBEFF4] ">
        <Container type="extra-wide">
          <div class="px-10 flex flex-row justify-center items-center py-20 gap-10">
            <div class="w-1/2 flex justify-center">
              <img src="@/assets/images/about/proposition/bg2.png" alt="" srcset="" class="w-full">
            </div>
            <div class="w-1/2">
              <div class="bg-[#A37B24] w-30 h-3 mb-10"></div>
              <p class="text-4xl leading-relaxed">
                {{ t('pages.proposition.groupValue.title') }}</p>
              <p class="text-4xl mb-10">
                {{ t('pages.proposition.groupValue.title1') }}<br />{{ t('pages.proposition.groupValue.title2') }}
              </p>
              <p class="text-xl my-10 leading-relaxed text-algin-justify">
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