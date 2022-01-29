import { Text, Select, Grid, Spacer, Input as GInput } from '@geist-ui/react'
import { useState } from 'react'
import { Guest } from '../http/models'

export const GuestInputMobile = (props: { guest: Guest }) => {
  const Input = GInput as any // ???

  const [state, setState] = useState('')

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setState(e.target.value)

  return (
    <Grid.Container
      style={{ alignItems: 'center', flexDirection: 'column' }}
      gap={0}
      justify="space-evenly"
      width="100%"
    >
      <Grid
        xs={24}
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Text>{props.guest.name}</Text>
        <Select width="100%">
          <Select.Option value="1">Option 1</Select.Option>
          <Select.Option value="2">Option 2</Select.Option>
        </Select>
        <Spacer h={1} />
        <Select width="100%">
          <Select.Option value="1">Option 1</Select.Option>
          <Select.Option value="2">Option 2</Select.Option>
        </Select>
        <Spacer h={1} />
        <Input width="100%" value={state} onChange={inputHandler} />
      </Grid>
    </Grid.Container>
  )
}
