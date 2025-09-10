<template>
  <el-dialog v-model="visible" :lockScroll='false' width="80%" append-to-body :close-on-click-modal="false"
    :close-on-press-escape="false" :show-close="false" class="disclaimer-modal">
    <div class="disclaimer-content">

      <!-- 内容区域 -->
      <div class="content-scroll">
        <div class="text-2xl font-bold text-center">
          {{ t('disclaimer.title') }}
        </div>
        <div class="content-section">
          <!-- 主要免责声明内容 -->
          <div class="disclaimer-text">
            <p class="disclaimer-paragraph">
              {{ t('disclaimer.content1') }}
            </p>

            <p class="disclaimer-paragraph">
              {{ t('disclaimer.content2') }}
            </p>

            <p class="disclaimer-paragraph">
              {{ t('disclaimer.content3') }}
            </p>

            <p class="disclaimer-footer">
              {{ t('disclaimer.content4') }}
            </p>
          </div>
        </div>
      </div>

      <!-- 确认区域 -->
      <div class="confirmation-section">
        <el-checkbox v-model="agreed" class="agreement-checkbox" size="large">
        </el-checkbox>
        <span class="checkbox-text">{{ t('disclaimer.confirm') }}</span>
      </div>
    </div>

    <!-- 底部按钮 -->
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" size="large" :disabled="!agreed" @click="handleConfirm" class="confirm-btn">
          {{ t('disclaimer.confirmBtn') }}
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ElDialog, ElButton, ElCheckbox } from 'element-plus'

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 响应式数据
const visible = ref(false)
const agreed = ref(false)



// 检查是否已经同意过免责声明
const checkDisclaimerAgreed = (): boolean => {
  return sessionStorage.getItem('disclaimer-agreed') === 'true'
}

// 设置免责声明已同意
const setDisclaimerAgreed = (): void => {
  sessionStorage.setItem('disclaimer-agreed', 'true')
}

// 处理确认
const handleConfirm = (): void => {
  if (agreed.value) {
    setDisclaimerAgreed()
    visible.value = false
  }
}

// 显示弹窗
const showDisclaimer = (): void => {
  visible.value = true
}

// 组件挂载时检查
onMounted(() => {
  // 如果没有同意过免责声明，则显示弹窗
  if (!checkDisclaimerAgreed()) {
    // 延迟一点显示，确保页面加载完成
    setTimeout(() => {
      showDisclaimer()
    }, 500)
  }
})

// 暴露方法供父组件调用
defineExpose({
  showDisclaimer
})
</script>

<style scoped>
.disclaimer-modal {
  --el-dialog-bg-color: #ffffff;
  --el-dialog-border-radius: 16px;
}

.disclaimer-modal :deep(.el-dialog) {
  border-radius: 16px;
  overflow: hidden;
}

.disclaimer-modal :deep(.el-dialog__header) {
  background: linear-gradient(135deg, #072867 0%, #1e40af 100%);
  color: white;
  border-radius: 16px 16px 0 0;
  padding: 24px 32px;
  text-align: center;
}

.disclaimer-modal :deep(.el-dialog__title) {
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.disclaimer-modal :deep(.el-dialog__body) {
  padding: 0;
  background: #ffffff;
}

.disclaimer-modal :deep(.el-dialog__footer) {
  background: #f8fafc;
  border-radius: 0 0 16px 16px;
  padding: 24px 32px;
  border-top: 1px solid #e2e8f0;
}

.disclaimer-content {
  max-height: 75vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
}

.content-scroll {
  flex: 1;
  overflow-y: auto;
  padding: 32px;
  max-height: 50vh;
  background: #ffffff;
}

.content-scroll::-webkit-scrollbar {
  width: 8px;
}

.content-scroll::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 4px;
}

.content-scroll::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #072867 0%, #1e40af 100%);
  border-radius: 4px;
}

.content-scroll::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #051f4a 0%, #1e3a8a 100%);
}

.content-section {
  line-height: 1.8;
}

/* .disclaimer-text {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
} */

.disclaimer-paragraph {
  text-indent: 2rem;
  font-size: 14px;
  line-height: 1.8;
  color: #374151;
  margin-bottom: 24px;
  text-align: justify;
  text-justify: inter-ideograph;
  word-break: normal;
  word-wrap: break-word;
  padding: 0;
  border: none;
  background: none;
}

.disclaimer-footer {
  font-size: 14px;
  line-height: 1.6;
  color: #6b7280;
  margin-top: 32px;
  margin-bottom: 0;
  text-align: center;
  font-weight: 600;
  border-top: 2px solid #e5e7eb;
  padding-top: 20px;
}

.confirmation-section {
  padding: 12px 32px 0 32px;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.agreement-checkbox {
  display: flex;
  max-width: 100%;
}



.checkbox-text {

  font-size: 15px;
  color: #374151;
  font-weight: 500;
  margin-left: 8px;
}

.agreement-checkbox :deep(.el-checkbox__input) {
  transform: scale(1.2);
}

.agreement-checkbox :deep(.el-checkbox__inner) {
  border-color: #072867;
  border-width: 2px;
}

.agreement-checkbox :deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
  background-color: #072867;
  border-color: #072867;
}

.dialog-footer {
  display: flex;
  justify-content: center;
}

.confirm-btn {
  background: linear-gradient(135deg, #072867 0%, #1e40af 100%);
  border: none;
  padding: 14px 48px;
  font-weight: 700;
  font-size: 16px;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: 0.5px;
  min-width: 180px;
}

.confirm-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(7, 40, 103, 0.4);
  background: linear-gradient(135deg, #051f4a 0%, #1e3a8a 100%);
}

.confirm-btn:active:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(7, 40, 103, 0.3);
}

.confirm-btn:disabled {
  background: #d1d5db;
  color: #9ca3af;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}







/* 打印样式 */
@media print {
  .disclaimer-modal :deep(.el-dialog) {
    box-shadow: none;
    border: 1px solid #000;
  }

  .disclaimer-modal :deep(.el-dialog__header) {
    background: #000 !important;
    color: #fff !important;
  }

  .confirmation-section,
  .disclaimer-modal :deep(.el-dialog__footer) {
    display: none;
  }

  .disclaimer-paragraph {
    color: #000 !important;
    font-size: 12pt;
    line-height: 1.6;
  }
}
</style>
