'use client'

const AttendanceManegeStyle = styled.div``

import dayjs from 'dayjs'
import { styled } from 'styled-components'
import { DateAndMainText } from '@/components/DateAndMainText'

const today = dayjs()
const staffName = 'tatata'

const AttendanceManege = () => {
  return (
    <AttendanceManegeStyle>
      <DateAndMainText date={today} mainText={staffName} />
    </AttendanceManegeStyle>
  )
}

export default AttendanceManege
