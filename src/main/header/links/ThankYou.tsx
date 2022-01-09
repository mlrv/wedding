import { Text } from '@geist-ui/react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const thankYou = 'thankYou'

export const ThankYou = () => {
  const { t } = useTranslation()

  return (
    <Link to="/thankyou" className="header-link">
      <Text font="25px">{t(thankYou).toUpperCase()}</Text>
    </Link>
  )
}
