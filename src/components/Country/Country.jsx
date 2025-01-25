import "./Country.css";
import { useState } from "react";

const Country = ({ country, handleVisitedCountry }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className={`country ${visited && "visited"}`}>
      <h3 style={{color: visited? 'purple' : 'black'}}>Name: {name?.common}</h3>
      <img src={flags?.png} alt={name?.common} />
      <p>Population: {population}</p>
      <p>Area: {area} km²</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={()=>handleVisitedCountry(country)}>Mark as visited</button>
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      <p>{visited? 'I have visited this country' : 'I want to visit this country'}</p>
    </div>
  );
};

export default Country;
