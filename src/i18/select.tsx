import { Button, Spacer } from '@geist-ui/react'
import { Gb, It } from './icons'
import { useTranslation } from 'react-i18next'
import { Locale } from './i18n'
import React from 'react'

export const SelectI18N = () => {
  const { i18n } = useTranslation()

  const handler = (e: React.MouseEvent<HTMLButtonElement>, l: Locale) => {
    e.stopPropagation()
    i18n.changeLanguage(l)
  }
  const isActive = (l: Locale) => i18n.language === l

  return (
    <>
      <Button
        width="50px"
        disabled={isActive('it')}
        onClick={e => handler(e, 'it')}
      >
        <It />
      </Button>
      <Spacer />
      <Button
        width="50px"
        disabled={isActive('gb')}
        onClick={e => handler(e, 'gb')}
      >
        <Gb />
      </Button>
    </>
  )
}
