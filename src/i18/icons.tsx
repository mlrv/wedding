import 'flagpack/dist/flagpack.css'
import { resources } from './i18n'

const Icon = (locale: keyof typeof resources) => (
  <span className={`fp ${locale}`}></span>
)

export const Gb = () => Icon('gb')
export const It = () => Icon('it')
