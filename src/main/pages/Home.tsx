import { useEffect } from 'react'
import { Grid, Text } from '@geist-ui/react'
import { useTranslation } from 'react-i18next'

export const Home = (props: { mobileView: boolean }) => {
  useEffect(() => document.body.classList.add('with-background'))

  const { t } = useTranslation()

  return props.mobileView ? (
    <></>
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
        <Text className="olivia-and-marco no-vertical-margin" font="55px">
          Olivia & Marco
        </Text>
        <Text className="olivia-and-marco no-vertical-margin" font="30px">
          {t('eleventhJune')}
        </Text>
      </Grid>
    </Grid.Container>
  )
}
