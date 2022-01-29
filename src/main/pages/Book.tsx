import { useEffect } from 'react'
import { fold } from 'fp-ts/Option'
import { Party } from '../http/models'
import { RSVPState } from '../rsvp/types'
import { NotFound } from '../rsvp/NotFound'
import { Guests } from '../rsvp/Guests'
import { useLocation } from 'react-router-dom'

export const Book = () => {
  useEffect(() => document.body.classList.remove('with-background'))

  const { state } = useLocation() as {
    state: { rsvp: RSVPState; mobileView: boolean }
  }

  const onRSVPState = (s: RSVPState): JSX.Element => {
    switch (s.type) {
      case 'initial':
        return <></>
      case 'asked':
        return fold(
          () => <NotFound />,
          (p: Party) => <Guests mobileView={state.mobileView} party={p} />,
        )(s.value)
    }
  }

  return onRSVPState(state.rsvp)
}
