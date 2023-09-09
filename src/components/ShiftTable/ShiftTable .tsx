import { useQuery } from '@apollo/client'
import CalendarDay from './CalendarDay'
import { TableWrapper } from './ShiftTable.style'
import { GET_USER } from '@/queries'

type EventData = {
  date: Date
  description: string
}

const ShiftTable = ({ selectedDate, daysArray, events }: any) => {

  const { loading, error, data } = useQuery(GET_USER)

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error: {error.message}</p>
  const user = data.user

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
              <td>{index + 1}{user.staffName}</td>
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

export default ShiftTable
