import { fold } from 'fp-ts/Option'
import { Party } from '../http/models'
import { Found } from './Found'
import { NotFound } from './NotFound'
import { RSVPState } from './types'

export const RSVP = (props: { party: RSVPState }) => {
  const onRSVPState = (s: RSVPState): JSX.Element => {
    switch (s.type) {
      case 'initial':
        return <></>
      case 'asked':
        return fold(
          () => <NotFound />,
          (p: Party) => <Found party={p} />,
        )(s.value)
    }
  }

  return onRSVPState(props.party)
}
