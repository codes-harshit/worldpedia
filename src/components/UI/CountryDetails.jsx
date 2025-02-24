import React from "react";

function CountryDetails({ country }) {
  console.log(country);
  return (
    <div>
      <img
        src={country.flags.svg}
        alt={country.name.common}
        height={"500px"}
        width={"700px"}
      />
      {country.name.common}
    </div>
  );
}

export default CountryDetails;
