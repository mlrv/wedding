import { Grid } from '@geist-ui/react'
import { Gifts } from '../links/Gifts'
import { Home } from '../links/Home'
import { RSVP } from '../links/RSVP'
import { WhenWhere } from '../links/WhenWhere'

// TODO abstract away
export const DesktopHeader = () => {
  return (
    <Grid.Container gap={3} justify="center" width="100%" height="100px">
      <Grid xs={6}>
        <Home />
      </Grid>
      <Grid xs={6}>
        <RSVP />
      </Grid>
      <Grid xs={6}>
        <WhenWhere />
      </Grid>
      <Grid xs={6}>
        <Gifts />
      </Grid>
    </Grid.Container>
  )
}
