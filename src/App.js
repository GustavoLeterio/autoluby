import Router from './routes/Router';
import { useLocation } from 'react-router-dom'
import Header from "./components/Header";
import { GlobalStyles } from './GlobalStyles.style'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

function App() {

  const navigate = useNavigate();
  let pathName = useLocation().pathname;

  useEffect(() => {
    if (pathName === "/") navigate("/login");
  })

  
  return (
    <>
      <GlobalStyles />
      <Header mod={pathName} />
      <Router />
    </>
  );
}

export default App;
