import { Text, Select, Grid, Spacer, Input as GInput } from '@geist-ui/react'
import { useState } from 'react'
import { Guest } from '../http/models'

export const GuestInputDesktop = (props: { guest: Guest }) => {
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
        <Text className="font-standard">{props.guest.name}</Text>
        <Grid
          xs={24}
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <Select
            scale={1.5}
            style={{ paddingLeft: 10 }}
            placeholder="RSVP"
            width={20}
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
          <Spacer h={2} />
          <Select
            scale={1.5}
            style={{ paddingLeft: 10 }}
            placeholder="Food choice"
            width={20}
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
        </Grid>
        <Spacer h={2} />
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
