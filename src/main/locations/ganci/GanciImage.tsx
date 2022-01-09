import ganci from '../../../resources/ganci.jpg'
import { Image, Grid } from '@geist-ui/react'

export const GanciImage = () => {
  return (
    <Grid xs={24} lg={12}>
      <Image className="ganci" src={ganci}></Image>
    </Grid>
  )
}
