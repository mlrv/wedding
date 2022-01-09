import { Text } from '@geist-ui/react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const photos = 'photos'

export const Photos = () => {
  const { t } = useTranslation()

  return (
    <Link to="/photos" className="header-link">
      <Text font="25px">{t(photos).toUpperCase()}</Text>
    </Link>
  )
}
