import { DesktopHeader } from './desktop/DesktopHeader'
import { MobileHeader } from './mobile/MobileHeader'

export const Header = (props: { mobileView: boolean }) => {
  return props.mobileView ? <MobileHeader /> : <DesktopHeader />
}
