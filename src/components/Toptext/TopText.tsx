import dayjs from 'dayjs'
import { ToptextContainer, DateContainer } from './Toptext.style'

type TextProps = {
  variant: 'title' | 'main' | 'sub'
  date: boolean
  text: string | null
  dateText?: string
}

const now = dayjs().format('YYYY/ MM/ DD (ddd)')

const Toptext = ({
  variant = 'main',
  date = true,
  text = null,
  dateText = now,
  ...restProps
}: TextProps) => {
  return (
    <ToptextContainer variant={variant} date={date} text={text} {...restProps}>
      {date && (
        <DateContainer>
          <p suppressHydrationWarning={true}>{dateText}</p>
        </DateContainer>
      )}
      <div>{variant === 'title' ? <p>{text}</p> : <h1>{text}</h1>}</div>
    </ToptextContainer>
  )
}

export default Toptext
