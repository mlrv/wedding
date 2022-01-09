import { Grid, Text, Spacer } from '@geist-ui/react'
import { GanciImage } from './GanciImage'
import { GanciText } from './GanciText'

export const Ganci = (props: { mobileView: boolean }) => {
  return (
    <Grid.Container
      style={{ alignItems: 'center', flexDirection: 'column' }}
      gap={0}
      justify="space-evenly"
      width="100%"
    >
      <Grid xs={24}>
        <Text style={{ marginTop: 10 }} className="font-cursive" font="35px">
          Ganci Farm
        </Text>
      </Grid>
      <Grid.Container
        style={{ alignItems: 'center' }}
        gap={4}
        justify="space-around"
        width="100%"
      >
        {props.mobileView ? (
          <>
            <GanciImage />
            <Spacer h={2} />
            <GanciText />
          </>
        ) : (
          <>
            <Spacer h={2} />
            <GanciText />
            <GanciImage />
          </>
        )}
      </Grid.Container>
    </Grid.Container>
  )
}
