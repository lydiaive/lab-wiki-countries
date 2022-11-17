import { Link } from "react-router-dom";
import { useEffect, useState } from "react";




function CountriesList(props) {
    console.log(props)
    /* const countryData = props.countryData
    const [countries, setCountries] = useState(countryData) */

    const [countries, setCountries] = useState([])

    useEffect(()=> {
        setCountries(props.countries)
    }, [])

  
    return (
      <div className="list-container">
      {countries && countries.map((country) => {
                return (
                    <Link key={(country.alpha3Code)}>
                        <p>{country.name.common}</p>
                    </Link>
                )
            })}
        
        
      </div>
    )
  }
  
  export default CountriesList;