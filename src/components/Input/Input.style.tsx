import isPropValid from '@emotion/is-prop-valid'
import styled, { css } from 'styled-components'

type InputProps = {
  variant: 'searchInput' | 'textInput' | 'contactTextarea' | 'memoTextarea'
  placeholder: string
  label: string | null
}

export const InputContainer = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    isPropValid(prop) && !['variant', 'placeholder', 'label'].includes(prop),
})<InputProps>`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  font-size: 20px;
  width: ${(props) => (props.variant !== 'searchInput' ? '75vw' : '40vw')};
  input {
    ${(props) => {
      if (props.variant === 'textInput') {
        return css`
          width: 450px;
          height: 45px;
          margin: auto 0;
          border: 1px solid #cccccc;
          font-size: 16px;
          padding-left: 15px;
        `
      }
      if (props.variant === 'searchInput') {
        return css`
          width: 300px;
          height: 70px;
          margin: auto 0;
          border: 1px solid #cccccc;
          font-size: 20px;
          padding-left: 15px;
          border-radius: 10px;
        `
      }
    }}
  }
  textarea {
    width: 450px;
    ${(props) => {
      if (props.variant === 'contactTextarea') {
        return css`
          margin: auto 0;
          border: 1px solid #cccccc;
          font-size: 16px;
          padding: 15px 7.7px;
          height: 260px;
        `
      }
      if (props.variant === 'memoTextarea') {
        return css`
          margin: auto 0;
          border: 1px solid #cccccc;
          font-size: 16px;
          padding: 15px 7.7px;
          height: 160px;
        `
      }
    }}
  }
`
