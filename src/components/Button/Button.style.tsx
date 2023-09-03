import styled, { css } from "styled-components";

type ButtonProps = {
  variant: string
  large: boolean
}

export const ButtonWrapper = styled.button<ButtonProps>`
  color: #fff;
  display: inline-block;
  height: 70px;
  font-size: 35px;
  border: none;
  border-radius: 3px;
  width: ${(props) => (props.large ? "160px" : "120px" )};
  ${(props) => {
    if(props.variant === "search"){
      return css`
        background-color: #4597F5;
      `
    }
    if(props.variant === "register"){
      return css`
        background-color: #85D000;
      `
    }
    if(props.variant === "delete"){
      return css`
        background-color: #E0001A;
      `
    }
  }}
`