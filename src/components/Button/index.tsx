
import { ButtonWrapper } from "./Button.style"

type ButtonProps = {
  variant: "search"|"register"|"delete"
  large: any
  label: string | null 
}
const Button = ({
  variant="search", large=true, label=null, ...restProps
}:ButtonProps) => {
  return (
    <ButtonWrapper 
      variant={variant}
      large={large}
    >
      {label}
    </ButtonWrapper>
  );
}

export default Button;