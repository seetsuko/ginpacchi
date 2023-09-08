import isPropValid from '@emotion/is-prop-valid'
import styled, { css } from 'styled-components'

type ButtonProps = {
  color: 'other' | 'register' | 'delete'
  size: 'large' | 'medium' | 'small'
  onClick?: () => void
}

export const ButtonWrapper = styled.button<ButtonProps>`
  cursor: pointer;
  color: #fff;
  display: inline-block;
  font-size: 1.2rem;
  border: none;
  border-radius: 3px;
  height: 40px;
  width: ${(props) => {
    switch (props.size) {
      case 'large':
        return '200px'
      case 'medium':
        return '150px'
      case 'small':
        return '60px'
      default:
        return '200px'
    }
  }};
  ${(props) => {
    if (props.color === 'other') {
      return css`
        background-color: #4597f5;
      `
    }
    if (props.color === 'register') {
      return css`
        background-color: #85d000;
      `
    }
    if (props.color === 'delete') {
      return css`
        background-color: #e0001a;
      `
    }
  }}
`
