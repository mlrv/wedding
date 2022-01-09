import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Divider, Page as GPage, Spacer } from '@geist-ui/react'
import { SubHeader } from './header/sub/SubHeader'
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
      <Spacer h={1} />
      <GPage.Header className="header">
        <Header />
      </GPage.Header>
      <Divider
        style={{
          visibility: mobileView ? 'hidden' : 'visible',
          width: '50%',
          margin: '0 auto',
        }}
      />
      <Spacer h={1} />
      <GPage.Header className="header">
        <SubHeader mobileView={mobileView} />
      </GPage.Header>
      <Spacer h={1} />
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
