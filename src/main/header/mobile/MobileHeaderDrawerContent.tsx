import { Grid } from '@geist-ui/react'
import { Gifts } from '../links/Gifts'
import { Home } from '../links/Home'
import { RSVP } from '../links/RSVP'
import { WhenWhere } from '../links/WhenWhere'

// TODO abstract away
export const MobileHeaderDrawerContent = () => {
  return (
    <Grid.Container gap={3} justify="center" width="100%">
      <Grid xs={24}>
        <Home />
      </Grid>
      <Grid xs={24}>
        <RSVP />
      </Grid>
      <Grid xs={24}>
        <WhenWhere />
      </Grid>
      <Grid xs={24}>
        <Gifts />
      </Grid>
    </Grid.Container>
  )
}
