import { useState, useEffect } from 'react'
import { Page as GPage, Divider, Text } from '@geist-ui/react'
import { useTranslation } from 'react-i18next'
import { SelectI18N } from '../i18/select'
import { Header } from './header/Header'
import { Logo } from './Logo'

export const Page = () => {
  const { t } = useTranslation()

  const [state, setState] = useState({
    mobileView: false,
  })

  const { mobileView } = state

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState(prevState => ({ ...prevState, mobileView: true }))
        : setState(prevState => ({ ...prevState, mobileView: false }))
    }

    setResponsiveness()

    window.addEventListener('resize', setResponsiveness)

    return () => {
      window.removeEventListener('resize', setResponsiveness)
    }
  }, [])

  return (
    <GPage>
      <GPage.Header>
        <Header mobileView={mobileView} />
      </GPage.Header>
      <Divider />
      <GPage.Content>
        <Text h1>{t('hello')}</Text>
        <SelectI18N />
        <Logo />
      </GPage.Content>
    </GPage>
  )
}
