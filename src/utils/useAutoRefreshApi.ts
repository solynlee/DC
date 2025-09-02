import { ref, onMounted, onUnmounted, type Ref } from 'vue'
import { useLanguageStore } from '@/stores/language'
import type { AxiosRequestConfig } from 'axios'
import api from '@/utils/http'

/**
 * 自动重新调用API的 Hook
 * 当语言切换时，会自动重新调用注册的API
 */
export function useAutoRefreshApi() {
  const languageStore = useLanguageStore()
  const unregisterCallback = ref<(() => void) | null>(null)

  /**
   * 创建一个响应式API调用函数
   * @param apiCall API调用函数
   * @param config 可选的axios配置，如果提供则使用通用api调用
   * @returns 包含数据、加载状态、错误状态和手动刷新函数的对象
   */
  function createAutoRefreshApi<T = any>(
    apiCall?: () => Promise<T>,
    config?: AxiosRequestConfig
  ) {
    const data = ref<T | null>(null) as Ref<T | null>
    const loading = ref(false)
    const error = ref<Error | null>(null)

    // 实际的API调用函数
    const actualApiCall = apiCall || (() => {
      if (!config) {
        throw new Error('Either apiCall function or config must be provided')
      }
      return api.get<T>(config)
    })

    // 执行API调用
    const executeApi = async () => {
      if (loading.value) return // 防止重复调用

      loading.value = true
      error.value = null

      try {
        const result = await actualApiCall()
        data.value = result
      } catch (err) {
        error.value = err instanceof Error ? err : new Error('API call failed')
        console.error('API call failed:', err)
      } finally {
        loading.value = false
      }
    }

    // 手动刷新函数
    const refresh = () => {
      return executeApi()
    }

    // 注册语言切换回调
    const registerLanguageCallback = () => {
      if (unregisterCallback.value) {
        unregisterCallback.value() // 先取消之前的注册
      }
      unregisterCallback.value = languageStore.onLanguageChange(() => {

        executeApi()
      })
    }

    onMounted(() => {
      registerLanguageCallback()
      executeApi() // 初始加载
    })

    onUnmounted(() => {
      if (unregisterCallback.value) {
        unregisterCallback.value()
        unregisterCallback.value = null
      }
    })

    return {
      data,
      loading,
      error,
      refresh
    }
  }

  return {
    createAutoRefreshApi
  }
}

/**
 * 简化版本：直接使用配置对象的自动刷新API
 * @param config axios请求配置
 * @returns 响应式API调用结果
 */
export function useApiWithAutoRefresh<T = any>(config: AxiosRequestConfig) {
  const { createAutoRefreshApi } = useAutoRefreshApi()
  return createAutoRefreshApi<T>(undefined, config)
}

/**
 * 简化版本：使用自定义API函数的自动刷新
 * @param apiCall 自定义API调用函数
 * @returns 响应式API调用结果
 */
export function useCustomApiWithAutoRefresh<T = any>(apiCall: () => Promise<T>) {
  const { createAutoRefreshApi } = useAutoRefreshApi()
  return createAutoRefreshApi<T>(apiCall)
}
