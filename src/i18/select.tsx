import { Select } from '@geist-ui/react'
import { Gb, It } from './icons'
import { useTranslation } from 'react-i18next'

export const SelectI18N = () => {
  const { i18n } = useTranslation()

  const handler = (e: string | string[]) => {
    i18n.changeLanguage(Array.isArray(e) ? e[0] : e)
  }

  return (
    <Select initialValue="it" pure onChange={handler}>
      <Select.Option value="it">
        <It />
      </Select.Option>
      <Select.Option value="gb">
        <Gb />
      </Select.Option>
    </Select>
  )
}
