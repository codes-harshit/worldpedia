import React from "react";

const FactCard = ({ country }) => {
  return (
    <div class="card factcard" style={{ width: "18rem" }}>
      <div class="card-body">
        <h5 class="card-title">{country.countryName}</h5>
        <p class="card-text">{country.interestingFact}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <span className="bold">Capital:</span> {country.capital}
        </li>
        <li class="list-group-item">
          <span className="bold">Population: </span>
          {Number(country.population).toLocaleString("en-US")}
        </li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">
          Know More
        </a>
      </div>
    </div>
  );
};

export default FactCard;
