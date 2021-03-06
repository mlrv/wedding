import { Text } from '@geist-ui/react'
import { Link } from 'react-router-dom'

const rsvp = 'RSVP'

export const RSVP = () => {
  return (
    <Link to="/rsvp" className='header-link'>
      <Text font="25px">{rsvp.toUpperCase()}</Text>
    </Link>
  )
}
