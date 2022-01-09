import { Divider, Spacer, Page } from '@geist-ui/react'
import { DesktopMainHeader } from './desktop/DesktopMainHeader'
import { DesktopSubHeader } from './desktop/DesktopSubHeader'
import { MobileHeader } from './mobile/MobileHeader'

export const Header = (props: { mobileView: boolean }) => {
  return props.mobileView ? (
    <>
      <Page.Header className="header">
        <MobileHeader />
      </Page.Header>
    </>
  ) : (
    <>
      <Page.Header className="header">
        <DesktopMainHeader />
      </Page.Header>
      <Divider
        style={{
          width: '50%',
          margin: '0 auto',
        }}
      />
      <Spacer h={1} />
      <Page.Header className="header">
        <DesktopSubHeader />
      </Page.Header>
    </>
  )
}
