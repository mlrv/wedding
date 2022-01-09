import { useEffect } from "react"

export const ThankYou = () => {

  useEffect(
    () => document.body.classList.remove('with-background')
  )

  return (
    <>
      Thank You
    </>
  )
}