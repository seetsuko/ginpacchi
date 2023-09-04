import { IconContext } from 'react-icons'
import { AiOutlineSearch } from 'react-icons/ai'
import { InputContainer } from './Input.style'

type InputProps = {
  variant: 'searchInput' | 'textInput' | 'contactTextarea' | 'memoTextarea'
  placeholder: string
  label: string | null
}

const Input = ({
  variant = 'textInput',
  placeholder = 'テキストを入力',
  label = null,
  ...restProps
}: InputProps) => {
  return (
    <InputContainer variant={variant} placeholder={placeholder} label={label} {...restProps}>
      {variant !== 'searchInput' && <p>{label}：</p>}
      {variant === 'textInput' || variant === 'searchInput' ? (
        <input type='text' placeholder={placeholder} />
      ) : (
        <textarea placeholder={placeholder} />
      )}
    </InputContainer>
  )
}

export default Input
