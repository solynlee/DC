// 语言缓存工具函数

const LANGUAGE_STORAGE_KEY = 'app_language'

// 支持的语言映射
export const LANGUAGE_MAP = {
  'zh': 'zh-CN',    // 简体中文
  'zh-TW': 'zh-TW', // 繁体中文
  'en': 'en'        // 英文
} as const

export type LanguageCode = keyof typeof LANGUAGE_MAP
export type I18nLocale = typeof LANGUAGE_MAP[LanguageCode]

/**
 * 从 localStorage 获取保存的语言设置
 * @returns 保存的语言代码，如果没有则返回默认值 'zh'
 */
export function getStoredLanguage(): LanguageCode {
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (stored && isValidLanguageCode(stored)) {
      return stored as LanguageCode
    }
  } catch (error) {
    console.warn('Failed to read language from localStorage:', error)
  }
  return 'zh' // 默认返回简体中文
}

/**
 * 将语言设置保存到 localStorage
 * @param language 要保存的语言代码
 */
export function saveLanguage(language: LanguageCode): void {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  } catch (error) {
    console.warn('Failed to save language to localStorage:', error)
  }
}

/**
 * 检查是否为有效的语言代码
 * @param code 要检查的代码
 * @returns 是否有效
 */
export function isValidLanguageCode(code: string): code is LanguageCode {
  return Object.keys(LANGUAGE_MAP).includes(code)
}

/**
 * 将语言代码转换为 i18n locale
 * @param language 语言代码
 * @returns i18n locale
 */
export function languageToLocale(language: LanguageCode): I18nLocale {
  return LANGUAGE_MAP[language]
}

/**
 * 将 i18n locale 转换为语言代码
 * @param locale i18n locale
 * @returns 语言代码
 */
export function localeToLanguage(locale: string): LanguageCode {
  for (const [lang, loc] of Object.entries(LANGUAGE_MAP)) {
    if (loc === locale) {
      return lang as LanguageCode
    }
  }
  return 'zh' // 默认返回简体中文
}
