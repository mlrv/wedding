import { fold } from 'fp-ts/Option'
import { Party } from '../http/models'
import { RSVPState } from '../rsvp/types'
import { NotFound } from '../rsvp/NotFound'
import { Guests } from '../rsvp/Guests'

export const Book = (props: { rsvp: RSVPState; mobileView: boolean }) => {

  const onRSVPState = (s: RSVPState): JSX.Element => {
    switch (s.type) {
      case 'initial':
        return <></>
      case 'asked':
        return fold(
          () => <NotFound />,
          (p: Party) => <Guests mobileView={props.mobileView} party={p} />,
        )(s.value)
    }
  }

  return onRSVPState(props.rsvp)
}
