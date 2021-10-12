import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    space: number[]
    colors: {
      primary: string
      secondary: string
      background: string
      grey: string
      black: string
      white: string
    }
  }
}
