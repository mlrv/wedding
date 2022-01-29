import React, { useEffect, useState } from 'react'
import { Input as GInput, Button, Grid, Spacer } from '@geist-ui/react'
import { RSVP as RSVPResult } from '../rsvp/RSVP'
import { findPartyByCode } from '../http/api'
import { RSVPState } from '../rsvp/types'

export const RSVP = () => {
  useEffect(() => document.body.classList.remove('with-background'))

  const Input = GInput as any // ???
  const initialPartyState = { type: 'initial' }

  const [state, setState] = useState({
    input: '',
    party: initialPartyState as RSVPState,
  })

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setState(prev => ({ ...prev, input: e.target.value.toUpperCase() }))

  const onSubmit = () =>
    findPartyByCode(state.input.toLowerCase()).then(p => {
      setState(prev => ({ ...prev, party: { type: 'asked', value: p } }))
    })

  return (
    <>
      <Grid.Container
        style={{ alignItems: 'center', flexDirection: 'column' }}
        gap={0}
        justify="space-evenly"
        width="100%"
      >
        <Spacer h={1} />
        <Grid xs={24}>
          <Input scale={2.5} value={state.input} onChange={inputHandler} />
        </Grid>
        <Spacer h={1} />
        <Grid xs={24}>
          <Button disabled={state.input.length !== 4} onClick={onSubmit}>
            Submit
          </Button>
        </Grid>
        <Spacer h={1} />
        <Grid xs={24}>
          <RSVPResult party={state.party} />
        </Grid>
      </Grid.Container>
    </>
  )
}
