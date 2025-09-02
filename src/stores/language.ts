import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import {
  saveLanguage,
  getStoredLanguage,
  languageToLocale,
  type LanguageCode,
  type I18nLocale
} from '@/utils/language'

export const useLanguageStore = defineStore('language', () => {
  // 当前语言代码
  const currentLanguage = ref<LanguageCode>(getStoredLanguage())

  // 当前locale（用于接口调用）
  const currentLocale = computed(() => languageToLocale(currentLanguage.value))

  // 语言切换事件回调列表
  const languageChangeCallbacks = ref<Array<() => void | Promise<void>>>([])

  // i18n locale同步函数，由组件调用
  let i18nLocaleSetter: ((locale: I18nLocale) => void) | null = null

  /**
   * 注册i18n locale setter
   * @param setter 设置locale的函数
   */
  const setI18nLocaleSetter = (setter: (locale: I18nLocale) => void) => {
    i18nLocaleSetter = setter
  }

  /**
   * 切换语言
   * @param language 新的语言代码
   */
  const changeLanguage = async (language: LanguageCode) => {
    if (language === currentLanguage.value) return


    document.documentElement.setAttribute('data-lang', language)
    currentLanguage.value = language

    // 保存到本地存储
    saveLanguage(language)

    // 更新 i18n locale（如果setter已注册）
    if (i18nLocaleSetter) {
      i18nLocaleSetter(languageToLocale(language))
    }



    // 触发所有注册的回调函数
    const callbacks = [...languageChangeCallbacks.value]
    await Promise.allSettled(
      callbacks.map(callback => {
        try {
          return Promise.resolve(callback())
        } catch (error) {
          console.error('Language change callback error:', error)
          return Promise.resolve()
        }
      })
    )
  }

  /**
   * 注册语言切换回调
   * @param callback 回调函数
   * @returns 取消注册的函数
   */
  const onLanguageChange = (callback: () => void | Promise<void>) => {
    languageChangeCallbacks.value.push(callback)

    // 返回取消注册的函数
    return () => {
      const index = languageChangeCallbacks.value.indexOf(callback)
      if (index > -1) {
        languageChangeCallbacks.value.splice(index, 1)
      }
    }
  }

  /**
   * 清除所有语言切换回调
   */
  const clearLanguageChangeCallbacks = () => {
    languageChangeCallbacks.value = []
  }

  return {
    currentLanguage: computed(() => currentLanguage.value),
    currentLocale,
    changeLanguage,
    onLanguageChange,
    clearLanguageChangeCallbacks,
    setI18nLocaleSetter
  }
})
