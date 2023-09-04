import React, {useState} from 'react';
import Home from './Home.js';
import {Link} from 'react-router-dom'

const NavBar = () => {
  
  const [textInput, setTextInput] = useState("");
  const [textInput1, setTextInput1] = useState("Delhi");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setTextInput1(textInput)
    console.log("Submitted value:", textInput);
    // You can perform your search logic or any other action here
    setTextInput("")
  };


  const handleCitySelect = (city) => {
    setTextInput1(city);
  };

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">WeatherWeb</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                Favorites
              </a>
              <div className="dropdown-menu">
                <li><a className="dropdown-item" id="fav-1" href="#" onClick={() => handleCitySelect('Ahmedabad')}>Ahmedabad</a></li>
                <li><a className="dropdown-item" id="fav-2" href="#" onClick={() => handleCitySelect('Rajkot')}>Rajkot</a></li>
                <li><a className="dropdown-item" id="fav-3" href="#" onClick={() => handleCitySelect('Upleta')}>Upleta</a></li>
                <li><a className="dropdown-item" id="fav-4" href="#" onClick={() => handleCitySelect('Junagadh')}>Junagadh</a></li>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/help">Help</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={textInput} 
              onChange={(event) => setTextInput(event.target.value)}/>
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <Home city={textInput1}/>
    </>
  )
}

export default NavBar
