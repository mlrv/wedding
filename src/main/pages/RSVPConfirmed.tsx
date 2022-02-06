import { Grid, Link, Text } from '@geist-ui/react'
import { useTranslation } from 'react-i18next'

export const RSVPConfirmed = () => {
  const email = 'oliviaemarcowedding@email.com'
  const { t } = useTranslation()

  return (
    <Grid.Container style={{ alignItems: 'center', flexDirection: 'column' }}>
      <Grid xs={24}>
        <Text font="35px" className="font-standard">
          {t('thank_you')}
        </Text>
      </Grid>
      <Grid xs={24} lg={10}>
        <Text
          style={{ textAlign: 'center' }}
          className="font-standard"
          font="20px"
        >
          {t('rsvp_confirmed')}
        </Text>
      </Grid>
      <Grid>
        <Link href={`mailto:${email}`}>
          <Text className="no-vertical-margin" font="14px">
            {email}
          </Text>
        </Link>
      </Grid>
    </Grid.Container>
  )
}
