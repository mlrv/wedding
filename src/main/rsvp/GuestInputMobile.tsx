import React, { useState } from 'react'
import { Text, Select, Grid, Spacer, Input as GInput } from '@geist-ui/react'
import { constVoid, pipe } from 'fp-ts/function'
import { Guest, Diet } from '../http/models'
import { useTranslation } from 'react-i18next'

export const GuestInputMobile = (props: {
  guest: Guest
  updateGuest: (guestName: string, update: Partial<Guest>) => void
}) => {

  const Input = GInput as any // ???

  const [guest, setGuest] = useState(props.guest)
  const { t } = useTranslation()

  const width = '55vw'

  const isValidDiet = (d: string): d is Diet =>
    ['omnivore', 'pescatarian', 'vegetarian', 'vegan'].includes(d)

  const onUpdate = (update: Partial<Guest>) =>
    props.updateGuest(props.guest.name, update)

  const onRSVPUpdate = (c: string | string[]) =>
    pipe(
      c === 'true',
      coming => pipe(onUpdate({ coming }), _ => coming),
      coming => setGuest(prev => ({ ...prev, coming: coming })),
    )

  const onFoodChoiceUpdate = (c: string | string[]) => {
    const option = Array.isArray(c) ? c[0] : c
    return isValidDiet(option) ? onUpdate({ diet: option }) : constVoid()
  }

  const onCommentsUpdate = (e: React.ChangeEvent<HTMLInputElement>) =>
    pipe(
      e.target.value,
      comments =>
        pipe(
          setGuest(prev => ({ ...prev, comments })),
          _ => comments,
        ),
      comments => onUpdate({ comments }),
    )

  const isEditable = () => ('coming' in guest ? guest.coming : true)

  return (
    <Grid.Container
      style={{ alignItems: 'center', flexDirection: 'column', flex: 1 }}
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
        <Text b font="25px" className="font-standard">
          {props.guest.name}
        </Text>
        <Spacer h={1} />
        <Select
          scale={1.5}
          style={{ paddingLeft: 10 }}
          placeholder="RSVP"
          initialValue={'coming' in guest ? JSON.stringify(guest.coming) : ''}
          width={width}
          onChange={onRSVPUpdate}
        >
          <Select.Option value="true">
            <Text font="16px" className="font-standard">
              {t('rsvp_coming_true')}
            </Text>
          </Select.Option>
          <Select.Option value="false">
            <Text font="16px" className="font-standard">
              {t('rsvp_coming_false')}
            </Text>
          </Select.Option>
        </Select>
        <Spacer h={1} />
        <Select
          scale={1.5}
          style={{
            paddingLeft: 10,
          }}
          placeholder={t('rsvp_diet')}
          initialValue={
            'diet' in guest && isValidDiet(guest.diet) ? guest.diet : ''
          }
          width={width}
          onChange={onFoodChoiceUpdate}
          disabled={!isEditable()}
        >
          <Select.Option value="omnivore">
            <Text font="16px" className="font-standard">
              {t('rsvp_diet_omnivore')}
            </Text>
          </Select.Option>
          <Select.Option value="vegetarian">
            <Text font="16px" className="font-standard">
              {t('rsvp_diet_vegetarian')}
            </Text>
          </Select.Option>
          <Select.Option value="pescatarian">
            <Text font="16px" className="font-standard">
              {t('rsvp_diet_pescatarian')}
            </Text>
          </Select.Option>
          <Select.Option value="vegan">
            <Text font="16px" className="font-standard">
              {t('rsvp_diet_vegan')}
            </Text>
          </Select.Option>
        </Select>
        <Spacer h={1} />
        <Input
          className="rsvp-input font-standard"
          scale={1.5}
          placeholder={t('rsvp_comments')}
          width={width}
          value={'comments' in guest ? guest.comments : ''}
          onChange={onCommentsUpdate}
        />
      </Grid>
    </Grid.Container>
  )
}
