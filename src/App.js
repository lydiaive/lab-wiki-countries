import './App.css';
import countryData from './countries.json'
import {Routes, Route} from "react-router-dom"
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';



function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <div className="row">
          <CountriesList countries={countryData}/>
          <Routes>
            <Route path="/:countryCode" element={<CountryDetails countries={countryData} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
