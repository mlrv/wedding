import { Spacer } from '@geist-ui/react'
import { useEffect } from 'react'
import { Ganci } from '../locations/ganci/Ganci'
import { Meridiana } from '../locations/meridiana/Meridiana'

export const Information = (props: { mobileView: boolean }) => {
  useEffect(() => document.body.classList.remove('with-background'))

  return (
    <>
      <Meridiana />
      <Spacer h={3} />
      <Ganci mobileView={props.mobileView} />
      <Spacer h={3} />
    </>
  )
}
