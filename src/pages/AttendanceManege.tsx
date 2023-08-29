'use client'

import dayjs from 'dayjs'
import { DateAndMainText } from '@/components/DateAndMainText'

const today = dayjs()
const staffName = 'tatata'

const AttendanceManege = () => {
  return (
      <DateAndMainText date={today} mainText={staffName} />
  )
}

export default AttendanceManege
