import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Divider, Page as GPage } from '@geist-ui/react'
import { Home } from './pages/Home'
import { RSVP } from './pages/RSVP'
import { WhenWhere } from './pages/WhenWhere'
import { Gifts } from './pages/Gifts'
import { Header } from './header/Header'

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
      <Header mobileView={mobileView} />
      <Divider />
      <GPage.Content>
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
