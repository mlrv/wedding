import { Text } from '@geist-ui/react'
import { Link } from 'react-router-dom'

const home = 'Home'

export const Home = () => {
  return (
    <Link to="/" className='header-link'>
      <Text font="25px">{home.toUpperCase()}</Text>
    </Link>
  )
}
