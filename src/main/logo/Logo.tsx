import logo from '../../resources/logo.png'
import { Display, Image } from '@geist-ui/react'

export const Logo = (props: { width: number }) => (
  <Display>
    <Image width={props.width} src={logo} />
  </Display>
)
