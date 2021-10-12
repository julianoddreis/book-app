import React from 'react'
import styled, { keyframes } from 'styled-components'
import { space, SpaceProps } from 'styled-system'

interface LoaderProps extends SpaceProps {}

const Loader = (props: LoaderProps) => (
  <Container {...props}>
    <svg width='50' height='50' className='circular' viewBox='25 25 50 50'>
      <circle className='path' cx='50' cy='50' r='20' fill='none' stroke-width='2' stroke-miterlimit='10' />
    </svg>
  </Container>
)

const loaderAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`

const Container = styled.div`
  height: 50px;
  position: relative;
  animation: ${loaderAnimation} 1.5s infinite linear;
  display: flex;
  flex: 1;
  justify-content: center;

  .circular {
    stroke: #ffa700;
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  .path {
    stroke: #ffa700;
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
  }

  ${space}
`

export default Loader
