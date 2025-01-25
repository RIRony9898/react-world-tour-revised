import { useState, useEffect } from "react";
import Country from "../Country/Country";
import "./Countries.css";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [handleVisitedCountries, setHandleVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    setHandleVisitedCountries([...handleVisitedCountries, country]);
  }
  return (
    <div>
      <h2>Countries: {countries.length}</h2>
      <div>
        <h4>Visited Countries: {handleVisitedCountries.length}</h4>

        <ul>
            {handleVisitedCountries.map(country => <li>{country.name.common}</li>)}
        </ul>
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country key={country.cca3} country={country} handleVisitedCountry={handleVisitedCountry}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
