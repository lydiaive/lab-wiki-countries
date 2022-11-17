import { Link, useParams } from "react-router-dom";


function CountryDetails(props) {

    const countries = props.countries
    const { countryCode } = useParams()

    const selectedCountry = countries.find((country)=> {
      return country.alpha3Code === countryCode
    })
  
    return (
        <div className="col-7">
            <h1>{selectedCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{selectedCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                  {selectedCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {selectedCountry.borders.map((border, index) => {
                      return (
                        <li key={index}><Link to={`/${border}`} >{border}</Link></li>
                      )
                    })
                    }
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    )
  }
  
  export default CountryDetails;