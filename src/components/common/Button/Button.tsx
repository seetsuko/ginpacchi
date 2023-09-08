import { ButtonWrapper } from './Button.style'

type ButtonProps = {
  color: 'other' | 'register' | 'delete'
  size: 'large' | 'medium' | 'small'
  label: string | null
  onClick?: () => void
  disabled?: boolean
}

const Button = ({ color = 'other', size = 'medium', label = null, ...restProps }: ButtonProps) => {
  return (
    <ButtonWrapper color={color} size={size} {...restProps}>
      {label}
    </ButtonWrapper>
  )
}

export default Button
