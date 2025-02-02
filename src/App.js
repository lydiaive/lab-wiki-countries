import './App.css';
//import countryData from './countries.json'
import {Routes, Route} from "react-router-dom"
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import axios from "axios"
import React, { useState, useEffect } from "react"

const apiURL = "https://ih-countries-api.herokuapp.com/countries";

function App() {

  const [countries, setCountry] = useState([])

  useEffect(() => {
    const apiCAll = async () => {
      try {
        const res = await axios.get(apiURL)
        setCountry(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    apiCAll()
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <div className="row">
        {countries && <CountriesList countries={countries}/>} 
          <Routes>
            <Route path="/:countryCode" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
