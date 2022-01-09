import {  Grid } from '@geist-ui/react'
import { SelectI18N } from '../../../i18/select'
import { Gifts } from '../links/Gifts'
import { Home } from '../links/Home'
import { RSVP } from '../links/RSVP'
import { Information } from '../links/Information'

export const MobileDrawerContent = () => {
  return (
    <Grid.Container gap={3} justify="center" width="100%">
      <Grid xs={24}>
        <SelectI18N />
      </Grid>
      <Grid xs={24}>
        <Home />
      </Grid>
      <Grid xs={24}>
        <RSVP />
      </Grid>
      <Grid xs={24}>
        <Information />
      </Grid>
      <Grid xs={24}>
        <Gifts />
      </Grid>
    </Grid.Container>
  )
}
