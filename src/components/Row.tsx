import React from 'react'
import styled from 'styled-components'
import {
  space,
  layout,
  color,
  border,
  position,
  flexbox,
  grid,
  shadow,
  compose,
  SpaceProps,
  LayoutProps,
  BorderProps,
  PositionProps,
  FlexboxProps,
  ColorProps,
  GridProps,
  ShadowProps
} from 'styled-system'

export interface RowProps
  extends SpaceProps,
    LayoutProps,
    BorderProps,
    PositionProps,
    FlexboxProps,
    ColorProps,
    GridProps,
    ShadowProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {}

const Row: React.FC<RowProps> = styled.div(
  { display: 'flex' },
  compose(space, layout, color, border, position, flexbox, grid, shadow)
)

export default Row
