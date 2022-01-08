import { Button } from '@geist-ui/react'
import { Gb, It } from './icons'
import { useTranslation } from 'react-i18next'
import { Locale } from './i18n'

export const SelectI18N = () => {
  const { i18n } = useTranslation()

  const handler = (l: Locale) => i18n.changeLanguage(l)
  const isActive = (l: Locale) => i18n.language === l

  return (
    <>
      <Button
        width="50px"
        disabled={isActive('it')}
        onClick={() => handler('it')}
      >
        <It />
      </Button>
      <Button
        width="50px"
        disabled={isActive('gb')}
        onClick={() => handler('gb')}
      >
        <Gb />
      </Button>
    </>
  )
}
