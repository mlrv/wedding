import { Widget } from '@typeform/embed-react'
import { useEffect } from 'react'

export const RSVP = () => {

  useEffect(
    () => document.body.classList.remove('with-background')
  )

  return <Widget id="Ijmt5si7" style={{ height: '1000px' }} />
}
