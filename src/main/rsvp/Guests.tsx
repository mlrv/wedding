import { useState } from 'react'
import {
  Button,
  Grid,
  Input as GInput,
  Modal,
  Spacer,
  useModal,
} from '@geist-ui/react'
import { Guest, Party } from '../http/models'
import { GuestInput } from './GuestInput'
import { Option, map, chain, fold as foldO } from 'fp-ts/Option'
import { fold } from 'fp-ts/Either'
import { findIndex, updateAt } from 'fp-ts/Array'
import { pipe } from 'fp-ts/function'
import { ConfirmedGuestList } from '../http/decoders'
import { putPartyByCode } from '../http/api'
import { useNavigate } from 'react-router-dom'
import { Loader } from '../loader/Loader'
import { loadParNWithTimeout } from '../loader/utils'
import { useTranslation } from 'react-i18next'

export const Guests = (props: { mobileView: boolean; party: Party }) => {
  const Input = GInput as any // ???

  const [party, setState] = useState(props.party)
  const navigate = useNavigate()
  const { setVisible, bindings } = useModal()
  const { t } = useTranslation()

  const width = props.mobileView ? '55vw' : '70.5vw'

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

  const isSubmittable = () =>
    fold(
      _ => false,
      _ => true,
    )(ConfirmedGuestList.decode(party.guests))

  const onSubmit = () => {
    setVisible(true)

    loadParNWithTimeout(() => putPartyByCode(party.code, party), 1500, 20000)
      .then(
        foldO(
          () => navigate('/rsvp/error'),
          fold(
            _ => navigate('/rsvp/error'),
            _ => navigate('/rsvp/confirmed'),
          ),
        ),
      )
      .catch(_ => navigate('/rsvp/error'))
  }

  return (
    <>
      <Grid.Container
        style={{ alignItems: 'center', flexDirection: 'column' }}
        gap={0}
        justify="space-evenly"
        width="100%"
      >
        <Spacer h={2} />
        <Grid xs={24}>
          <Input
            className="rsvp-input font-standard"
            width={width}
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
          <Button disabled={!isSubmittable()} onClick={onSubmit}>
            {t('rsvp_submit')}
          </Button>
        </Grid>
        <Spacer h={2} />
      </Grid.Container>

      <Modal {...bindings} disableBackdropClick={true} keyboard={false}>
        <Modal.Content>
          <Loader />
        </Modal.Content>
      </Modal>
    </>
  )
}
