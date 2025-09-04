<template>
  <section class="text-[#072867] bg-[#f7f7f7]">
    <div class=" relative">

      <img src="@/assets/images/contact/banner.png" alt="" srcset="" class="w-full h-170">

      <div class=" absolute top-0 z-10 w-full pb-16">
        <!-- 桌面端标题布局 -->
        <div class="flex items-center justify-center pl-30 pt-20">
          <div class="w-3 h-32 bg-[#345CAC] mr-10"></div>
          <div class="flex-1 flex justify-center flex-col">
            <h1 class="text-4xl font-bold text-[#072867] tracking-wider mb-6">
              {{ t('pages.contact.titleEn') }}
            </h1>
            <h2 class="text-5xl font-bold text-[#072867] tracking-wide">
              {{ t('pages.contact.title') }}
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class=" relative pb-10">
      <Container type="extra-wide">
        <div class="bg-white p-10 -translate-y-30">
          <div class="flex flex-row justify-between border-b border-[#1946BA] pb-10 gap-0">
            <div class="">
              <div class="h-3 w-30 bg-[#A37B24]"></div>
              <p class="text-2xl font-bold my-4">{{ t('pages.contact.company') }}</p>
              <p class="text-base">{{ t('pages.contact.companyEn') }}</p>
            </div>
            <div class="text-xl">
              <!-- 统一布局：桌面端样式 -->
              <div class="flex items-center">
                <div class="border-r border-[#1946BA] pr-8 mr-8">
                  <div class="flex items-center gap-4 mb-4">
                    <img src="@/assets/images/contact/dianhua.png" alt="" srcset="" class="w-4 flex-shrink-0">
                    <span class="text-xl font-bold">{{ t('pages.contact.tel') }}</span>
                  </div>
                  <div class="flex items-center gap-4 mb-4">
                    <img src="@/assets/images/contact/dianhuabao1.png" alt="" srcset="" class="w-4 flex-shrink-0">
                    <span class="text-xl font-bold">{{ t('pages.contact.fax') }}</span>
                  </div>
                  <div class="flex items-center gap-4">
                    <img src="@/assets/images/contact/youxiang-2.png" alt="" srcset="" class="w-4 flex-shrink-0">
                    <span class="text-xl font-bold">{{ t('pages.contact.email') }}</span>
                  </div>
                </div>
                <div>
                  <p class="text-xl mb-4">{{ t('pages.contact.telNumber')
                    }}
                  </p>
                  <p class="text-xl mb-4">{{ t('pages.contact.faxNumber')
                    }}
                  </p>
                  <p class="text-xl">{{ t('pages.contact.emailAddress') }}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- 第一个地址：南丰大厦 -->
          <div class="min-h-100 gap-10 border-2 border-[#D0E0ED] mt-10 flex flex-row">
            <div class="flex flex-col justify-center p-8 pl-10 pt-10 flex-1 min-h-0">
              <div class="flex flex-col justify-center h-full">
                <p class="text-2xl font-bold flex items-center mb-10 gap-4">
                  <img src="@/assets/images/contact/dizhi-2.png" alt="" srcset="" class="w-7 h-9 flex-shrink-0">
                  <span>{{ t('pages.contact.address') }}</span>
                </p>
                <p class="text-xl leading-relaxed">{{ t('pages.contact.address1')
                  }}
                </p>
              </div>
            </div>
            <div class="w-240 p-0">
              <MapComponent :location="location1" height="100%" width="100%" :zoom="16" class="h-full w-full" />
            </div>
          </div>
          <!-- 第二个地址：港威大厦 -->
          <div class="min-h-100 border-2 gap-10 border-[#D0E0ED] mt-10 flex flex-row">
            <div class="flex flex-col justify-center p-8 pl-10 pt-10 flex-1 min-h-0">
              <div class="flex flex-col justify-center h-full">
                <p class="text-2xl font-bold flex items-center mb-10 gap-4">
                  <img src="@/assets/images/contact/dizhi-2.png" alt="" srcset="" class="w-7 h-9 flex-shrink-0">
                  <span>{{ t('pages.contact.address') }}</span>
                </p>
                <p class="text-xl leading-relaxed">
                  {{ t('pages.contact.address2') }}</p>
              </div>
            </div>
            <div class="w-240 p-0">
              <MapComponent :location="location2" height="100%" width="100%" :zoom="16" class="h-full w-full" />
            </div>
          </div>
        </div>
        <div class="flex items-center gap-6 border-b border-[#1A2E56] pb-6 mb-6 mt-10">
          <img src="@/assets/images/contact/icon.png" alt="" srcset="" class="w-10 h-10">
          <p class="text-3xl font-bold text-[#082867] flex-1">{{
            t('pages.contact.title') }}</p>
        </div>
        <div class="bg-white h-12 flex items-center px-4 border border-[#D0E0ED] mt-6">
          <span class="text-xl font-bold flex-shrink-0">{{ t('pages.contact.form.name')
            }}：</span>
          <input v-model="formData.name"
            class="flex-1 border-none outline-none bg-transparent text-[#072867] placeholder-gray-500 text-lg min-w-0 ml-2"
            type="text" :placeholder="t('pages.contact.form.name')" :disabled="isSubmitting">
        </div>
        <div class="bg-white h-12 flex items-center px-4 border border-[#D0E0ED] mt-6">
          <span class="text-xl font-bold flex-shrink-0">{{ t('pages.contact.form.telephone')
            }}：</span>
          <input v-model="formData.telePhone"
            class="flex-1 border-none outline-none bg-transparent text-[#072867] placeholder-gray-500 text-lg min-w-0 ml-2"
            type="tel" :placeholder="t('pages.contact.form.telephone')" :disabled="isSubmitting">
        </div>
        <div class="bg-white h-24 flex items-start px-4 py-3 border border-[#D0E0ED] mt-6">
          <span class="text-xl font-bold flex-shrink-0">{{
            t('pages.contact.form.message')
            }}：</span>
          <textarea v-model="formData.message"
            class="flex-1 border-none outline-none bg-transparent text-[#072867] placeholder-gray-500 text-lg min-w-0 resize-none h-full ml-2"
            :placeholder="t('pages.contact.form.message')" :disabled="isSubmitting"></textarea>
        </div>
        <div class="flex flex-row gap-4 items-center justify-center mt-10">

          <button @click="submitForm" :disabled="isSubmitting"
            :class="{ 'opacity-50 cursor-not-allowed': isSubmitting }"
            class="w-100 h-10 bg-[#A37B24] text-white text-xl flex items-center justify-center hover:bg-[#8B6B1F] transition-colors duration-200 cursor-pointer">
            {{ isSubmitting ? t('pages.contact.form.submitting') : t('pages.contact.form.submit') }}
          </button>
        </div>
      </Container>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import MapComponent from '@/components/MapComponent.vue'
