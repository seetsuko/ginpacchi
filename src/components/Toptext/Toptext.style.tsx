import styled, { css } from "styled-components";

type TextProps = {
  variant: "title" | "main"
  date: boolean
  text: string | null
}

export const ToptextContainer = styled.div<TextProps>`
  text-align: center;
  width: 100vw;
  margin-top: 50px;
  border-bottom: ${(props)=>(props.variant === "main" ? "none" : "1px solid #979797")};
  h1 {
    margin: 10px auto;
    width: 340px;
    font-size: 68px;
  }
  ${(props)=>{
    if(props.variant==="title"){
      return css`
      div{
        margin-top: 50px;
      }
      `
    }
  }}
  p {
    font-size: 30px;
    margin: 0;
  }
`


export const DateContainer = styled.div`
  p {
    color: #444;
    font-size: 30px;
  }
`