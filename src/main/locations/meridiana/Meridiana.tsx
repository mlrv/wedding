import meridiana from '../../../resources/meridiana.jpg'
import { Image, Grid, Text, Spacer } from '@geist-ui/react'

export const Meridiana = () => {
  return (
    <Grid.Container
      style={{ alignItems: 'center', flexDirection: 'column' }}
      gap={0}
      justify="space-evenly"
      width="100%"
    >
      <Grid xs={24}>
        <Text style={{ marginTop: 10 }} className="font-cursive" font="35px">
          Palazzo della Meridiana
        </Text>
      </Grid>
      <Spacer h={4} />
      <Grid.Container
        style={{ alignItems: 'center' }}
        gap={4}
        justify="space-around"
        width="100%"
      >
        <Grid xs={24} lg={12}>
          <Image className="meridiana" src={meridiana}></Image>
        </Grid>
        <Grid xs={24} lg={6}>
          <Text className="font-standard" font="20px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu
            vestibulum ligula, sed luctus metus. Nulla et quam ut ante semper
            blandit sed et augue. Aliquam iaculis, risus mollis dapibus
            interdum, urna justo ornare mauris, sit amet ullamcorper dolor felis
            vel turpis. Nam porttitor a erat ac commodo. Curabitur quis sagittis
            arcu. Fusce non finibus risus. Sed tincidunt mi nec libero eleifend
            viverra.
          </Text>
        </Grid>
      </Grid.Container>
    </Grid.Container>
  )
}
