import dayjs from 'dayjs'

type EventData = {
  date: Date
  description: string
}

const CalendarDay = ({ date, events }: { date: Date; events: EventData[] }) => {
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

export default CalendarDay
