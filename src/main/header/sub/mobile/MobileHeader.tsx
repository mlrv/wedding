import Menu from '@geist-ui/react-icons/menu'

import { Drawer } from '@geist-ui/react'
import { useState } from 'react'
import { MobileSubHeaderDrawerContent } from './MobileSubHeaderDrawerContent'

export const MobileHeader = () => {
  const [state, setState] = useState(false)

  return (
    <>
      <Menu onClick={() => setState(true)} />
      <Drawer
        visible={state}
        onContentClick={() => setState(false)}
        onClose={() => setState(false)}
        placement="left"
      >
        <Drawer.Content>
          <MobileSubHeaderDrawerContent />
        </Drawer.Content>
      </Drawer>
    </>
  )
}
