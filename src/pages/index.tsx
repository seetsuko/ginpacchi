import dayjs from 'dayjs'
import Head from 'next/head'
import { DateAndMainText } from '../components/DateAndMainText'

export default function Home() {

  const today = dayjs()
  const costTotal = "12345"

  return (
    <>
      <Head>
        <title>Ginpacchi</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <DateAndMainText date={today} mainText={`￥　${costTotal}`}/>
      </main>
    </>
  )
}
