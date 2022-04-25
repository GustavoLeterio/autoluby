import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root {
  --primary-red: #F54A48;
  --hover-red: #DF3938;
  --stroke-pressed-red: #971212;
  --dark-gray: #3C3C3C;
  --gray: #7C7C7C;
  --light-gray: #A2A2A2;
  --input-border: #E6E6E6;
  --input-background:#F9F9F9;
  --confirmation: #34C38F;
  --error: #FA982F;
  --alert: #FAC12F;
}

* {
  font-weight: 600;
  letter-spacing: -0.03rem;
  line-height: 120%;
}
p,h1{
  margin:0;
}
img{
  user-drag: none;
}
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.link{
  text-decoration: none;
}
`