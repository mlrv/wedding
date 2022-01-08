import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Divider, Page as GPage, Spacer } from '@geist-ui/react'
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
      <Spacer h={2} />
      <GPage.Header className='header' >
        <Header mobileView={mobileView} />
      </GPage.Header>
      <Spacer h={2} />
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
