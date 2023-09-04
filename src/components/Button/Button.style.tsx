import isPropValid from '@emotion/is-prop-valid'
import styled, { css } from 'styled-components'

type ButtonProps = {
  variant: 'search' | 'register' | 'delete'
  large: boolean
}

export const ButtonWrapper = styled.button.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop) && !['variant', 'large'].includes(prop),
})<ButtonProps>`
  color: #fff;
  display: inline-block;
  height: 70px;
  font-size: 35px;
  border: none;
  border-radius: 3px;
  width: ${(props) => (props.large ? '160px' : '120px')};
  ${(props) => {
    if (props.variant === 'search') {
      return css`
        background-color: #4597f5;
      `
    }
    if (props.variant === 'register') {
      return css`
        background-color: #85d000;
      `
    }
    if (props.variant === 'delete') {
      return css`
        background-color: #e0001a;
      `
    }
  }}
`