import type { MapLocation } from '../../../types/tencent-map'
import { useI18n } from 'vue-i18n'
import api from '@/utils/http'
import Container from '@/components/Container.vue'
const { t } = useI18n()

// 表单数据
const formData = ref({
  name: '',
  telePhone: '',
  message: ''
})

// 提交状态
const isSubmitting = ref(false)

// 表单提交函数
const submitForm = async () => {
  // 表单验证
  if (!formData.value.name.trim()) {
    ElMessage.warning(t('pages.contact.form.validation.nameRequired'))
    return
  }

  if (!formData.value.telePhone.trim()) {
    ElMessage.warning(t('pages.contact.form.validation.phoneRequired'))
    return
  }

  if (!formData.value.message.trim()) {
    ElMessage.warning(t('pages.contact.form.validation.messageRequired'))
    return
  }

  try {
    isSubmitting.value = true

    await api.post({
      url: '/api/front/contact/add',
      data: {
        name: formData.value.name.trim(),
        telePhone: formData.value.telePhone.trim(),
        message: formData.value.message.trim()
      }
    })

    // 提交成功 - 显示成功消息
    ElMessage.success(t('pages.contact.form.submitSuccess'))

    // 清空表单
    formData.value = {
      name: '',
      telePhone: '',
      message: ''
    }

  } catch (error) {
    console.error('Contact form submission failed:', error)
    ElMessage.error(t('pages.contact.form.submitError'))
  } finally {
    isSubmitting.value = false
  }
}

// 第一个地址：香港干诺道中88号南丰大厦 (中环商业区)
// GCJ02坐标系 114°09′33.87″E, 22°16′59.86″N
const location1: MapLocation = {
  longitude: 114.159409,
  latitude: 22.283287,
  address: '香港干诺道中88号南丰大厦12楼1210-12室',
  title: '德萃财富（香港）- 南丰大厦办公室'
}

// 第二个地址：香港尖沙咀广东道25号港威大厦 (尖沙咀商业区)
// GCJ02坐标系 114°10′22.71″E, 22°17′47.93″N
const location2: MapLocation = {
  longitude: 114.172974,
  latitude: 22.296648,
  address: '香港尖沙咀广东道25号港威大厦二座2602-2605室',
  title: '德萃财富（香港）- 港威大厦办公室'
}
</script>



<style scoped></style>
