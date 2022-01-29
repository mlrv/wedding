import { Text, Select, Grid } from '@geist-ui/react'
import { Guest } from '../http/models'

export const GuestInput = (props: { guest: Guest }) => {
  return (
    <Grid.Container
      style={{ alignItems: 'center', flexDirection: 'column' }}
      gap={0}
      justify="space-evenly"
      width="100%"
    >
      <Grid xs={24}>
        <Text>{props.guest.name}</Text>
      </Grid>
      <Grid xs={12}>
        <Select>
          <Select.Option value="1">Option 1</Select.Option>
          <Select.Option value="2">Option 2</Select.Option>
        </Select>
      </Grid>
      <Grid xs={12}>
        <Select>
          <Select.Option value="1">Option 1</Select.Option>
          <Select.Option value="2">Option 2</Select.Option>
        </Select>
      </Grid>
    </Grid.Container>
  )
}
