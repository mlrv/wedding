import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Page as GPage } from '@geist-ui/react'
import { Home } from './pages/Home'
import { RSVP } from './pages/RSVP'
import { Information } from './pages/Information'
import { Gifts } from './pages/Gifts'
import { Header } from './header/Header'
import { Photos } from './pages/Photos'
import { ThankYou } from './pages/ThankYou'

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
      <GPage.Content>
        <Routes>
          <Route path="/" element={<Home mobileView={mobileView} />} />
          <Route path="/rsvp" element={<RSVP />} />
          <Route path="/information" element={<Information />} />
          <Route path="/gifts" element={<Gifts />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="*" element={<Home mobileView={mobileView} />} />
        </Routes>
      </GPage.Content>
    </GPage>
  )
}
