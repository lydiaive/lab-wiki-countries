import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react"
import axios from "axios";

function CountryDetails() {

    const { countryCode } = useParams()
    
    const [selectedCountry, setSelectedCountry] = useState(null)

    useEffect(() => {
      const apiCAll = async () => {
        try {
         const res = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryCode}`)
         setSelectedCountry(res.data)
        } catch (error) {
          console.log(error)
        }
      }

      apiCAll()
    }, [countryCode])

    return (
        <div className="col-7">
        {selectedCountry && (
          <div>
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
            )}
          </div>
    )
  }
  
  export default CountryDetails;