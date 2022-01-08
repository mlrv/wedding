import '../i18/i18n' // import for side effects
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import { Page } from './Page'

export const App = () => {
  return (
    <GeistProvider>
      <CssBaseline />
      <Page/>
    </GeistProvider>
  )
}
