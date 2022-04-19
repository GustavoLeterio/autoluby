import Router from './routes/Router';
import { useLocation } from 'react-router-dom'
import Header from "./components/Header";
import { GlobalStyles } from './GlobalStyles.style'

function App() {
  return (
    <>
      <GlobalStyles />
      <Header mod={useLocation().pathname} />
      <Router />
    </>
  );
}

export default App;
