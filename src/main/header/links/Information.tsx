import { Text } from '@geist-ui/react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const information = 'information'

export const Information = () => {
  const { t } = useTranslation()

  // TODO extract styling
  return (
    <Link to="/information" className="header-link">
      <Text font="25px">{t(information)}</Text>
    </Link>
  )
}
