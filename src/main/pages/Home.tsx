import { useEffect } from 'react'
import { Grid, Spacer, Text } from '@geist-ui/react'
import { useTranslation } from 'react-i18next'

export const Home = (props: { mobileView: boolean }) => {
  useEffect(() => document.body.classList.add('with-background'))
  useEffect(() => () => document.body.classList.remove('with-background'), [])

  const { t } = useTranslation()

  return props.mobileView ? (
    <Grid.Container
      style={{ alignItems: 'center', flexDirection: 'column' }}
      gap={0}
      justify="space-evenly"
      width="100%"
    >
      <Text
        style={{ marginTop: '-20px', marginBottom: 0 }}
        className="font-cursive"
        font="35px"
      >
        {t('eleventh_june')}
      </Text>
    </Grid.Container>
  ) : (
    <Grid.Container
      style={{ alignItems: 'center', flexDirection: 'column' }}
      gap={0}
      justify="space-evenly"
      width="100%"
    >
      <Grid
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Spacer h={1} />
        <Text className="font-cursive no-vertical-margin" font="55px">
          Olivia & Marco
        </Text>
        <Text className="font-cursive no-vertical-margin" font="30px">
          {t('eleventh_june')}
        </Text>
      </Grid>
    </Grid.Container>
  )
}
