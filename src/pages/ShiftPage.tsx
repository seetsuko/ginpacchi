import dayjs from 'dayjs'
import { useState } from 'react'
import styled from 'styled-components'
import Button from '@/components/Button/Button'
import  ShiftTable  from '@/components/ShiftTable/ShiftTable '
import Toptext from '@/components/Toptext/TopText'

type EventData = {
  date: Date
  description: string
}

function CalendarSchedule() {
  const [selectedDate, setSelectedDate] = useState(dayjs())
  const [events, setEvents] = useState<EventData[]>([
    // シフトデータの例
    {
      date: new Date(),
      description: '12〜15',
    },
  ])

  const goToPreviousMonth = () => {
    setSelectedDate((prevDate) => prevDate.subtract(1, 'month'))
  }

  const goToNextMonth = () => {
    setSelectedDate((prevDate) => prevDate.add(1, 'month'))
  }

  const daysInMonth = selectedDate.daysInMonth()
  const daysArray = [...Array(daysInMonth).keys()].map((day) => day + 1)

  return (
    <ShiftPageContainer>
      <Toptext date={false} text='シフト表' variant='title' />
      <div>
        <Button label='前月' size='small' color='other' onClick={goToPreviousMonth} />
        <h3>{selectedDate.format('YYYY年M月')}</h3>
        <Button label='翌月' size='small' color='other' onClick={goToNextMonth} />
      </div>
      <ShiftTable selectedDate={selectedDate} daysArray={daysArray} events={events} />
    </ShiftPageContainer>
  )
}

export default CalendarSchedule

const ShiftPageContainer = styled.div`
  div {
    display: flex;
  }
  h3 {
    margin: 0 20px;
  }
`
