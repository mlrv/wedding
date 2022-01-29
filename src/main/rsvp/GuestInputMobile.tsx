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
        <Select
          scale={1.5}
          style={{ paddingLeft: 10 }}
          placeholder="RSVP"
          width="100%"
        >
          <Select.Option value="1">
            <Text font="16px" className="text-standard">
              Option 1
            </Text>
          </Select.Option>
          <Select.Option value="2">
            <Text font="16px" className="text-standard">
              Option 2
            </Text>
          </Select.Option>
        </Select>
        <Spacer h={1} />
        <Select
          scale={1.5}
          style={{ paddingLeft: 10 }}
          placeholder="Food choice"
          width="100%"
        >
          <Select.Option value="1">
            <Text font="16px" className="text-standard">
              Option 1
            </Text>
          </Select.Option>
          <Select.Option value="2">
            <Text font="16px" className="text-standard">
              Option 2
            </Text>
          </Select.Option>
        </Select>
        <Spacer h={1} />
        <Input
          scale={1.5}
          placeholder="Dietary requirements / comments"
          width="100%"
          value={state}
          onChange={inputHandler}
        />
      </Grid>
    </Grid.Container>
  )
}
