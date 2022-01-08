import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import gb from './locales/gb.json'
import it from './locales/it.json'

export type Locale = keyof typeof resources

export const resources = {
  gb,
  it,
} as const


i18n.use(initReactI18next).init({
  resources,
  defaultNS: 'common',
  fallbackLng: 'it',
})
