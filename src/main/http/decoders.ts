import * as D from 'io-ts/Decoder'
import { pipe } from 'fp-ts/function'

const Diet = D.union(
  D.literal('omnivore'),
  D.literal('pescatarian'),
  D.literal('vegetarian'),
  D.literal('vegan'),
)

const Comments = D.partial({
  comments: D.string,
})

const UnconfirmedGuest = D.struct({
  name: D.string,
})

const ConfirmedGuestComing = pipe(
  D.struct({
    coming: D.literal(true),
    diet: Diet,
  }),
  D.intersect(Comments),
  D.intersect(UnconfirmedGuest),
)

const ConfirmedGuestNotComing = pipe(
  D.struct({
    coming: D.literal(false),
  }),
  D.intersect(UnconfirmedGuest),
)

export const ConfirmedGuest = D.union(ConfirmedGuestComing, ConfirmedGuestNotComing)
export const ConfirmedGuestList = D.array(ConfirmedGuest)

export const Guest = D.union(ConfirmedGuest, UnconfirmedGuest)

export const Party = D.struct({
  email: D.string,
  guests: D.array(Guest),
})
