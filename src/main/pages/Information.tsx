import meridiana from '../../resources/meridiana.jpg'
import ganci from '../../resources/ganci.jpg'
import { Image, Grid, Text, Spacer, Link } from '@geist-ui/react'

export const Information = () => {
  return (
    <Grid.Container
      style={{ alignItems: 'center', flexDirection: 'column' }}
      gap={0}
      justify="space-evenly"
      width="100%"
    >
      <Grid xs={24} lg={6} xl={6}>
        <Text
          style={{ textAlign: 'center', marginBottom: 5 }}
          className="font-standard"
          font="20px"
        >
          Saremo felici di festeggiare insieme Sabato 11 Giugno 2022 alle ore
          16:30 presso
        </Text>
      </Grid>
      <Grid xs={24}>
        <Link href="https://g.page/palazzodellameridiana">
          <Text style={{ margin: 0 }} className="font-cursive" font="30px">
            Palazzo della Meridiana
          </Text>
        </Link>
      </Grid>
      <Grid xs={24}>
        <Link href="https://g.page/palazzodellameridiana">
          <Text style={{ margin: 0 }} className="font-standard" font="15px">
            Salita di S. Francesco - 16124 Genova
          </Text>
        </Link>
      </Grid>
      <Spacer h={4} />
      <Grid xs={24} lg={12}>
        <Image className="meridiana" src={meridiana}></Image>
      </Grid>
      <Spacer h={2} />
      <Grid xs={24}>
        <Text
          style={{ textAlign: 'center', marginBottom: 5, marginTop: 0 }}
          className="font-standard"
          font="20px"
        >
          I festeggiamenti continuerranno a partire dalle 18:30 presso
        </Text>
      </Grid>
      <Grid xs={24}>
        <Link href="https://goo.gl/maps/aT6Fr9Z98MkXGFYA8">
          <Text style={{ margin: 0 }} className="font-cursive" font="30px">
            Ganci Farm
          </Text>
        </Link>
      </Grid>
      <Grid xs={24}>
        <Link href="https://goo.gl/maps/aT6Fr9Z98MkXGFYA8">
          <Text style={{ margin: 0 }} className="font-standard" font="15px">
            Via Ganci - 17015 Celle Ligure
          </Text>
        </Link>
      </Grid>
      <Spacer h={2} />
      <Grid xs={24} lg={12}>
        <Image className="ganci" src={ganci}></Image>
      </Grid>
      <Spacer h={2} />
    </Grid.Container>
  )
}
