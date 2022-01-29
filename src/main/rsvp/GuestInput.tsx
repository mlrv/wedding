import { Guest } from '../http/models'
import { GuestInputDesktop } from './GuestInputDesktop'
import { GuestInputMobile } from './GuestInputMobile'

export const GuestInput = (props: { mobileView: boolean; guest: Guest }) => {
  return props.mobileView ? (
    <GuestInputMobile guest={props.guest} />
  ) : (
    <GuestInputDesktop guest={props.guest} />
  )
}
