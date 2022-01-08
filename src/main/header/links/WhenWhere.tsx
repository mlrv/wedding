import { Text } from '@geist-ui/react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const whenWhere = 'whenWhere'

export const WhenWhere = () => {
  const { t } = useTranslation()

  // TODO extract styling
  return (
    <Link to="/whenwhere" className="header-link">
      <Text font="30px">{t(whenWhere)}</Text>
    </Link>
  )
}
