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
  margin: 0 auto;
  justify-content: space-between;
  padding: 0 2vw;
  font-size: 1.4rem;
  width: ${(props) => (props.variant !== 'searchInput' ? '75vw' : '40vw')};
  input {
    ${(props) => {
      if (props.variant === 'textInput') {
        return css`
          width: 55vw;
          height: 5vh;
          margin: auto 0;
          border: 1px solid #cccccc;
          font-size: 1.4rem;
          padding-left: 1.5vw;
        `
      }
      if (props.variant === 'searchInput') {
        return css`
          width: 300px;
          height: 70px;
          margin: auto 0;
          border: 1px solid #cccccc;
          font-size: 30px;
          padding-left: 15px;
          border-radius: 10px;
        `
      }
    }}
  }
  textarea {
    width: 55vw;
    ${(props) => {
      if (props.variant === 'contactTextarea') {
        return css`
          margin: auto 0;
          border: 1px solid #cccccc;
          font-size: 1.2rem;
          padding: 1.2vh 1.5vw;
          height: 30vh;
        `
      }
      if (props.variant === 'memoTextarea') {
        return css`
          margin: auto 0;
          border: 1px solid #cccccc;
          font-size: 1.2rem;
          padding: 1.2vh 1.5vw;
          height: 20vh;
        `
      }
    }}
  }
`
