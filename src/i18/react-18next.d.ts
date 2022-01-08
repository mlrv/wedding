import 'react-i18next'
import gb from './locales/gb.json'

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common'
    resources: typeof gb
  }
}
