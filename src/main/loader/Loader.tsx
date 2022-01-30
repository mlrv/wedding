import { Grid } from '@geist-ui/react'

export const Loader = () => {
  return (
    <Grid.Container
      style={{ alignItems: 'center' }}
      gap={0}
      justify="space-evenly"
      width="100%"
    >
      <div className="lds-heart">
        <div></div>
      </div>
    </Grid.Container>
  )
}
