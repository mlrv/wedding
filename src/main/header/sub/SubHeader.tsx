import { DesktopSubHeader } from './desktop/DesktopSubHeader'
import { MobileSubHeader } from './mobile/MobileSubHeader'

export const SubHeader = (props: { mobileView: boolean }) => {
  return props.mobileView ? <MobileSubHeader /> : <DesktopSubHeader />
}
