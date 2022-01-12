import '../i18/i18n' // import for side effects
import detect from 'webp-avif-browsers-support-detection'
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import { Page } from './Page'
import { useEffect } from 'react'

export const App = () => {
  useEffect(() => detect())

  return (
    <GeistProvider>
      <CssBaseline />
      <Page />
    </GeistProvider>
  )
}
