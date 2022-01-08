import { Text } from '@geist-ui/react'
import { useTranslation } from 'react-i18next'

const whenWhere = 'whenWhere'

export const WhenWhere = () => {
  const { t } = useTranslation()

  return <Text font="30px">{t(whenWhere)}</Text>
}
