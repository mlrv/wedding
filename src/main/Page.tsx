import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Page as GPage, Divider } from '@geist-ui/react'
import { SelectI18N } from '../i18/select'
import { Header } from './header/Header'
import { Home } from './pages/Home'
import { RSVP } from './pages/RSVP'
import { WhenWhere } from './pages/WhenWhere'
import { Gifts } from './pages/Gifts'

export const Page = () => {
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
        <SelectI18N />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rsvp" element={<RSVP />} />
          <Route path="/whenwhere" element={<WhenWhere />} />
          <Route path="/gifts" element={<Gifts />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </GPage.Content>
    </GPage>
  )
}
