import logo from '../../resources/logo.png'
import { Image } from '@geist-ui/react'

export const Logo = (props: { width: number }) => (
  <Image width={props.width} src={logo} />
)
