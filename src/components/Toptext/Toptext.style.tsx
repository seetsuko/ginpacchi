import isPropValid from '@emotion/is-prop-valid'
import styled, { css } from 'styled-components'

type TextProps = {
  variant: 'title' | 'main' | 'sub'
  date: boolean
  text: string | null
}

export const ToptextContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop) && !['variant', 'date', 'text'].includes(prop),
})<TextProps>`
  text-align: center;
  width: 100vw;
  margin-top: 5vh;
  border-bottom: ${(props) => (props.variant === 'title' ? '1px solid #979797' : 'none')};
  h1 {
    margin: 1vh auto;
    font-size: ${(props) => (props.variant === 'main' ? '4rem' : '2.5rem')};
  }
  ${(props) => {
    if (props.variant !== 'main') {
      return css`
        div {
          margin-top: 5vh;
        }
      `
    }
  }}
  p {
    font-size: 1.7rem;
    margin-bottom: 1vh;
  }
`

export const DateContainer = styled.div`
  p {
    color: #444;
    font-size: 2rem;
  }
`
