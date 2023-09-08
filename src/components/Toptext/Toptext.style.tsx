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
  margin-top: 5vh;
  h1 {
    margin: 1vh auto;
    font-size: ${(props) => (props.variant === 'main' ? '2rem' : '1.5rem')};
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
    font-size: 1.5rem;
  }
`

export const DateContainer = styled.div`
  p {
    color: #444;
    font-size: 1.6rem;
  }
`
