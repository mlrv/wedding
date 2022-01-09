import { useEffect } from "react"

export const Photos = () => {

  useEffect(
    () => document.body.classList.remove('with-background')
  )

  return (
    <>
      Photos
    </>
  )
}