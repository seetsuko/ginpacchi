import styled, { css } from "styled-components";

type InputProps = {
  variant: "textInput"|"contactTextarea"|"memoTextarea"
  placeholder: string
  label: string | null
}

export const InputContainer = styled.div<InputProps>`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  font-size: 20px;
  width: 75vw;
  input{
    width: 450px;
        height: 45px;
        margin: auto 0;
        border: 1px solid #CCCCCC;
        font-size: 16px;
        padding-left: 15px;
    }
  textarea{
    width: 450px;
    ${(props)=>{
    if(props.variant === "contactTextarea"){
      return css`
        margin: auto 0;
        border: 1px solid #CCCCCC;
        font-size: 16px;
        padding: 15px 7.7px;
        height: 260px;
      `
    }
    if(props.variant === "memoTextarea"){
      return css`
      margin: auto 0;
        border: 1px solid #CCCCCC;
        font-size: 16px;
        padding: 15px 7.7px;
        height: 160px;
      `
    }}
  }}
`