import { Divider, Spacer, Page } from '@geist-ui/react'
import { DesktopHeader } from './desktop/DesktopHeader'
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
      <Spacer h={1} />
      <Page.Header className="header">
        <DesktopHeader />
      </Page.Header>
      <Divider
        style={{
          width: '50%',
          margin: '0 auto',
        }}
      />
    </>
  )
}
