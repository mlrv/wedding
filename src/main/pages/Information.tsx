import { useEffect } from "react"

export const Information = () => {

  useEffect(
    () => document.body.classList.remove('with-background')
  )

  return (
    <>
      Information
    </>
  )
}