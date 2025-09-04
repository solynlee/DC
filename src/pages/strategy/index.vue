<template>
  <PageWrapper>
    <section class="h-full w-full text-[#072867]">
      <div class="relative">
        <img src="@/assets/images/strategy/banner.png" alt="" srcset="" class="h-170  w-full object-cover">

        <div class="text-white absolute bottom-0 w-full ">
          <Container type="extra-wide">
            <div class="px-10">
              <p class="text-5xl font-bold">{{ t('pages.strategy.title1') }}</p>
              <p class="text-7xl font-bold mt-5 mb-10 ">{{
                t('pages.strategy.title2') }}</p>
              <div class="w-60  h-2 bg-[#A37B24]"></div>
            </div>
          </Container>
        </div>
      </div>
      <Container type="extra-wide">
        <p class="px-10 py-17  text-2xl leading-relaxed tracking-widest text-algin-justify">
          {{ t('pages.strategy.description') }}
        </p>
        <div class="mt-15 px-10" id="wealth-management">
          <div class="flex items-center gap-6 border-b border-[#1A2E56] pb-6 mb-4">
            <img src="@/assets/images/strategy/icon.png" alt="" srcset="" class="w-10">
            <p class="text-3xl font-bold">{{ t('pages.strategy.wealthManagement.title') }}
            </p>
          </div>
          <p class="text-xl leading-relaxed tracking-widest ">
            {{ t('pages.strategy.wealthManagement.content') }}</p>
        </div>
        <!-- 财富管理服务区域 -->
        <div class=" mt-12">
          <div class="flex gap-4  text-white">
            <div class="flex-1 relative h-134 cursor-pointer hover:scale-105 hover:z-10 transition-all duration-300"
              @click="router.push('/strategy/office')">
              <img src="@/assets/images/strategy/1.png" alt="" srcset="" class="w-full h-full object-cover rounded-lg">
              <div class="absolute top-30 right-0 w-2/5 h-full pl-8 pr-8 ">

                <div class="h-30">
                  <p class="text-3xl font-bold  mb-4">{{
                    t('pages.strategy.wealthManagement.familyOffice.title') }}</p>
                  <div class="bg-[#A37B24]  h-2 w-16 mt-2 mb-6"></div>
                </div>
                <p class="text-lg opacity-60 leading-relaxed text-algin-justify">
                  {{ t('pages.strategy.wealthManagement.familyOffice.content') }}</p>
              </div>
            </div>
            <div class="relative min-h-[400px]   cursor-pointer hover:scale-105 hover:z-10 transition-all duration-300"
              @click="router.push('/strategy/EAM')">
              <img src="@/assets/images/strategy/2.png" alt="" srcset="" class="w-91 h-134 object-cover rounded-lg">
              <!-- px-2改px-8 -->
              <div class="absolute top-30 left-0 w-full px-8">
                <div class="h-30">
                  <p class="text-3xl font-bold leading-tight mb-4  white-space-nowrap">{{ t('pages.strategy.wealthManagement.externalAssetMgmt.title') }}</p>
                  <div class="bg-[#A37B24]  h-2 w-16 mt-2 mb-6"></div>
                </div>
                <!-- <p class="text-3xl font-bold leading-tight h-30 white-space-nowrap">{{
                  t('pages.strategy.wealthManagement.externalAssetMgmt.title') }} </p> -->
                  <!-- 添加 px-6 text-left -->
                <p class="text-lg opacity-60 leading-relaxed text-left text-algin-justify">
                  {{ t('pages.strategy.wealthManagement.externalAssetMgmt.content') }}</p>
              </div>

            </div>
          </div>

        </div>


        <div class="mt-20 px-10" id="insurance-brokers">
          <div class="flex  items-center gap-6 border-b border-[#1A2E56] pb-6 mb-4">
            <img src="@/assets/images/strategy/icon.png" alt="" srcset="" class="w-10">
            <p class="text-3xl font-bold">{{ t('pages.strategy.insuranceBrokers.title') }}
            </p>
          </div>
          <p class="text-xl leading-relaxed tracking-widest text-algin-justify">
            {{ t('pages.strategy.insuranceBrokers.content') }}</p>
        </div>
        <!-- 信托与秘书服务 -->
        <div class=" mt-6">
          <!-- 桌面端布局 -->
          <div class="flex gap-4 w-full  text-white">
            <div
              class="flex-1 relative min-h-[400px] h-134 cursor-pointer hover:scale-105 hover:z-10 transition-all duration-300"
              @click="router.push('/strategy/business')">
              <img src="@/assets/images/strategy/4.png" alt="" srcset="" class="w-full h-full object-cover rounded-lg">
              <div class="absolute top-30 right-0 w-2/5 h-full px-8 ">

                <div class="h-30">
                  <p class="text-3xl font-bold mb-4">{{
                    t('pages.strategy.insuranceBrokers.personalBusiness.title') }}</p>
                  <div class="bg-[#A37B24]  h-2 w-16 mt-2 mb-8"></div>
                </div>
                <p class="text-xl opacity-60 leading-relaxed text-algin-justify">
                  {{ t('pages.strategy.insuranceBrokers.personalBusiness.content') }}</p>
              </div>
            </div>
            <div class="relative min-h-[400px]  cursor-pointer hover:scale-105 hover:z-10 transition-all duration-300"
              @click="router.push('/strategy/company')">
              <img src="@/assets/images/strategy/5.png" alt="" srcset="" class="w-91 h-134 object-cover rounded-lg">
              <div class="absolute top-30 left-0 w-full px-8 ">
                <div class="h-30">
                  <p class="text-3xl font-bold mb-4">{{ t('pages.strategy.insuranceBrokers.corporateBusiness.title') }}</p>
                  <div class="bg-[#A37B24]  h-2 w-16 mt-2 mb-8"></div>
                </div>
                <!-- <p class="text-3xl font-bold  h-30">{{
                  t('pages.strategy.insuranceBrokers.corporateBusiness.title')
                }} </p> -->
                <!-- 添加text-left -->
                <p class="text-lg opacity-60 leading-relaxed text-left text-algin-justify">
                  {{ t('pages.strategy.insuranceBrokers.corporateBusiness.content') }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class=" mt-20 px-10" id="offshore-family-trust">
          <div class="flex items-center gap-6 border-b border-[#1A2E56] pb-6 mb-4">
            <img src="@/assets/images/strategy/icon.png" alt="" srcset="" class="w-10">
            <p class="text-3xl font-bold">{{ t('pages.strategy.offshoreFamilyTrust.title')
            }}</p>
          </div>
          <p class="text-xl leading-relaxed tracking-widest text-algin-justify">
            {{ t('pages.strategy.offshoreFamilyTrust.content') }}</p>
        </div>

        <div class=" mt-6">
          <!-- 桌面端布局 -->
          <div class="flex gap-4 w-full text-white">
            <div
              class="flex-1 relative min-h-[400px] h-134 cursor-pointer hover:scale-105 hover:z-10 transition-all duration-300"
              @click="router.push('/strategy/trust')">
              <img src="@/assets/images/strategy/9.png" alt="" srcset="" class="w-full h-full object-cover rounded-lg">
              <div class="absolute top-30  right-0 w-2/5 h-full pl-8 pr-8">

                <div class="h-30">
                  <p class="text-3xl font-bold mb-4">{{
                    t('pages.strategy.offshoreFamilyTrust.offshoreFamilyTrust.title') }}</p>
                  <div class="bg-[#A37B24]  h-2 w-16 mt-2 mb-8"></div>
                </div>
                <p class="text-xl opacity-60 leading-relaxed text-algin-justify">
                  {{ t('pages.strategy.offshoreFamilyTrust.offshoreFamilyTrust.content') }}</p>
              </div>
            </div>
            <div class="relative min-h-[400px]  cursor-pointer hover:scale-105 hover:z-10 transition-all duration-300"
              @click="router.push('/strategy/services')">
              <img src="@/assets/images/strategy/10.png" alt="" srcset="" class=" h-134 w-91 object-cover rounded-lg">
              <div class="absolute top-30 left-0 w-full px-8">
                <div class="h-30">
                  <p class="text-3xl font-bold mb-4">{{ t('pages.strategy.offshoreFamilyTrust.secretarialServices.title') }}</p>
                  <div class="bg-[#A37B24]  h-2 w-16 mt-2 mb-8"></div>
                </div>
                <!-- <p class="text-3xl font-bold h-30"> {{
                  t('pages.strategy.offshoreFamilyTrust.secretarialServices.title') }}</p> -->
                   <!-- 添加text-left -->
                <p class="text-lg opacity-60 leading-relaxed text-left text-algin-justify"> {{
                  t('pages.strategy.offshoreFamilyTrust.secretarialServices.content') }}</p>
              </div>
            </div>
          </div>

        </div>
        <div class=" mt-20 px-10" id="non-financial-services">
          <div class="flex items-center gap-6 border-b border-[#1A2E56] pb-6 mb-4">
            <img src="@/assets/images/strategy/icon.png" alt="" srcset="" class="w-10">
            <p class="text-3xl font-bold">{{ t('pages.strategy.nonFinancialServices.title')
            }}</p>
          </div>
          <p class="text-xl leading-relaxed tracking-widest">
            {{ t('pages.strategy.nonFinancialServices.content') }}</p>
        </div>



        <!-- 非金融服务区域 -->
        <div class=" mt-6 mb-20">
          <!-- 桌面端布局 -->
          <div class="flex gap-4 w-full text-white">
            <div
              class="flex-1 relative min-h-[400px] h-134 cursor-pointer hover:scale-105 hover:z-10 transition-all duration-300"
              @click="router.push('/strategy/planning')">
              <img src="@/assets/images/strategy/6.png" alt="" srcset="" class="w-full h-full object-cover rounded-lg">
              <div class="absolute top-30 right-0 w-2/5 h-full px-8">

                <div class="h-30">
                  <p class="text-3xl font-bold  mb-4">{{
                    t('pages.strategy.nonFinancialServices.identityPlanning.title') }}</p>
                  <div class="bg-[#A37B24] h-2 w-16 mt-2 mb-8"></div>
                </div>
                <p class="text-xl opacity-60 leading-relaxed text-algin-justify">
                  {{ t('pages.strategy.nonFinancialServices.identityPlanning.content') }}</p>
              </div>
            </div>

            <div class=" relative min-h-[400px]  cursor-pointer hover:scale-105 hover:z-10 transition-all duration-300"
              @click="router.push('/strategy/other')">
              <img src="@/assets/images/strategy/8.png" alt="" srcset="" class="w-91 h-134  object-cover rounded-lg">
              <div class="absolute top-30 left-0 w-full leading-tight px-8">
                <div class="h-30">
                  <p class="text-3xl font-bold mb-4">{{ t('pages.strategy.nonFinancialServices.otherValueAddedServices.title')  }}</p>
                  <div class="bg-[#A37B24]  h-2 w-16 mt-2 mb-8"></div>
                </div>
                <!-- <p class="text-3xl font-bold   h-30">
                  {{ t('pages.strategy.nonFinancialServices.otherValueAddedServices.title') }}
                </p> -->
                 <!-- 添加text-left -->
                <p class="text-lg opacity-60 leading-relaxed text-left text-algin-justify"> {{
                  t('pages.strategy.nonFinancialServices.otherValueAddedServices.content') }}</p>
              </div>
            </div>
          </div>

          <!-- 移动端布局：保持PC端结构，垂直排列 -->

        </div>
      </Container>
    </section>
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from '@/components/PageWrapper.vue'
import Container from '@/components/Container.vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const router = useRouter()
</script>


<style scoped></style>
