import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input as GInput, Button, Grid, Spacer } from '@geist-ui/react'
import { findPartyByCode } from '../http/api'

export const RSVP = (props: { mobileView: boolean }) => {
  useEffect(() => document.body.classList.remove('with-background'))

  const navigate = useNavigate()

  const Input = GInput as any // ???

  const [state, setState] = useState('')

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setState(e.target.value.toUpperCase())

  const onSubmit = () =>
    findPartyByCode(state.toLowerCase()).then(p => {
      navigate(`./${state.toLowerCase()}`, {
        state: {
          rsvp: { type: 'asked', value: p },
          mobileView: props.mobileView,
        },
      })
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
          <Input scale={2.5} value={state} onChange={inputHandler} />
        </Grid>
        <Spacer h={1} />
        <Grid xs={24}>
          <Button disabled={state.length !== 4} onClick={onSubmit}>
            Submit
          </Button>
        </Grid>
        <Spacer h={1} />
      </Grid.Container>
    </>
  )
}
