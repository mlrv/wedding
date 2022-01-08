import * as React from 'react'
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { availableLanguages } from './i18n'

export const App = () => {
  const { t, i18n } = useTranslation()

  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('hello')}
          </a>
          <select
            defaultValue={i18n.language}
            onChange={e => i18n.changeLanguage(e.target.value)}
          >
            {availableLanguages.map(language => (
              <option key={language}>{language}</option>
            ))}
          </select>
        </header>
      </div>
    </ChakraProvider>
  )
}
