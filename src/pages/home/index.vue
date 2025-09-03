<template>
  <PageWrapper>
    <section class="h-full w-full bg-[#f7f9fa]">
      <!-- Banner 区域 - 全宽无边距 -->
      <Container no-padding type="full">
        <div class="relative">
          <div class="w-full h-216 absolute">
            <swiper :modules="modules" :slides-per-view="1" :loop="true" :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }" class="banner-swiper h-full">
              <swiper-slide v-for="(slide, index) in bannerSlides" :key="index">
                <img :src="slide.image" :alt="slide.alt" class="w-full h-full object-cover" />
              </swiper-slide>
            </swiper>
            <div class="absolute top-0 left-0 w-full h-full gradient-to-navy z-10">
            </div>
          </div>

          <!-- Banner内容使用Container确保边距一致 -->
          <Container type="extra-wide">
            <div class="text-white px-8 pl-16 pr-10 pt-100 relative z-10 ">
              <p class="text-7xl font-bold leading-22 mb-10">
                {{ t('pages.home.banner.title1') }}<br />
                {{ t('pages.home.banner.title2') }}
              </p>
              <p class="text-[23px] leading-8">
                {{ t('pages.home.banner.description') }}
              </p>

              <!-- 桌面端数据展示 -->
              <div class="flex bg-white py-6 justify-around w-full h-46 mt-9 relative">
                <div class="data-block border-r flex-3/10">
                  <p class="data-title">{{ t('pages.home.stats.wealthManagement') }}</p>
                  <p class="data-description">{{ t('pages.home.stats.wealthManagementDesc') }} <br>{{
                    t('pages.home.stats.wealthManagementDesc2') }}</p>
                </div>
                <div class="data-block border-r flex-2/10">
                  <p class="data-title">{{ t('pages.home.stats.partnerInstitutions') }}</p>
                  <p class="data-description">{{ t('pages.home.stats.partnerInstitutionsDesc') }}</p>
                </div>
                <div class="data-block border-r flex-3/10">
                  <p class="data-title">{{ t('pages.home.stats.coreTeamExp') }}</p>
                  <p class="data-description">{{ t('pages.home.stats.coreTeamExpDesc') }}</p>
                </div>
                <div class="data-block flex-2/10">
                  <p class="data-title">{{ t('pages.home.stats.professionalMembers') }}</p>
                  <p class="data-description">{{ t('pages.home.stats.professionalMembersDesc') }}</p>
                </div>
              </div>
              <img src="@/assets/images/home/shadow.png" alt="" srcset="" class="w-full h-4 block">

              <!-- 移动端数据展示 -->
              <!-- <div class=" mt-6 mb-11">
                <div class="grid grid-cols-2 gap-3">
                  <div class="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md border border-gray-100">
                    <p class="text-[#A37B24] text-base font-bold mb-2 leading-tight">{{
                      t('pages.home.stats.wealthManagement') }}</p>
                    <p class="text-[#072867] text-xs leading-relaxed">{{ t('pages.home.stats.wealthManagementDesc') }}
                      <br>{{ t('pages.home.stats.wealthManagementDesc2') }}
                    </p>
                  </div>
                  <div class="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md border border-gray-100">
                    <p class="text-[#A37B24] text-base font-bold mb-2 leading-tight">{{
                      t('pages.home.stats.partnerInstitutions') }}</p>
                    <p class="text-[#072867] text-xs leading-relaxed">{{ t('pages.home.stats.partnerInstitutionsDesc')
                      }}
                    </p>
                  </div>
                  <div class="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md border border-gray-100">
                    <p class="text-[#A37B24] text-base font-bold mb-2 leading-tight">{{
                      t('pages.home.stats.coreTeamExp') }}
                    </p>
                    <p class="text-[#072867] text-xs leading-relaxed">{{ t('pages.home.stats.coreTeamExpDesc') }}</p>
                  </div>
                  <div class="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md border border-gray-100">
                    <p class="text-[#A37B24] text-base font-bold mb-2 leading-tight">{{
                      t('pages.home.stats.professionalMembers') }}</p>
                    <p class="text-[#072867] text-xs leading-relaxed">{{ t('pages.home.stats.professionalMembersDesc')
                      }}
                    </p>
                  </div>
                </div>
              </div> -->
            </div>
          </Container>
        </div>
      </Container>

      <!-- 财富管理服务区域 -->
      <div class="pt-36 pb-16">
        <Container type="extra-wide">
          <div class="flex flex-row justify-between items-center gap-18">
            <img src="@/assets/images/home/futuristic.png" alt="" srcset="" class="w-226 h-124 max-w-none">
            <div class="w-full flex-1 text-left ">
              <div class="flex items-center justify-start gap-7">
                <!-- h-11 图像移除高度 -->
                <img src="@/assets/images/home/icon.png" alt="" srcset="" class="w-10">
                <span class="text-[#072867] text-3xl  font-bold">{{
                  t('pages.home.wealthManagement.title') }}</span>
              </div>
              <p class="text-[#072867] my-10 text-xl leading-relaxed">
                {{ t('pages.home.wealthManagement.content') }}</p>
              <div
                class="inline-flex items-center py-1 px-4 gap-8 mt-6 bg-[#072867] text-white text-base cursor-pointer hover:bg-[#0a3078] transition-colors duration-300"
                @click="goToStrategySection('wealth-management')">
                <span>{{ t('pages.home.btn') }}</span>
                <svg class="w-6 h-9 text-[#A37B24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <!-- 保险经纪服务区域 -->
      <div class="bg-[#EBEFF4] pt-36 pb-16">
        <Container type="extra-wide">
          <div class="flex flex-row justify-between items-center gap-18">
            <div class="w-full flex-1 text-left ">
              <div class="flex items-center justify-start gap-7">
                  <!-- h-11 图像移除高度 -->
                <img src="@/assets/images/home/icon4.png" alt="" srcset="" class="w-10">
                <span class="text-[#072867] text-3xl  font-bold">{{
                  t('pages.home.insuranceBrokers.title') }}</span>
              </div>
              <p class="text-[#072867] my-10 text-xl leading-relaxed">
                {{ t('pages.home.insuranceBrokers.content') }}</p>
              <div
                class="inline-flex items-center py-1 px-4 gap-8 mt-6 bg-[#072867] text-white text-base cursor-pointer hover:bg-[#0a3078] transition-colors duration-300"
                @click="goToStrategySection('insurance-brokers')">
                <span>{{ t('pages.home.btn') }}</span>
                <svg class="w-6 h-9 text-[#A37B24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <img src="@/assets/images/home/silhouette.png" alt="" srcset="" class="w-226 h-124 max-w-none">
          </div>
        </Container>
      </div>

      <!--信托与秘书服务 -->
      <div class="bg-[#f7f9fa] pt-36 pb-16">
        <Container type="extra-wide">
          <div class="flex flex-row justify-between items-center  gap-18">
            <img src="@/assets/images/home/business.png" alt="" srcset="" class="w-226 h-124 max-w-none">
            <div class="w-full flex-1 text-left">
              <div class="flex items-center justify-start gap-7">
                  <!-- h-11 图像移除高度 -->
                <img src="@/assets/images/home/icon5.png" alt="" srcset="" class="w-10">
                <span class="text-[#072867] text-3xl  font-bold">{{
                  t('pages.home.business.title') }}</span>
              </div>
              <p class="text-[#072867] my-10 text-xl leading-relaxed">
                {{ t('pages.home.business.content') }}</p>
              <div
                class="inline-flex items-center py-1 px-4 gap-8 mt-6 bg-[#072867] text-white text-base cursor-pointer hover:bg-[#0a3078] transition-colors duration-300"
                @click="goToStrategySection('offshore-family-trust')">
                <span>{{ t('pages.home.btn') }}</span>
                <svg class="w-6 h-9 text-[#A37B24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <!-- 非金融服务第二部分 -->
      <div class="bg-[#EBEFF4] pt-36 pb-16">
        <Container type="extra-wide">
          <div class="flex flex-row justify-between items-center gap-18">
            <div class="w-full flex-1 text-left ">
              <div class="flex items-center justify-start gap-7">
                  <!-- h-11 图像移除高度 -->
                <img src="@/assets/images/home/icon3.png" alt="" srcset="" class="w-10">
                <span class="text-[#072867] text-3xl  font-bold">{{
                  t('pages.home.nonFinancialServices.title') }}</span>
              </div>
              <p class="text-[#072867] my-10 text-xl leading-relaxed">
                {{ t('pages.home.nonFinancialServices.content') }}</p>
              <div
                class="inline-flex items-center py-1 px-4 gap-8 mt-6 bg-[#072867] text-white text-base cursor-pointer hover:bg-[#0a3078] transition-colors duration-300"
                @click="goToStrategySection('non-financial-services')">
                <span>{{ t('pages.home.btn') }}</span>
                <svg class="w-6 h-9 text-[#A37B24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <img src="@/assets/images/home/serve.png" alt="" srcset="" class="w-226 h-124 max-w-none">
          </div>
        </Container>
      </div>

      <!-- 为什么选择我们区域 -->
      <div class="bg-white pt-16  pb-16">
        <Container>
          <div class="text-[#072867] text-center">
            <p class="text-4xl font-bold mb-8">{{
              t('pages.home.whyChooseUs.title') }}</p>
            <p class="text-xl  mx-auto mb-16 ">
              {{ t('pages.home.whyChooseUs.content') }}<br>{{ t('pages.home.whyChooseUs.content1') }}</p>
            <!-- 桌面端三列布局 -->
            <div class="grid grid-cols-3 gap-15  mx-auto">
              <div class="text-center cursor-pointer h-full pt-20" @click="router.push({ name: 'proposition' })">
                <div class="flex-1 mx-auto mb-8">
                  <img src="@/assets/images/home/coins.png" alt="" srcset=""
                    class="w-full h-auto aspect-4-3 rounded-lg">
                </div>
                <p class="text-2xl font-bold mb-5">{{
                  t('pages.home.whyChooseUs.coreValue.title') }}</p>
                <p class="text-lg leading-relaxed">{{
                  t('pages.home.whyChooseUs.coreValue.content') }}</p>
              </div>
              <div class="text-center cursor-pointer h-full" @click="router.push({ name: 'team' })">
                <div class="flex-1 mx-auto mb-8 relative">
                  <img src="@/assets/images/home/vertical.png" alt="" srcset=""
                    class="w-full h-auto aspect-4-3 rounded-lg">
                  <div class="absolute bottom-0 left-0 w-full h-ful text-white px-8 pb-10">
                    <div class="h-1 w-20 bg-[#A37B24] mx-auto mb-4"></div>
                    <p class="text-2xl font-bold mb-5">{{
                      t('pages.home.whyChooseUs.team.title') }}</p>
                    <p class="text-lg leading-relaxed">{{
                      t('pages.home.whyChooseUs.team.content') }}</p>
                  </div>
                </div>

              </div>
              <div class="text-center cursor-pointer h-full pt-20" @click="router.push({ name: 'value' })">
                <div class="flex-1 mx-auto mb-8">
                  <img src="@/assets/images/home/wealth.png" alt="" srcset=""
                    class="w-full h-auto aspect-4-3 rounded-lg">
                </div>
                <p class="text-2xl font-bold mb-5">{{
                  t('pages.home.whyChooseUs.qualifications.title') }}</p>
                <p class="text-lg leading-relaxed">{{
                  t('pages.home.whyChooseUs.qualifications.content') }}</p>
              </div>

            </div>

            <!-- 移动端专用布局已移除 - 统一使用桌面端网格布局 -->
          </div>
        </Container>
      </div>
    </section>
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from '@/components/PageWrapper.vue'
import Container from '@/components/Container.vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import img1 from '@/assets/images/home/1.png'
import img2 from '@/assets/images/home/2.png'
import img3 from '@/assets/images/home/3.png'
import img4 from '@/assets/images/home/4.png'

