import RC, { CountdownRendererFn } from 'react-countdown'
import { Text } from '@geist-ui/react'
import { useTranslation } from 'react-i18next'

export const Countdown = () => {
  const { t } = useTranslation()

  const date = new Date('June 11, 2022 16:30')

  const renderer: CountdownRendererFn = ({
    days,
    hours,
    minutes,
    completed,
  }) => {
    if (completed) {
      return <></>
    } else {
      return (
        <Text className="font-standard">
          {[
            days,
            t('countdown_days'),
            hours,
            t('countdown_hours'),
            minutes,
            t('countdown_minutes'),
          ].join(' ')}
        </Text>
      )
    }
  }

  return (
    <>
      <RC date={date} renderer={renderer} />
    </>
  )
}
