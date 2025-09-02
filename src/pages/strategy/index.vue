<template>
  <PageWrapper>
    <section class="h-full w-full text-[#072867]">
      <div class="relative">
        <img src="@/assets/images/strategy/banner.png" alt="" srcset="" class=" h-42 md:h-170  w-full object-cover">

        <div class="text-white absolute bottom-0 w-full ">
          <Container type="extra-wide">
            <div class="px-10">
              <p class="text-lg md:text-5xl font-bold">{{ t('pages.strategy.title1') }}</p>
              <p class="text-2xl md:text-7xl font-bold mt-3 md:mt-5 mb-6 md:mb-10">{{
                t('pages.strategy.title2') }}</p>
              <div class="w-24 md:w-60  h-1.5 md:h-2 bg-[#A37B24]"></div>
            </div>
          </Container>
        </div>
      </div>
      <Container type="extra-wide">
        <p class="px-10 py-8 md:py-17  text-base md:text-2xl leading-relaxed tracking-widest">
          {{ t('pages.strategy.description') }}
        </p>
        <div class="mt-15 px-10" id="wealth-management">
          <div class="flex items-center gap-4 md:gap-6 border-b border-[#1A2E56] pb-4 md:pb-6 mb-3 md:mb-4">
            <img src="@/assets/images/strategy/icon.png" alt="" srcset="" class="w-8 h-8 md:w-10 md:h-10">
            <p class="text-2xl md:text-3xl font-bold">{{ t('pages.strategy.wealthManagement.title') }}
            </p>
          </div>
          <p class="text-base md:text-xl leading-relaxed tracking-widest">
            {{ t('pages.strategy.wealthManagement.content') }}</p>
        </div>
        <!-- 财富管理服务区域 -->
        <div class=" mt-12">
          <!-- 桌面端布局 -->
          <div class="hidden md:flex gap-4  text-white">
            <div
              class="flex-1 relative min-h-[400px] md:h-134 cursor-pointer hover:scale-105 hover:z-10 transition-all duration-300"
              @click="router.push('/strategy/office')">
              <img src="@/assets/images/strategy/1.png" alt="" srcset="" class="w-full h-full object-cover rounded-lg">
              <div class="absolute top-40 right-0 w-2/5 h-full pl-8 pr-8 ">

                <p class="text-2xl md:text-3xl font-bold  mb-4">{{
                  t('pages.strategy.wealthManagement.familyOffice.title') }}</p>
                <div class="bg-[#A37B24]  h-1.5 md:h-2 w-12 md:w-16 mt-2 mb-4 md:mb-6"></div>
                <p class="text-sm md:text-lg opacity-60 leading-relaxed">
                  {{ t('pages.strategy.wealthManagement.familyOffice.content') }}</p>
              </div>
            </div>
            <div class="relative min-h-[400px]   cursor-pointer hover:scale-105 hover:z-10 transition-all duration-300"
              @click="router.push('/strategy/EAM')">
              <img src="@/assets/images/strategy/2.png" alt="" srcset="" class="w-91 h-134 object-cover rounded-lg">
              <div class="absolute top-40 left-0 w-full text-center px-2">
                <p class="text-lg md:text-3xl font-bold leading-tight  h-20">{{
                  t('pages.strategy.wealthManagement.externalAssetMgmt.title') }} </p>
                <!-- <div class="bg-[#A37B24]  h-1.5 md:h-2 w-12 md:w-16 mt-2 mb-4 md:mb-6"></div> -->
                <p class="text-sm md:text-lg opacity-60 leading-relaxed">
                  {{ t('pages.strategy.wealthManagement.externalAssetMgmt.content') }}</p>
              </div>

            </div>
          </div>

          <!-- 移动端布局：保持PC端结构，垂直排列 -->
          <div class="md:hidden px-10 space-y-6">
            <!-- 家族办公室 -->
            <div class="space-y-4 cursor-pointer" @click="router.push('/strategy/office')">
              <div class="bg-[#A37B24] w-12 h-1"></div>
              <p class="text-xl font-bold">{{ t('pages.strategy.wealthManagement.familyOffice.title')
              }}</p>
              <p class="text-base leading-relaxed opacity-80">{{
                t('pages.strategy.wealthManagement.familyOffice.content') }}</p>
              <div class="mt-4">
                <img src="@/assets/images/strategy/1.png" alt="家族办公室" class="w-full h-48 object-cover rounded-lg">
              </div>
            </div>

            <!-- 外部资产管理 -->
            <div class="space-y-4 cursor-pointer" @click="router.push('/strategy/EAM')">
              <p class="text-lg font-bold">{{
                t('pages.strategy.wealthManagement.externalAssetMgmt.title') }}</p>
              <p class="text-base leading-relaxed opacity-80">{{
                t('pages.strategy.wealthManagement.externalAssetMgmt.content') }}</p>
              <div class="mt-4">
                <img src="@/assets/images/strategy/2.png" alt="外部资产管理" class="w-full h-40 object-cover rounded-lg">
              </div>
            </div>
          </div>
        </div>
        <div class="mt-20 px-10" id="insurance-brokers">
          <div class="flex  items-center gap-4 md:gap-6 border-b border-[#1A2E56] pb-4 md:pb-6 mb-3 md:mb-4">
            <img src="@/assets/images/strategy/icon.png" alt="" srcset="" class="w-8 h-8 md:w-10 md:h-10">
            <p class="text-2xl md:text-3xl font-bold">{{ t('pages.strategy.insuranceBrokers.title') }}
            </p>
          </div>
          <p class="text-base md:text-xl leading-relaxed tracking-widest ">
            {{ t('pages.strategy.insuranceBrokers.content') }}</p>
        </div>
        <!-- 保险经纪服务区域 -->
        <div class=" mt-6">
          <!-- 桌面端布局 -->
          <div class="hidden md:flex gap-4 w-full  text-white">
            <div
              class="flex-1 relative min-h-[400px] h-134 cursor-pointer hover:scale-105 hover:z-10 transition-all duration-300"
              @click="router.push('/strategy/business')">
              <img src="@/assets/images/strategy/4.png" alt="" srcset="" class="w-full h-full object-cover rounded-lg">
              <div class="absolute top-40 right-0 w-2/5 h-full px-8 ">

                <p class="text-2xl md:text-3xl font-bold mb-4">{{
                  t('pages.strategy.insuranceBrokers.personalBusiness.title') }}</p>
                <div class="bg-[#A37B24]  h-1.5 md:h-2 w-12 md:w-16 mt-2 mb-4 md:mb-8"></div>
                <p class="text-sm md:text-xl opacity-60 leading-relaxed">
                  {{ t('pages.strategy.insuranceBrokers.personalBusiness.content') }}</p>
              </div>
            </div>
            <div class="relative min-h-[400px]  cursor-pointer hover:scale-105 hover:z-10 transition-all duration-300"
              @click="router.push('/strategy/company')">
              <img src="@/assets/images/strategy/5.png" alt="" srcset="" class="w-91 h-134 object-cover rounded-lg">
              <div class="absolute top-40 left-0 w-full text-center  px-8 ">
                <p class="text-lg md:text-3xl font-bold  h-20">{{
                  t('pages.strategy.insuranceBrokers.corporateBusiness.title')
                }} </p>
                <p class="text-sm md:text-lg opacity-60 leading-relaxed">
                  {{ t('pages.strategy.insuranceBrokers.corporateBusiness.content') }}</p>
              </div>
            </div>
          </div>

          <!-- 移动端布局：保持PC端结构，垂直排列 -->
          <div class="md:hidden px-10 space-y-6">
            <!-- 个人业务 -->
            <div class="space-y-4 cursor-pointer" @click="router.push('/strategy/business')">
              <div class="bg-[#A37B24] w-12 h-1"></div>
              <p class="text-xl font-bold">{{
                t('pages.strategy.insuranceBrokers.personalBusiness.title') }}</p>
              <p class="text-base leading-relaxed opacity-80">{{
                t('pages.strategy.insuranceBrokers.personalBusiness.content') }}</p>
              <div class="mt-4">
                <img src="@/assets/images/strategy/4.png" alt="个人业务" class="w-full h-48 object-cover rounded-lg">
              </div>
            </div>

            <!-- 公司业务 -->
            <div class="space-y-4" @click="router.push('/strategy/company')">
              <p class="text-lg font-bold">{{
                t('pages.strategy.insuranceBrokers.corporateBusiness.title') }}</p>
              <p class="text-base leading-relaxed opacity-80">{{
                t('pages.strategy.insuranceBrokers.corporateBusiness.content') }}</p>
              <div class="mt-4">
                <img src="@/assets/images/strategy/5.png" alt="公司业务" class="w-full h-40 object-cover rounded-lg">
              </div>
            </div>
          </div>
        </div>
        <div class=" mt-20 px-10" id="offshore-family-trust">
          <div class="flex items-center gap-4 md:gap-6 border-b border-[#1A2E56] pb-4 md:pb-6 mb-3 md:mb-4">
            <img src="@/assets/images/strategy/icon.png" alt="" srcset="" class="w-8 h-8 md:w-10 md:h-10">
            <p class="text-2xl md:text-3xl font-bold">{{ t('pages.strategy.offshoreFamilyTrust.title')
            }}</p>
          </div>
          <p class="text-base md:text-xl leading-relaxed tracking-widest">
            {{ t('pages.strategy.offshoreFamilyTrust.content') }}</p>
        </div>

        <div class=" mt-6">
          <!-- 桌面端布局 -->
          <div class="hidden md:flex gap-4 w-full text-white">
            <div
              class="flex-1 relative min-h-[400px] h-134 cursor-pointer hover:scale-105 hover:z-10 transition-all duration-300"
              @click="router.push('/strategy/trust')">
              <img src="@/assets/images/strategy/9.png" alt="" srcset="" class="w-full h-full object-cover rounded-lg">
              <div class="absolute top-40  right-0 w-2/5 h-full pl-8 pr-8">

                <p class="text-2xl md:text-3xl font-bold mb-4">{{
                  t('pages.strategy.offshoreFamilyTrust.offshoreFamilyTrust.title') }}</p>
                <div class="bg-[#A37B24]  h-1.5 md:h-2 w-12 md:w-16 mt-2 mb-4 md:mb-8"></div>
                <p class="text-sm md:text-xl opacity-60 leading-relaxed">
                  {{ t('pages.strategy.offshoreFamilyTrust.offshoreFamilyTrust.content') }}</p>
              </div>
            </div>
            <div class="relative min-h-[400px]  cursor-pointer hover:scale-105 hover:z-10 transition-all duration-300"
              @click="router.push('/strategy/services')">
              <img src="@/assets/images/strategy/10.png" alt="" srcset="" class=" h-134 w-91 object-cover rounded-lg">
              <div class="absolute top-40 left-0 w-full text-center  px-8">
                <p class="text-lg md:text-3xl font-bold h-20"> {{
                  t('pages.strategy.offshoreFamilyTrust.secretarialServices.title') }}</p>
                <p class="text-sm md:text-lg opacity-60 leading-relaxed"> {{
                  t('pages.strategy.offshoreFamilyTrust.secretarialServices.content') }}</p>
              </div>
            </div>
          </div>

          <!-- 移动端布局：保持PC端结构，垂直排列 -->
          <div class="md:hidden px-10 space-y-6">
            <!-- 个人业务 -->
            <div class="space-y-4 cursor-pointer" @click="router.push('/strategy/trust')">
              <div class="bg-[#A37B24] w-12 h-1"></div>
              <p class="text-xl font-bold">{{
                t('pages.strategy.offshoreFamilyTrust.offshoreFamilyTrust.title') }}</p>
              <p class="text-base leading-relaxed opacity-80">{{
                t('pages.strategy.offshoreFamilyTrust.offshoreFamilyTrust.content') }}</p>
              <div class="mt-4">
                <img src="@/assets/images/strategy/9.png" alt="个人业务" class="w-full h-48 object-cover rounded-lg">
              </div>
            </div>

            <!-- 公司业务 -->
            <div class="space-y-4" @click="router.push('/strategy/services')">
              <p class="text-lg font-bold">{{
                t('pages.strategy.offshoreFamilyTrust.secretarialServices.title') }}</p>
              <p class="text-base leading-relaxed opacity-80">{{
                t('pages.strategy.offshoreFamilyTrust.secretarialServices.content') }}</p>
              <div class="mt-4">
                <img src="@/assets/images/strategy/10.png" alt="公司业务" class="w-full h-40 object-cover rounded-lg">
              </div>
            </div>
          </div>
        </div>
        <div class=" mt-20 px-10" id="non-financial-services">
          <div class="flex items-center gap-4 md:gap-6 border-b border-[#1A2E56] pb-4 md:pb-6 mb-3 md:mb-4">
            <img src="@/assets/images/strategy/icon.png" alt="" srcset="" class="w-8 h-8 md:w-10 md:h-10">
            <p class="text-2xl md:text-3xl font-bold">{{ t('pages.strategy.nonFinancialServices.title')
            }}</p>
          </div>
          <p class="text-base md:text-xl leading-relaxed tracking-widest">
            {{ t('pages.strategy.nonFinancialServices.content') }}</p>
        </div>



        <!-- 非金融服务区域 -->
        <div class=" mt-6 mb-8 md:mb-20">
          <!-- 桌面端布局 -->
          <div class="hidden md:flex gap-4 w-full text-white">
            <div
              class="flex-1 relative min-h-[400px] h-134 cursor-pointer hover:scale-105 hover:z-10 transition-all duration-300"
              @click="router.push('/strategy/planning')">
              <img src="@/assets/images/strategy/6.png" alt="" srcset="" class="w-full h-full object-cover rounded-lg">
              <div class="absolute top-40 right-0 w-2/5 h-full px-8">

                <p class="text-2xl md:text-3xl font-bold  mb-4">{{
                  t('pages.strategy.nonFinancialServices.identityPlanning.title') }}</p>
                <div class="bg-[#A37B24] h-1.5 md:h-2 w-12 md:w-16 mt-2 mb-4 md:mb-8"></div>
                <p class="text-sm md:text-xl opacity-60 leading-relaxed">
                  {{ t('pages.strategy.nonFinancialServices.identityPlanning.content') }}</p>
              </div>
            </div>

            <div class=" relative min-h-[400px]  cursor-pointer hover:scale-105 hover:z-10 transition-all duration-300"
              @click="router.push('/strategy/other')">
              <img src="@/assets/images/strategy/8.png" alt="" srcset="" class="w-91 h-134  object-cover rounded-lg">
              <div class="absolute top-40 left-0 w-full text-center  leading-tight px-8">
                <p class="text-lg md:text-3xl font-bold   h-20">
                  {{ t('pages.strategy.nonFinancialServices.otherValueAddedServices.title') }}
                </p>
                <p class="text-sm md:text-lg opacity-60 leading-relaxed"> {{
                  t('pages.strategy.nonFinancialServices.otherValueAddedServices.content') }}</p>
              </div>
            </div>
          </div>

          <!-- 移动端布局：保持PC端结构，垂直排列 -->
          <div class="md:hidden px-10 space-y-6">
            <!-- 身份规划 -->
            <div class="space-y-4 cursor-pointer" @click="router.push('/strategy/planning')">
              <div class="bg-[#A37B24] w-12 h-1"></div>
              <p class="text-xl font-bold">{{
                t('pages.strategy.nonFinancialServices.identityPlanning.title') }}</p>
              <p class="text-base leading-relaxed opacity-80">{{
                t('pages.strategy.nonFinancialServices.identityPlanning.content') }}</p>
              <div class="mt-4">
                <img src="@/assets/images/strategy/6.png" alt="身份规划" class="w-full h-48 object-cover rounded-lg">
              </div>
            </div>

            <!-- 秘书服务 -->
            <!-- <div class="space-y-4 cursor-pointer" @click="router.push('/strategy/services')">
            <p class="text-lg font-bold">{{
              t('pages.strategy.nonFinancialServices.secretarialServices.title') }}</p>
            <div class="mt-4">
              <img src="@/assets/images/strategy/7.png" alt="秘书服务" class="w-full h-40 object-cover rounded-lg">
            </div>
          </div> -->

            <!-- 其他增值服务 -->
            <div class="space-y-4 cursor-pointer" @click="router.push('/strategy/other')">
              <p class="text-lg font-bold">{{
                t('pages.strategy.nonFinancialServices.otherValueAddedServices.title') }}</p>
              <p class="text-base leading-relaxed opacity-80">{{
                t('pages.strategy.nonFinancialServices.otherValueAddedServices.content') }}</p>
              <div class="mt-4">
                <img src="@/assets/images/strategy/8.png" alt="其他增值服务" class="w-full h-40 object-cover rounded-lg">
              </div>
            </div>
          </div>
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
