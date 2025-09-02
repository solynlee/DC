import { createI18n } from 'vue-i18n'
import { getStoredLanguage, languageToLocale } from '@/utils/language'
import commonEn from './locales/common/en'
import commonZhCN from './locales/common/zh-CN'
import commonZhTW from './locales/common/zh-TW'

// per-page locales
import homeEn from '@/pages/home/i18n/en'
import homeZhCN from '@/pages/home/i18n/zh-CN'
import homeZhTW from '@/pages/home/i18n/zh-TW'

import strategyEn from '@/pages/strategy/i18n/en'
import strategyZhCN from '@/pages/strategy/i18n/zh-CN'
import strategyZhTW from '@/pages/strategy/i18n/zh-TW'

import insightsEn from '@/pages/insights/i18n/en'
import insightsZhCN from '@/pages/insights/i18n/zh-CN'
import insightsZhTW from '@/pages/insights/i18n/zh-TW'

import newsEn from '@/pages/news/i18n/en'
import newsZhCN from '@/pages/news/i18n/zh-CN'
import newsZhTW from '@/pages/news/i18n/zh-TW'

import careersEn from '@/pages/careers/i18n/en'
import careersZhCN from '@/pages/careers/i18n/zh-CN'
import careersZhTW from '@/pages/careers/i18n/zh-TW'

import aboutEn from '@/pages/about/i18n/en'
import aboutZhCN from '@/pages/about/i18n/zh-CN'
import aboutZhTW from '@/pages/about/i18n/zh-TW'

import contactEn from '@/pages/contact/i18n/en'
import contactZhCN from '@/pages/contact/i18n/zh-CN'
import contactZhTW from '@/pages/contact/i18n/zh-TW'

function deepMerge(...objects: any[]): any {
  const result: Record<string, any> = {}
  for (const obj of objects) {
    for (const key in obj) {
      const prev = result[key]
      const val = obj[key]
      if (prev && typeof prev === 'object' && typeof val === 'object') {
        result[key] = deepMerge(prev, val)
      } else {
        result[key] = val
      }
    }
  }
  return result
}

// 定义简体中文的消息
const zhCNMessages = deepMerge(
  commonZhCN,
  homeZhCN,
  strategyZhCN,
  insightsZhCN,
  newsZhCN,
  careersZhCN,
  aboutZhCN,
  contactZhCN,
)

const messages = {
  en: deepMerge(
    commonEn,
    homeEn,
    strategyEn,
    insightsEn,
    newsEn,
    careersEn,
    aboutEn,
    contactEn,
  ),
  'zh-CN': zhCNMessages,
  'zh-TW': deepMerge(
    commonZhTW,
    homeZhTW,
    strategyZhTW,
    insightsZhTW,
    newsZhTW,
    careersZhTW,
    aboutZhTW,
    contactZhTW,
  ),
  // Add 'zh' as an alias to 'zh-CN' for compatibility
  'zh': zhCNMessages,
}

export type AppLocales = keyof typeof messages

// 从缓存获取默认语言设置
const defaultLanguage = getStoredLanguage()
const defaultLocale = languageToLocale(defaultLanguage)

// Debug: Verify messages structure (temporary)
if (import.meta.env.DEV) {
  console.log('🔍 i18n配置已加载:', {
    默认语言: defaultLocale,
    可用语言: Object.keys(messages),
    licensesExists: !!(messages['zh']?.pages?.about?.licenses),
  })
}

document.documentElement.setAttribute('data-lang', defaultLocale)
const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: ['zh-CN', 'en'],
  messages,
})

export default i18n

