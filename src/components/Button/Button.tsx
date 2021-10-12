import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'
import { space, layout, SpaceProps, LayoutProps } from 'styled-system'

interface ButtonProps extends SpaceProps, LayoutProps, ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = styled.button<ButtonProps>`
  background: none;
  border: none;
  height: 40px;
  font-size: 18px;
  border: 1px solid grey;
  border-radius: 20px;
  ${space}
  ${layout}
`

export default Button
