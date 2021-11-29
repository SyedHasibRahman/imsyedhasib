import './App.css';
import Home from './Pages/HomePage/Home/Home';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import AboutMe from './Pages/HomePage/AboutMe/AboutMe';
import PageNotFound from './Pages/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="about" element={ <AboutMe /> } />
          <Route exact path="*" element={ <PageNotFound /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
