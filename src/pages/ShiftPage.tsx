import dayjs from 'dayjs'
import { useState } from 'react'
import Button from '@/components/Button'
import { ShitTable } from '@/components/ShiftTable'

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
    <div>
      <h1>シフト表</h1>
      <div>
        <Button label='翌月' size='small' variant='other' onClick={goToPreviousMonth} />
        <span>{selectedDate.format('YYYY年M月')}</span>
        <button onClick={goToNextMonth}>次月</button>
      </div>
      <ShitTable selectedDate={selectedDate} daysArray={daysArray} events={events} />
    </div>
  )
}

export default CalendarSchedule
