import { useEffect } from "react"

export const Gifts = () => {

  useEffect(
    () => document.body.classList.remove('with-background')
  )

  return (
    <>
      Gifts
    </>
  )
}