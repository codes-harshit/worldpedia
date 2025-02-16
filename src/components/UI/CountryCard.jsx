import React from "react";
import { NavLink } from "react-router-dom";

const CountryCard = ({ country }) => {
  return (
    <div class="card factcard" style={{ width: "18rem" }}>
      <img src={country.flags.svg} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{country.name.common}</h5>
        <p class="card-text">{country.name.official}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <span className="bold">Capital: </span> {country.capital}
        </li>
        <li class="list-group-item">
          <span className="bold">Region: </span> {country.region}
        </li>
        <li class="list-group-item">
          <span className="bold">Population: </span> {country.population}
        </li>
      </ul>
      <div class="card-body">
        <NavLink to={`/countries/${country.name.common}`}>Know more</NavLink>
      </div>
    </div>
  );
};

export default CountryCard;
