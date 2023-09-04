import styled, { css } from 'styled-components'

type InputProps = {
  variant: 'searchInput' | 'textInput' | 'contactTextarea' | 'memoTextarea'
  placeholder: string
  label: string | null
}

export const InputContainer = styled.div<InputProps>`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  font-size: 20px;
  width: 75vw;
  div {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 30px;
    left: 48px;
  }
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
          width: 250px;
          height: 70px;
          margin: auto 0;
          border: 1px solid #cccccc;
          font-size: 20px;
          padding-left: 65px;
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
