import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaRegCheckCircle,
  FaRegTimesCircle,
} from 'react-icons/fa'
import { AlertVariant } from './Alert.constant'
import { AlertContainer, IconTextWrapper, IconWrapper, TextWrapper } from './Alert.style'

type AlertProps = {
  variant: string
  message: string | null
  noBorder: Boolean
}

const Alert = ({
  variant = AlertVariant.SUCCESS,
  message = null,
  noBorder = false,
  ...restProps
}: AlertProps) => {
  return (
    <AlertContainer variant={variant} message={message} noBorder={noBorder} {...restProps}>
      <IconTextWrapper>
        <IconWrapper>
          {variant === AlertVariant.SUCCESS && <FaCheckCircle />}
          {variant === AlertVariant.WARNING && <FaExclamationTriangle />}
          {variant === AlertVariant.ERROR && <FaRegCheckCircle />}
        </IconWrapper>
        <TextWrapper>
          <div className='message'>{message}</div>
        </TextWrapper>
      </IconTextWrapper>
    </AlertContainer>
  )
}

export default Alert
