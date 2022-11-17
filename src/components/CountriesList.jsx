import { Link } from "react-router-dom";
import { useEffect, useState } from "react";




function CountriesList(props) {
    /* const countryData = props.countryData
    const [countries, setCountries] = useState(countryData) */

    const [countries, setCountries] = useState([])

    useEffect(()=> {
        setCountries(props.countries)
    }, [])

  
    return (
      <div className="list-groups">
      {countries && countries.map((country) => {
                return (
                    <div key={(country.alpha3Code)} className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
                        <Link to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action">
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="Country Flag"/>
                            <p>{country.name.common}</p>
                        </Link>
                    </div>
                )
            })}
        
        
      </div>
    )
  }
  
  export default CountriesList;