const { t } = useI18n()
const router = useRouter()

const modules = [Autoplay]

const bannerSlides = [
  {
    image: img1,
    alt: 'Banner 1'
  },
  {
    image: img2,
    alt: 'Banner 2'
  },
  {
    image: img3,
    alt: 'Banner 3'
  },
  {
    image: img4,
    alt: 'Banner 4'
  }
]

// 跳转到策略页面的指定区域
const goToStrategySection = (sectionId: string) => {
  router.push({
    path: '/strategy',
    hash: `#${sectionId}`
  })
}
</script>

<style scoped>
.banner-swiper {
  width: 100%;
  height: 100%;
}

.data-block {
  text-align: center;
  border-color: #D9E3EA;
}

.data-title {
  color: #A37B24;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.data-description {
  color: #072867;
  font-size: 22px;
  line-height: 1.5;
}

.mobile-bg-expertise {
  background: linear-gradient(135deg, #072867 0%, #A37B24 100%);
}

.mobile-bg-innovation {
  background: linear-gradient(135deg, #A37B24 0%, #072867 100%);
}

.mobile-bg-qualification {
  background: linear-gradient(135deg, #072867 0%, #A37B24 100%);
}

.text-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* @media (max-width: 768px) {
  .data-block {
    padding: 0 0.5rem;
  }
} */
</style>
<style type="text/tailwindcss">
@layer utilities {

  /* 直接使用#00234e色值，不定义额外变量 */
  .gradient-to-navy {
    background: -webkit-linear-gradient(top,
        rgba(0, 0, 0, 0) 0%,
        #00234e 66%,
        #00234e 100%);
    /* 标准语法（补充角度值增强兼容性） */
    background: linear-gradient(180deg,
        rgba(0, 0, 0, 0) 0%,
        #00234e 66%,
        #00234e 100%);
  }

}
</style>