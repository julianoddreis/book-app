import React from 'react'
import styled from 'styled-components'
import {
  typography,
  space,
  layout,
  color,
  compose,
  TypographyProps,
  SpaceProps,
  LayoutProps,
  ColorProps
} from 'styled-system'

interface TextProps
  extends TypographyProps,
    SpaceProps,
    LayoutProps,
    ColorProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {}

const Text = styled.p<TextProps>`
  ${compose(typography, space, layout, color)}
`

Text.defaultProps = {
  color: 'primary'
}

export default Text
