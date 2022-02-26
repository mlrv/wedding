import { Grid, Link, Spacer, Text, Image } from '@geist-ui/react'
import { useTranslation } from 'react-i18next'

import hawaii from '../../resources/hawaii.jpg'
import monument from '../../resources/monument.jpg'
import plane from '../../resources/plane.png'

export const Gifts = (props: { mobileView: boolean }) => {
  const { t } = useTranslation()

  return (
    <Grid.Container
      justify="center"
      style={{ alignItems: 'center', flexDirection: 'column' }}
    >
      <Grid xs={18} lg={8}>
        <Text
          className="font-standard newline"
          font="20px"
          style={{ textAlign: 'center' }}
        >
          {t('gifts_content')}
        </Text>
      </Grid>
      <Grid>
        <Spacer h={1} />
        <Image src={plane} />
      </Grid>
      <Grid>
        <Grid.Container justify="center" style={{ alignItems: 'center' }}>
          <Spacer h={1} />
          <Text
            className="font-standard"
            style={{ marginBottom: 20, marginTop: 0 }}
            font="30px"
          >
            <Link
              color
              underline
              href="https://www.ilmondocapovoltoviaggi.it/liste-nozze/lista-nozze/M1JCdXZLbGJ0ZVNxTTIwY2ZzOS9sZz09"
            >
              {t('gifts_link')}
            </Link>
          </Text>
          <Text
            className="font-standard"
            style={{ textAlign: 'center', marginTop: 0 }}
            font="13px"
          >
            {t('gifts_translate')}
          </Text>
          <Spacer h={3} />
        </Grid.Container>
      </Grid>
      <Grid xs={24} lg={10}>
        <Image
          className={
            props.mobileView
              ? 'shadow-red-top-left-mobile'
              : 'shadow-red-top-left-desktop'
          }
          src={monument}
        ></Image>
      </Grid>
      <Grid>
        <Spacer h={3} />
      </Grid>
      <Grid xs={24} lg={10}>
        <Image
          className={
            props.mobileView
              ? 'shadow-blue-bottom-right-mobile'
              : 'shadow-blue-bottom-right-desktop'
          }
          src={hawaii}
        ></Image>
      </Grid>
    </Grid.Container>
  )
}
