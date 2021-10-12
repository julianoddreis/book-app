import { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
  space: [],
  colors: {
    primary: '#3F4043',
    secondary: '#4ABDF1',
    background: '#FFFCF9',
    grey: '#54565A',
    black: '#000',
    white: '#fff'
  }
}

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'SFProDisplay';
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

const Theme: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)

export default Theme
