import Menu from '@geist-ui/react-icons/menu'

import { Drawer, Grid, Spacer, Text } from '@geist-ui/react'
import { useState } from 'react'
import { MobileDrawerContent } from './MobileDrawerContent'

export const MobileHeader = () => {
  const [state, setState] = useState(false)

  return (
    <Grid.Container style={{ alignItems: 'center' }} width="100%">
      <Menu onClick={() => setState(true)} />
      <Drawer
        visible={state}
        onContentClick={() => setState(false)}
        onClose={() => setState(false)}
        placement="left"
      >
        <Drawer.Content>
          <MobileDrawerContent />
        </Drawer.Content>
      </Drawer>
      <Spacer w={1.5} />
      <Grid style={{ alignSelf: 'flex-end' }}>
        <Text className="font-cursive" font="32px">
          Olivia & Marco
        </Text>
      </Grid>
    </Grid.Container>
  )
}
