import Menu from '@geist-ui/react-icons/menu'

import { Drawer, Grid, Spacer, Text } from '@geist-ui/react'
import { useState } from 'react'
import { MobileDrawerContent } from './MobileDrawerContent'

export const MobileHeader = () => {
  const [state, setState] = useState(false)

  return (
    <>
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

      <Grid.Container
        style={{ alignItems: 'center', flexDirection: 'column' }}
        gap={0}
        justify="space-evenly"
        width="100%"
      >
        <Grid xs={24}>
          <Grid.Container style={{ alignItems: 'center' }} width="100%">
            <Grid>
              <Menu onClick={() => setState(true)} />
            </Grid>
            <Grid>
              <Spacer h={2} />
            </Grid>
            <Grid>
              <Text
                onClick={() => setState(true)}
                className="font-cursive"
                font="32px"
              >
                Olivia & Marco
              </Text>
            </Grid>
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </>
  )
}
