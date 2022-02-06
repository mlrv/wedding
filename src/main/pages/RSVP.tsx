import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Text,
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
import { fold, none, Option } from 'fp-ts/Option'
import { Logo } from '../logo/Logo'
import { useTranslation } from 'react-i18next'
import { Book } from './Book'
import { Party } from '../http/models'

export const RSVP = (props: { mobileView: boolean }) => {
  const Input = GInput as any // ???

  const navigate = useNavigate()
  const { t } = useTranslation()
  const modalLoading = useModal()
  const modalGuests = useModal()
  const [{ input, party }, setState] = useState({
    input: '',
    party: none as Option<Party>,
  })

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setState(prev => ({ ...prev, input: e.target.value.toUpperCase() }))

  const onSubmit = () => {
    modalLoading.setVisible(true)

    loadParNWithTimeout(() => findPartyByCode(input.toUpperCase()), 1500, 20000)
      .then(
        fold(
          () => navigate('/rsvp/error'),
          p => {
            setState(prev => ({ ...prev, party: p }))
            modalLoading.setVisible(false)
            modalGuests.setVisible(true)
          },
        ),
      )
      .catch(_ => navigate('rsvp/error'))
  }

  return (
    <>
      <Grid.Container
        style={{ alignItems: 'center', flexDirection: 'column' }}
        gap={0}
        justify="space-evenly"
        width="100%"
      >
        <Grid xs={24}>
          <Logo width={35} />
        </Grid>
        <Grid xs={24}>
          <Text
            font="20px"
            className="font-standard"
            style={{ textAlign: 'center' }}
          >
            {t('rsvp_instructions')}
          </Text>
        </Grid>
        <Grid xs={24}>
          <Input scale={2.5} value={input} onChange={inputHandler} />
        </Grid>
        <Spacer h={1} />
        <Grid xs={24}>
          <Button disabled={input.length !== 4} onClick={onSubmit}>
            {t('rsvp_submit')}
          </Button>
        </Grid>
        <Spacer h={1} />
      </Grid.Container>

      <Modal
        {...modalLoading.bindings}
        disableBackdropClick={true}
        keyboard={false}
      >
        <Modal.Content>
          <Loader />
        </Modal.Content>
      </Modal>

      <Modal
        width="100vw"
        wrapClassName="rsvp-wrapper"
        {...modalGuests.bindings}
        keyboard={false}
      >
        <Modal.Content className="rsvp-card">
          <Book
            rsvp={{ type: 'asked', value: party }}
            mobileView={props.mobileView}
          />
        </Modal.Content>
      </Modal>
    </>
  )
}
