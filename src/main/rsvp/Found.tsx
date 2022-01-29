import { Text } from '@geist-ui/react'
import { Party } from '../http/models'

export const Found = (props: { party: Party }) => {
  return <Text>{props.party.guests.map(p => p.name).join(', ')}</Text>
}
