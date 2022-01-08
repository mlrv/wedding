import '../i18/i18n' // side effects
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import { useTranslation } from 'react-i18next'
import { SelectI18N } from '../i18/select'

export const App = () => {
  const { t } = useTranslation()

  return (
    <GeistProvider>
      <CssBaseline />
      {t('hello')}
      <SelectI18N/>
    </GeistProvider>
  )
}
