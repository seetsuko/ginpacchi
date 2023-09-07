import dayjs from 'dayjs'
import { TableWrapper } from './ShiftTable.style'

type EventData = {
  date: Date
  description: string
}

export const ShitTable = ({ selectedDate, daysArray, events }: any) => {
  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            <th>日付</th>
            {daysArray.map((day: number) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {events.map((event: EventData, index: number) => (
            <tr key={index}>
              <td>{index + 1}長門せいな</td>
              {daysArray.map((day: number) => (
                <CalendarDay
                  key={day}
                  date={selectedDate.set('date', day).toDate()}
                  events={events}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  )
}

export const CalendarDay = ({ date, events }: { date: Date; events: EventData[] }) => {
  const currentDate = dayjs(date)

  return (
    <td>
      {/* 日付ごとのシフトを表示 */}
      {events
        .filter((event) => dayjs(event.date).isSame(currentDate, 'day'))
        .map((event) => (
          <div key={event.description}>{event.description}</div>
        ))}
    </td>
  )
}
