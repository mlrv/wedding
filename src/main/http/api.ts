import { pipe } from 'fp-ts/function'
import { fromEither, map, none, Option } from 'fp-ts/Option'
import { TParty } from './decoders'
import { Party } from './models'

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

export const putPartyByCode = 1
