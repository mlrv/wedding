import { useState } from 'react'
import { Grid, Input as GInput } from '@geist-ui/react'
import { Party } from '../http/models'
import { GuestInput } from './GuestInput'

export const Guests = (props: { party: Party }) => {
  const Input = GInput as any // ???

  const [state, setState] = useState(props.party.email)

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setState(e.target.value)

  return (
    <Grid.Container
      style={{ alignItems: 'center', flexDirection: 'column' }}
      gap={0}
      justify="space-evenly"
      width="100%"
    >
      <Grid xs={24}>
        <Input value={state} onChange={inputHandler} />
      </Grid>
      {props.party.guests.map(g => (
        <Grid xs={24}>
          <GuestInput guest={g} />
        </Grid>
      ))}
    </Grid.Container>
  )
}
