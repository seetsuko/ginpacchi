'use client'

import { Dayjs } from 'dayjs'
import styled from 'styled-components'

type Props = {
  date: Dayjs
  mainText: string
}

export const DateAndMainText = ({ date, mainText }: Props) => {
  return (
    <DateAndTextStyle>
      <div>
        <p suppressHydrationWarning={true}>{date.toString()}</p>
      </div>
      <div>
        <h1>{mainText}</h1>
      </div>
    </DateAndTextStyle>
  )
}

const DateAndTextStyle = styled.div`
  text-align: center;
  width: 100vw;
  margin-top: 50px;
  h1 {
    margin: 10px auto;
    width: 340px;
    font-size: 68px;
  }
  p {
    color: #444;
    font-size: 30px;
  }
`
