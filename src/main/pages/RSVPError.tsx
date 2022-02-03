import { Grid, Link, Spacer, Text } from '@geist-ui/react'
import { useTranslation } from 'react-i18next'

export const RSVPError = () => {
  const email = 'oliviaemarcowedding@email.com'
  const { t } = useTranslation()

  return (
    <Grid.Container
      style={{ alignItems: 'center', flexDirection: 'column' }}
    >
      <Grid xs={24}>
        <Text font="25px" className="font-standard">
          Oh no :(
        </Text>
      </Grid>
      <Spacer h={2} />
      <Grid xs={24} lg={10}>
        <Text
          style={{ textAlign: 'center' }}
          className="font-standard"
          font="20px"
        >
          {t('rsvp_error')}
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
