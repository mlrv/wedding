import { Grid, Text } from '@geist-ui/react'

export const MainHeader = () => {
  return (
    <Grid.Container
      style={{ alignItems: 'center' }}
      gap={1}
      justify="space-evenly"
      width="100%"
    >
      <Grid>
        <Text font="30px">Olivia & Marco</Text>
      </Grid>
    </Grid.Container>
  )
}
