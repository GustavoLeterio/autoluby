// import Router from './routes/Router';
import { useLocation } from 'react-router-dom'
import Header from "./components/Header";
import { GlobalStyles } from './GlobalStyles.style'
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
      <GlobalStyles />
      <Header mod={useLocation().pathname} />
      {/* <Routes>
          <Route element={<Login />} path="/" exact />
          <Route element={<Login />} path="/myspace" exact />
        </Routes >
      </BrowserRouter> */}
    </>
  );
}

export default App;
