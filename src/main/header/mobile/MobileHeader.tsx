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
        justify="flex-start"
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
        justify="flex-end"
        width="95%"
      >
        <Grid>
          <Text className="olivia-and-marco" font="40px">
            Olivia & Marco
          </Text>
        </Grid>
      </Grid.Container>
    </Grid.Container>
  )
}
