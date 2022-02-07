import { Grid, Text } from '@geist-ui/react'
import { useTranslation } from 'react-i18next'

export const NotFound = () => {
  const { t } = useTranslation()

  return (
    <Grid.Container
      style={{ alignItems: 'center' }}
      gap={0}
      justify="space-evenly"
      width="100%"
    >
      <Grid xs={24}>
        <Text
          className="font-standard newline"
          font="20px"
          style={{ textAlign: 'center' }}
        >
          {t('rsvp_not_found')}
        </Text>
      </Grid>
    </Grid.Container>
  )
}
