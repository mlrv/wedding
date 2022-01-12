import Display from '@geist-ui/react-icons/display'
import Instagram from '@geist-ui/react-icons/instagram'

import { Grid, Link, Spacer, Text } from '@geist-ui/react'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export const ThankYou = () => {
  useEffect(() => document.body.classList.remove('with-background'))

  const { t } = useTranslation()

  return (
    <Grid.Container
      justify="center"
      style={{ alignItems: 'center', flexDirection: 'column' }}
    >
      <Grid xs={24}>
        <Text className="font-cursive" font="30px">
          Nora con la ENNE
        </Text>
      </Grid>

      <Grid xs={18} lg={8}>
        <Text
          className="font-standard newline"
          font="20px"
          style={{ textAlign: 'center' }}
        >
          {t('thank_you_content')}
        </Text>
      </Grid>
      <Spacer h={1}/>
      <Grid>
        <Grid.Container justify="center" style={{ alignItems: 'center' }}>
          <Display />
          <Spacer h={1} />
          <Text
            className="font-standard"
            style={{ marginBottom: 5, marginTop: 0 }}
          >
            <Link href="https://noragallia.com">noragallia.com</Link>
          </Text>
        </Grid.Container>
      </Grid>
      <Grid>
        <Grid.Container justify="center" style={{ alignItems: 'center' }}>
          <Display />
          <Spacer h={1} />
          <Text
            className="font-standard"
            style={{ marginBottom: 5, marginTop: 0 }}
          >
            <Link href="https://www.mariluweddingproject.it/">mariluweddingproject.it</Link>
          </Text>
        </Grid.Container>
      </Grid>
      <Grid>
        <Grid.Container justify="center" style={{ alignItems: 'center' }}>
          <Instagram />
          <Spacer h={1} />
          <Text
            className="font-standard"
            style={{ marginBottom: 5, marginTop: 0 }}
          >
            <Link href="https://www.instagram.com/noraconlaenne">noraconlaenne</Link>
          </Text>
        </Grid.Container>
      </Grid>
    </Grid.Container>
  )
}
