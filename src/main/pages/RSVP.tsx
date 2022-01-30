import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Input as GInput,
  Button,
  Grid,
  Spacer,
  Modal,
  useModal,
} from '@geist-ui/react'
import { findPartyByCode } from '../http/api'
import { loadParNWithTimeout } from '../loader/utils'
import { Loader } from '../loader/Loader'
import { fold } from 'fp-ts/Option'

export const RSVP = (props: { mobileView: boolean }) => {
  useEffect(() => document.body.classList.remove('with-background'))

  const Input = GInput as any // ???

  const navigate = useNavigate()
  const { setVisible, bindings } = useModal()
  const [state, setState] = useState('')

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setState(e.target.value.toUpperCase())

  const onSubmit = () => {
    setVisible(true)

    loadParNWithTimeout(() => findPartyByCode(state.toLowerCase()), 1500, 5000)
      .then(
        fold(
          () => navigate('/rsvp/error'),
          p => {
            navigate(`./${state.toLowerCase()}`, {
              state: {
                rsvp: { type: 'asked', value: p },
                mobileView: props.mobileView,
              },
            })
          },
        ),
      )
      .catch(_ => navigate('/rsvp/error'))
      .finally(() => setVisible(false))
  }

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

      <Modal {...bindings} disableBackdropClick={true} keyboard={false}>
        <Modal.Content>
          <Loader />
        </Modal.Content>
      </Modal>
    </>
  )
}
