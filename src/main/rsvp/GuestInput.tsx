import { Guest } from '../http/models'
import { GuestInputDesktop } from './GuestInputDesktop'
import { GuestInputMobile } from './GuestInputMobile'

export const GuestInput = (props: {
  mobileView: boolean
  guest: Guest
  updateGuest: (guestName: string, update: Partial<Guest>) => void
}) => {
  const onUpdateGuest = (guestName: string, update: Partial<Guest>) =>
    props.updateGuest(guestName, update)

  return props.mobileView ? (
    <GuestInputMobile guest={props.guest} updateGuest={onUpdateGuest} />
  ) : (
    <GuestInputDesktop guest={props.guest} updateGuest={onUpdateGuest} />
  )
}
