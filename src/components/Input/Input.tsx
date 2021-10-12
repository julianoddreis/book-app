import React, { InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { layout, LayoutProps, space, SpaceProps } from 'styled-system'

interface InputProps
  extends SpaceProps,
    LayoutProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'width' | 'height'> {
  icon?: React.ReactNode
}

const Input: React.FC<InputProps> = (props) => {
  const { icon, name, value, onChange, placeholder, autoFocus, ...rest } = props

  return (
    <Container width='100%' {...rest}>
      {icon && <Icon>{icon}</Icon>}
      <StyledInput
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        pl={!!icon ? 40 : 16}
        autoFocus={autoFocus}
      />
    </Container>
  )
}

const Container = styled.div<SpaceProps & LayoutProps>`
  position: relative;
  ${space}
  ${layout}
`

const Icon = styled.span`
  position: absolute;
  left: 16px;
  top: 16px;
`

const StyledInput = styled.input<SpaceProps>`
  height: 48px;
  width: 100%;
  padding: 0 16px;
  border: none;
  outline: none;
  border-radius: 10px;
  ${({ theme: { colors } }) => css`
    color: ${colors.black};
    background: ${colors.white};
    ::placeholder {
      color: ${colors.grey};
    }
  `}
  ${space}
`

export default Input
