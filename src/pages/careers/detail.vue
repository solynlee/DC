<template>
  <PageWrapper>
    <section class="text-[#072867]">
      <div class="relative">
        <img src="@/assets/images/careers/detail-banner.png" alt="" srcset="" class="w-full h-42 md:h-96 object-cover">



        <div class="absolute bottom-0 w-full ">
          <Container type="extra-wide">
            <p class="text-lg  md:text-3xl font-bold">{{ jobDetail?.subtitle }}</p>
            <p class="text-2xl  md:text-5xl font-bold mt-3 md:mt-4 lg:mt-5 xl:mt-6 mb-6 md:mb-8 lg:mb-10 xl:mb-12">
              {{
                jobDetail?.jobTitle }}</p>
            <div class="w-16 md:w-24 lg:w-32 xl:w-36 h-1 md:h-1.5 lg:h-2 xl:h-2.5 bg-[#A37B24]"></div>
          </Container>
        </div>
      </div>
      <Container type="extra-wide">
        <div class="bg-[#072867] text-white p-4 mt-10  text-3xl">
          <span>
            {{ t('pages.careers.jobOpenings.workPlace') }}: {{
              jobDetail?.workPlace }} {{ jobDetail?.workPlaceRemark }}</span>
        </div>
        <div
          class="flex items-center gap-3 md:gap-6 border-b border-[#1A2E56] pb-3  md:pb-6 mb-3  md:mb-6 mt-6  md:mt-10">
          <p class="text-lg  md:text-3xl font-bold text-[#082867] flex-1">{{
            t('pages.careersDetail.jobResponse') }}</p>
        </div>
        <div class="text-base md:text-xl leading-relaxed tracking-widest">
          <div v-html="formatJobResponse(jobDetail?.jobResponse)" class="job-responsibilities"></div>
        </div>
        <div
          class="flex items-center gap-3 md:gap-6 border-b border-[#1A2E56] pb-3  md:pb-6 mb-3 md:mb-6 mt-6  md:mt-10">
          <p class="text-lg  md:text-3xl font-bold text-[#082867] flex-1">{{
            t('pages.careersDetail.jobCondition') }}</p>
        </div>
        <div class="text-base md:text-xl leading-relaxed tracking-widest">
          <div v-html="formatJobResponse(jobDetail?.jobCondition)" class="job-responsibilities  job-condition"></div>
        </div>
        <div
          class="flex items-center gap-3 md:gap-6 border-b border-[#1A2E56] pb-3 md:pb-6 mb-3 md:mb-6 mt-6  md:mt-10">
          <p class="text-lg  md:text-3xl font-bold text-[#082867] flex-1">{{
            t('pages.careersDetail.applyWay') }}</p>
        </div>
        <div class="text-base md:text-xl leading-relaxed tracking-widest ">
          <div v-html="formatJobResponse(jobDetail?.applyWay)" class="job-responsibilities"></div>
        </div>
        <div class="flex items-center gap-3 md:gap-6 border-b border-[#1A2E56] pb-3 md:pb-6 mb-3  md:mb-6 mt-6 md:mt-10">
          <p class="text-lg  md:text-3xl font-bold text-[#082867] flex-1">{{
            t('pages.careersDetail.companyDescription') }}</p>
        </div>
        <div class="text-base md:text-xl leading-relaxed tracking-widest mb-10">
          <div v-html="formatJobResponse(jobDetail?.companyDescription)" class="job-responsibilities text-algin-justify"></div>
        </div>
      </Container>
    </section>
  </PageWrapper>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { useCustomApiWithAutoRefresh } from '@/utils/useAutoRefreshApi'
import PageWrapper from '@/components/PageWrapper.vue'
import api from '@/utils/http'
import Container from '@/components/Container.vue'
const { t } = useI18n()
const route = useRoute()


interface JobDetail {
  id: string
  jobTitle: string
  jobResponse: string,
  jobCondition: string,
  applyWay: string,
  companyDescription: string,
  workPlace: string,
  subtitle: string,
  workPlaceRemark: string
}

// 获取职位详情
const { data: jobDetail } = useCustomApiWithAutoRefresh<JobDetail>(async () => {
  const jobCode = route.query.code as string
  if (!jobCode) {
    throw new Error('Job ID is required')
  }

  const res = await api.get({
    url: `/api/front/jobs/code`,
    params: {
      code: jobCode
    }
  })
  return res as JobDetail
})

// 格式化职位描述，将 "- " 开头的项目转换为编号列表
const formatJobResponse = (text: string | undefined): string => {
  if (!text) return ''

  // 将 \n 转换为真正的换行符
  const normalizedText = text.replace(/\\n/g, '\n')

  // 按行分割
  const lines = normalizedText.split('\n')

  let counter = 1
  const formattedLines = lines.map(line => {
    const trimmedLine = line.trim()

    // 跳过空行
    if (!trimmedLine) {
      return ''
    }

    // 如果是以 "- " 开头的行，转换为编号
    if (trimmedLine.startsWith('- ')) {
      const content = trimmedLine.substring(2).trim() // 移除 "- " 并清理空格
      return `<div style="margin-bottom: 0.5rem;">${counter++}. ${content}</div>`
    }

    // 其他行保持原样，用div包装保持格式
    return `<div style="margin-bottom: 0.5rem;">${trimmedLine}</div>`
  })

  // 过滤掉空的div
  return formattedLines.filter(line => line.trim() !== '').join('')
}


</script>

<style scoped>
/* 详情页样式 */
.job-responsibilities {
  line-height: 1.8;
}

/* 确保编号列表项之间有适当间距 */
:deep(.job-responsibilities) {
  /* 为每个编号项添加底部间距 */
  line-height: 2;
}

/* 编号项样式 */
:deep(.job-responsibilities br) {
  margin-bottom: 0.5rem;
}
</style>