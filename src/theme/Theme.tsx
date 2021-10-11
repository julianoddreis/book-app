import { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
  spaces: [2, 4, 8, 16, 32, 64, 128],
  colors: {
    primary: '#3F4043',
    secondary: '#4ABDF1',
    background: '#F2F2F2',
    grey: '#54565A',
    black: '#000',
    white: '#fff'
  }
}

const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'SFProDisplay';
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

const Theme: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)

export default Theme
