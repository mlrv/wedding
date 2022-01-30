import { useState } from 'react'
import { Button, Grid, Input as GInput, Spacer } from '@geist-ui/react'
import { Guest, Party } from '../http/models'
import { GuestInput } from './GuestInput'
import { Option, map, chain } from 'fp-ts/Option'
import { findIndex, updateAt } from 'fp-ts/Array'
import { pipe } from 'fp-ts/function'

export const Guests = (props: { mobileView: boolean; party: Party }) => {
  const Input = GInput as any // ???

  const [party, setState] = useState(props.party)

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setState(prev => ({ ...prev, email: e.target.value }))

  const findGuestByName = (
    guestName: string,
  ): Option<{ index: number; guest: Guest }> =>
    pipe(
      findIndex((g: Guest) => g.name === guestName)(party.guests),
      map(index => ({ index, guest: party.guests[index] })),
    )

  const onUpdateGuest = (guestName: string, update: Partial<Guest>) =>
    pipe(
      findGuestByName(guestName),
      chain(({ index, guest }) =>
        updateAt(index, { ...guest, ...update })(party.guests),
      ),
      map(updatedGuests =>
        setState(prev => ({ ...prev, guests: updatedGuests })),
      ),
    )

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
          value={party.email}
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
