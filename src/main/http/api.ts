import { constVoid, pipe } from 'fp-ts/function'
import { Either, right, map as mapE, fold, left } from 'fp-ts/Either'
import { fromEither, map, none, Option } from 'fp-ts/Option'
import { Party as TParty, ConfirmedGuestList } from './decoders'
import { Party } from './models'
import { Locale } from '../../i18/i18n'

const urlBase = 'https://mlrv-wedding-api.herokuapp.com'
const rsvpRoute = '/rsvp'
const url = `${urlBase}${rsvpRoute}`

export const findPartyByCode = (c: string): Promise<Option<Party>> => {
  return fetch(`${url}/${c}`)
    .then(r => r.json())
    .then((r: unknown) =>
      pipe(
        TParty.decode(r),
        fromEither,
        map(p => ({ code: c, ...p })),
      ),
    )
    .catch(_ => none)
}

export const putPartyByCode = (
  c: string,
  locale: Locale,
  update: Partial<Party>,
): Promise<Either<string, void>> => {
  const allGuestsConfirmed =
    'guests' in update
      ? pipe(ConfirmedGuestList.decode(update.guests), mapE(constVoid))
      : right(constVoid())

  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      locale,
      update,
    }),
  }

  const makeRequest = (): Promise<Either<string, void>> =>
    fetch(`${url}/${c}?email=true`, options)
      .then(r =>
        r.status === 200 ? right(constVoid()) : left('Unexpected error'),
      )
      .catch(err => left(String(err)))

  return fold(
    decodeErr => Promise.resolve(left(String(decodeErr))),
    makeRequest,
  )(allGuestsConfirmed)
}
