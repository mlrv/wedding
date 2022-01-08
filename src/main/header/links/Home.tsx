import { Text } from '@geist-ui/react'
import { Link } from 'react-router-dom'

const home = 'Home'

// TODO extract styling
export const Home = () => {
  return (
    <Link to="/" className='header-link'>
      <Text font="30px">{home}</Text>
    </Link>
  )
}
