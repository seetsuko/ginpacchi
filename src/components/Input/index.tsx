import { InputContainer } from "./Input.style"

type InputProps = {
  variant: "textInput"|"contactTextarea"|"memoTextarea"
  placeholder: string
  label: string | null
}

const Input = ({
  variant="textInput", placeholder="テキストを入力", label=null, ...restProps
}:InputProps) => {
  return (
    <InputContainer
      variant={variant}
      placeholder={placeholder}
      label={label}
      {...restProps}
    >
      <p>{label}：</p>
      {variant === "textInput" ?
        <input type="text" placeholder={placeholder}/>
        : <textarea placeholder={placeholder}/>
      }
    </InputContainer>
  );
}

export default Input;