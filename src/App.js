import './App.css';
import countryData from './countries.json'
import {Routes, Route, Router} from "react-router-dom"
import { useEffect, useState } from "react";
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';


function App() {

  return (
    <div className="App">
      <Navbar/>
      <CountriesList countries={countryData}/>

    </div>
  );
}

export default App;
