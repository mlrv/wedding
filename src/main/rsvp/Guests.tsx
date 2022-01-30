import { useState } from 'react'
import { Button, Grid, Input as GInput, Spacer } from '@geist-ui/react'
import { Guest, Party } from '../http/models'
import { GuestInput } from './GuestInput'

export const Guests = (props: { mobileView: boolean; party: Party }) => {
  const Input = GInput as any // ???

  const [state, setState] = useState(props.party.email)

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setState(e.target.value)

  const onUpdateGuest = (guestName: string, update: Partial<Guest>) =>
    console.log(guestName, update)

  return (
    <Grid.Container
      style={{ alignItems: 'center', flexDirection: 'column' }}
      gap={0}
      justify="space-evenly"
      width="100%"
    >
      <Spacer h={2} />
      <Grid xs={24}>
        <Input
          width={props.mobileView ? null : 41}
          scale={1.5}
          value={state}
          onChange={inputHandler}
        />
      </Grid>
      <Spacer h={2} />
      {props.party.guests.map(g => (
        <>
          <Grid xs={24}>
            <GuestInput
              mobileView={props.mobileView}
              guest={g}
              updateGuest={onUpdateGuest}
            />
          </Grid>
          <Spacer h={2} />
        </>
      ))}
      <Spacer h={1} />
      <Grid xs={24}>
        <Button>Submit</Button>
      </Grid>
    </Grid.Container>
  )
}
