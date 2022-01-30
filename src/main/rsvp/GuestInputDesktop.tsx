import React, { useState } from 'react'
import { Text, Select, Grid, Spacer, Input as GInput } from '@geist-ui/react'
import { constVoid, pipe } from 'fp-ts/function'
import { Guest, Diet } from '../http/models'
import { none, some, Option, fold } from 'fp-ts/Option'

export const GuestInputDesktop = (props: {
  guest: Guest
  updateGuest: (guestName: string, update: Partial<Guest>) => void
}) => {
  const Input = GInput as any // ???

  const [isComing, setIsComing] = useState(none as Option<boolean>)

  const isValidDiet = (d: string): d is Diet =>
    ['omnivore', 'pescatarian', 'vegetarian', 'vegan'].includes(d)

  const onUpdate = (update: Partial<Guest>) =>
    props.updateGuest(props.guest.name, update)

  const onRSVPUpdate = (c: string | string[]) =>
    pipe(
      c === 'true',
      coming => pipe(onUpdate({ coming }), _ => coming),
      coming => setIsComing(some(coming)),
    )

  const onFoodChoiceUpdate = (c: string | string[]) => {
    const option = Array.isArray(c) ? c[0] : c
    return isValidDiet(option) ? onUpdate({ diet: option }) : constVoid()
  }

  const onCommentsUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {}

  const isVisible = () =>
    fold(
      () => 'visible' as const,
      (c: boolean) => (c ? 'visible' : 'hidden'),
    )(isComing)

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
        <Text className="font-standard">{props.guest.name}</Text>
        <Grid
          xs={24}
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <Select
            scale={1.5}
            style={{ paddingLeft: 10 }}
            placeholder="RSVP"
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
          <Spacer h={2} />
          <Select
            scale={1.5}
            style={{
              paddingLeft: 10,
              visibility: isVisible(),
            }}
            placeholder="Food choice"
            width={20}
            onChange={onFoodChoiceUpdate}
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
        </Grid>
        <Spacer h={2} />
        <Input
          scale={1.5}
          placeholder="Dietary requirements / comments"
          width="100%"
          value={'comments' in props.guest ? props.guest.comments : ''}
          onChange={onCommentsUpdate}
          style={{ visibility: isVisible() }}
        />
      </Grid>
    </Grid.Container>
  )
}
