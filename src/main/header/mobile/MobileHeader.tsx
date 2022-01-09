import Menu from '@geist-ui/react-icons/menu'

import { Drawer, Grid, Text } from '@geist-ui/react'
import { useState } from 'react'
import { MobileDrawerContent } from './MobileDrawerContent'

export const MobileHeader = () => {
  const [state, setState] = useState(false)

  return (
    <Grid.Container
      style={{ alignItems: 'center' }}
      gap={1}
      justify="space-evenly"
      width="100%"
    >
      <Grid.Container
        style={{ alignItems: 'center' }}
        gap={1}
        justify="space-evenly"
        width="10%"
      >
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
      </Grid.Container>
      <Grid.Container
        style={{ alignItems: 'center' }}
        gap={1}
        justify="space-evenly"
        width="90%"
      >
        <Grid>
          <Text font="30px">Olivia & Marco</Text>
        </Grid>
      </Grid.Container>
    </Grid.Container>
  )
}
