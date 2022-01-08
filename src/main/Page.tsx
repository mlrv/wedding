import { Page as GPage, Text } from '@geist-ui/react'
import { useTranslation } from 'react-i18next'
import { SelectI18N } from '../i18/select'

export const Page = () => {
  const { t } = useTranslation()

  return (
    <GPage>
      <GPage.Content>
				<Text h1>{t('hello')}</Text>
				<SelectI18N/>
      </GPage.Content>
    </GPage>
  )
}
