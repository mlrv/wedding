import { useState } from 'react'
import { Grid, Input as GInput, Spacer } from '@geist-ui/react'
import { Party } from '../http/models'
import { GuestInput } from './GuestInput'

export const Guests = (props: { mobileView: boolean; party: Party }) => {
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
      <Spacer h={2} />
      <Grid xs={24}>
        <Input value={state} onChange={inputHandler} />
      </Grid>
      <Spacer h={1} />
      {props.party.guests.map(g => (
        <>
          <Grid xs={24}>
            <GuestInput mobileView={props.mobileView} guest={g} />
          </Grid>
          <Spacer h={2} />
        </>
      ))}
    </Grid.Container>
  )
}
