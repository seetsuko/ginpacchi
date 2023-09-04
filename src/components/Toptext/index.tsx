import dayjs from 'dayjs'
import { ToptextContainer,DateContainer } from './Toptext.style'

type TextProps = {
  variant: "title" | "main"
  date: boolean
  text: string | null
}

const Toptext = ({ variant = "main", date=true, text=null, ...restProps }: TextProps) => {
  
  const now = dayjs().toString()
  
  return (
    <ToptextContainer variant={variant} date={date} text={text}  {...restProps}>
      {date &&
      <DateContainer>
        <p suppressHydrationWarning={true}>{now}</p>
      </DateContainer>
      }
      <div>
      {variant === "main"?
        <h1>{text}</h1>
        :<p>{text}</p>
    }
      </div>
    </ToptextContainer>
  )
}

export default Toptext