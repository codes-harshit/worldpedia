import React from "react";

function CountryDetails({ country }) {
  console.log(country);
  return (
    <div className="countryDataContainer">
      <img
        src={country.flags.svg}
        alt={country.name.common}
        height={"300px"}
        width={"500px"}
      />
      <div>
        <div className="heading">{country.name.common}</div>
        <div className="content">{`Capital: ${country.capital[0]}`}</div>
        <div>{`Region: ${country.region}`}</div>
        <div>{`Population: ${country.population.toLocaleString()}`}</div>
      </div>
    </div>
  );
}

export default CountryDetails;
