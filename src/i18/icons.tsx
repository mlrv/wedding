import 'flagpack/dist/flagpack.css'
import { Locale } from './i18n'

const Icon = (locale: Locale) => (
  <span className={`fp ${locale}`}></span>
)

export const Gb = () => Icon('gb')
export const It = () => Icon('it')
