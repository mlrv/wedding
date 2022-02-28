import meridiana from '../../resources/meridiana.jpg'
import ganci from '../../resources/ganci.png'
import { Image, Grid, Text, Spacer, Link } from '@geist-ui/react'
import { useTranslation } from 'react-i18next'

export const Information = (props: { mobileView: boolean }) => {
  const { t } = useTranslation()

  return (
    <Grid.Container
      style={{ alignItems: 'center', flexDirection: 'column' }}
      gap={0}
      justify="space-evenly"
      width="100%"
    >
      <Grid xs={24} lg={6} xl={6}>
        <Text
          style={{ textAlign: 'center', marginBottom: 5 }}
          className="font-standard"
          font="20px"
        >
          {t('information_content_first')}
        </Text>
      </Grid>
      <Grid xs={24}>
        <Link href="https://g.page/palazzodellameridiana">
          <Text style={{ margin: 0 }} className="font-cursive" font="25px">
            Palazzo della Meridiana
          </Text>
        </Link>
      </Grid>
      <Grid xs={24}>
        <Link color underline href="https://g.page/palazzodellameridiana">
          <Text style={{ margin: 0 }} className="font-standard" font="15px">
            Salita di S. Francesco - 16124 Genova
          </Text>
        </Link>
      </Grid>
      <Spacer h={4} />
      <Grid xs={24} lg={12}>
        <Image
          className={
            props.mobileView
              ? 'shadow-red-top-left-mobile'
              : 'shadow-red-top-left-desktop'
          }
          src={meridiana}
        ></Image>
      </Grid>
      <Spacer h={2} />
      <Grid xs={24}>
        <Text
          style={{ textAlign: 'center', marginBottom: 5, marginTop: 0 }}
          className="font-standard"
          font="20px"
        >
          {t('information_content_second')}
        </Text>
      </Grid>
      <Grid xs={24}>
        <Link href="https://goo.gl/maps/aT6Fr9Z98MkXGFYA8">
          <Text style={{ margin: 0 }} className="font-cursive" font="25px">
            Ganci Farm
          </Text>
        </Link>
      </Grid>
      <Grid xs={24}>
        <Link color underline href="https://goo.gl/maps/aT6Fr9Z98MkXGFYA8">
          <Text style={{ margin: 0 }} className="font-standard" font="15px">
            Via Ganci - 17015 Celle Ligure
          </Text>
        </Link>
      </Grid>
      <Spacer h={2} />
      <Grid xs={24} lg={12}>
        <Image
          className={
            props.mobileView
              ? 'shadow-blue-bottom-right-mobile'
              : 'shadow-blue-bottom-right-desktop'
          }
          src={ganci}
        ></Image>
      </Grid>
      <Spacer h={2} />
      <Grid xs={24}>
        <Text className="font-cursive" font="35px" style={{ marginBottom: 10 }}>
          {t('information_schedule')}
        </Text>
      </Grid>
      <Grid xs={24}>
        <Text className="font-standard no-vertical-margin" font="18px">
          16:30 👩‍❤️‍👨
        </Text>
      </Grid>
      <Grid xs={24}>
        <Text i className="font-standard" font="18px" style={{ marginTop: 0 }}>
          {t('information_schedule_ceremony')}
        </Text>
      </Grid>
      <Grid xs={24}>
        <Text className="font-standard no-vertical-margin" font="18px">
          17:30 🚗
        </Text>
      </Grid>
      <Grid xs={24}>
        <Text i className="font-standard" font="18px" style={{ marginTop: 0 }}>
          {t('information_schedule_transfer')}
        </Text>
      </Grid>
      <Grid xs={24}>
        <Text className="font-standard no-vertical-margin" font="18px">
          18:30 🥂
        </Text>
      </Grid>
      <Grid xs={24}>
        <Text i className="font-standard" font="18px" style={{ marginTop: 0 }}>
          {t('information_schedule_party')}
        </Text>
      </Grid>
      <Grid xs={24}>
        <Text className="font-standard no-vertical-margin" font="18px">
          18:30 😋
        </Text>
      </Grid>
      <Grid xs={24}>
        <Text i className="font-standard" font="18px" style={{ marginTop: 0 }}>
          {t('information_schedule_dinner')}
        </Text>
      </Grid>
      <Grid xs={24}>
        <Text className="font-standard no-vertical-margin" font="18px">
          22:30 🧁
        </Text>
      </Grid>
      <Grid xs={24}>
        <Text i className="font-standard" font="18px" style={{ marginTop: 0 }}>
          {t('information_schedule_cake')}
        </Text>
      </Grid>
      <Grid xs={24}>
        <Text className="font-standard no-vertical-margin" font="18px">
          23:00 💃🏻
        </Text>
      </Grid>
      <Grid xs={24}>
        <Text i className="font-standard" font="18px" style={{ marginTop: 0 }}>
          {t('information_schedule_dance')}
        </Text>
      </Grid>
    </Grid.Container>
  )
}
