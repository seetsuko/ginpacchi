import { ButtonWrapper } from './Button.style'

type ButtonProps = {
  variant: 'other' | 'register' | 'delete'
  size: 'large' | 'medium' | 'small'
  label: string | null
  onClick?: () => void
}

const Button = ({
  variant = 'other',
  size = 'medium',
  label = null,
  ...restProps
}: ButtonProps) => {
  return (
    <ButtonWrapper variant={variant} size={size} {...restProps}>
      {label}
    </ButtonWrapper>
  )
}

export default Button
