import React, { useState } from 'react'
import { Text, Select, Grid, Spacer, Input as GInput } from '@geist-ui/react'
import { constVoid, pipe } from 'fp-ts/function'
import { Guest, Diet } from '../http/models'

export const GuestInputMobile = (props: {
  guest: Guest
  updateGuest: (guestName: string, update: Partial<Guest>) => void
}) => {
  const Input = GInput as any // ???

  const [guest, setGuest] = useState(props.guest)

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
      style={{ alignItems: 'center', flexDirection: 'column' }}
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
        <Text>{props.guest.name}</Text>
        <Select
          scale={1.5}
          style={{ paddingLeft: 10 }}
          placeholder="RSVP"
          initialValue={'coming' in guest ? JSON.stringify(guest.coming) : ''}
          width={20}
          onChange={onRSVPUpdate}
        >
          <Select.Option value="true">
            <Text font="16px" className="text-standard">
              Yes, I can make it
            </Text>
          </Select.Option>
          <Select.Option value="false">
            <Text font="16px" className="text-standard">
              No, I can't make it
            </Text>
          </Select.Option>
        </Select>
        <Spacer h={1} />
        <Select
          scale={1.5}
          style={{
            paddingLeft: 10,
          }}
          placeholder="Food choice"
          initialValue={
            'diet' in guest && isValidDiet(guest.diet) ? guest.diet : ''
          }
          width={20}
          onChange={onFoodChoiceUpdate}
          disabled={!isEditable()}
        >
          <Select.Option value="omnivore">
            <Text font="16px" className="text-standard">
              Omnivore
            </Text>
          </Select.Option>
          <Select.Option value="vegetarian">
            <Text font="16px" className="text-standard">
              Vegetarian
            </Text>
          </Select.Option>
          <Select.Option value="pescatarian">
            <Text font="16px" className="text-standard">
              Pescatarian
            </Text>
          </Select.Option>
          <Select.Option value="vegan">
            <Text font="16px" className="text-standard">
              Vegan
            </Text>
          </Select.Option>
        </Select>
        <Spacer h={1} />
        <Input
          scale={1.5}
          placeholder="Dietary requirements / comments"
          width={18}
          value={'comments' in guest && isEditable() ? guest.comments : ''}
          onChange={onCommentsUpdate}
          disabled={!isEditable()}
        />
      </Grid>
    </Grid.Container>
  )
}
