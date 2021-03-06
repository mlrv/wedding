import { Text } from '@geist-ui/react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const gifts = 'gifts'

export const Gifts = () => {
  const { t } = useTranslation()

  return (
    <Link to="/gifts" className="header-link">
      <Text font="25px">{t(gifts).toUpperCase()}</Text>
    </Link>
  )
}
