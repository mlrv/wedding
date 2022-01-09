import { Grid } from '@geist-ui/react'
import { SelectI18N } from '../../../i18/select'
import { Gifts } from '../links/Gifts'
import { Home } from '../links/Home'
import { RSVP } from '../links/RSVP'
import { WhenWhere } from '../links/WhenWhere'

export const DesktopSubHeader = () => {
  return (
    <Grid.Container
      style={{ alignItems: 'center' }}
      gap={1}
      justify="space-evenly"
      width="100%"
    >
      <Grid.Container gap={1} justify="space-evenly" width="90%">
        <Grid xs={3}>
          <Home />
        </Grid>
        <Grid xs={3}>
          <RSVP />
        </Grid>
        <Grid xs={3}>
          <WhenWhere />
        </Grid>
        <Grid xs={3}>
          <Gifts />
        </Grid>
      </Grid.Container>

      <Grid.Container gap={1} justify="space-evenly" width="5%">
        <Grid style={{display: 'flex'}}>
          <SelectI18N />
        </Grid>
      </Grid.Container>
    </Grid.Container>
  )
}
