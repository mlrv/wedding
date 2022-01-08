import Menu from '@geist-ui/react-icons/menu'

import { Drawer } from '@geist-ui/react'
import { useState } from 'react'
import { MobileHeaderDrawerContent } from './MobileHeaderDrawerContent'

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
          <MobileHeaderDrawerContent />
        </Drawer.Content>
      </Drawer>
    </>
  )
}
