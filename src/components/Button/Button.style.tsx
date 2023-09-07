import isPropValid from '@emotion/is-prop-valid'
import styled, { css } from 'styled-components'

type ButtonProps = {
  variant: 'other' | 'register' | 'delete'
  size: 'large' | 'medium' | 'small'
  onClick?: () => void
}

export const ButtonWrapper = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    isPropValid(prop) && !['variant', 'size', 'label', 'onClick'].includes(prop),
})<ButtonProps>`
  color: #fff;
  display: inline-block;
  font-size: 1.3rem;
  border: none;
  border-radius: 3px;
  height: 50px;
  width: ${(props) => {
    switch (props.size) {
      case 'large':
        return '200px'
      case 'medium':
        return '150px'
      case 'small':
        return '80px'
      default:
        return '200px'
    }
  }};
  ${(props) => {
    if (props.variant === 'other') {
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
