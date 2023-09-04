import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import About from "./components/About";

import { 
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";

function App() {
  

  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/about' element={<About/>}></Route>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
