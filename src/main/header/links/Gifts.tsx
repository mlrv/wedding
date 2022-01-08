import { Text } from '@geist-ui/react'
import { useTranslation } from 'react-i18next'

const gifts = 'gifts'

export const Gifts = () => {
  const { t } = useTranslation()

  return <Text font="30px">{t(gifts)}</Text>
}
