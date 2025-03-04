import React, { useContext, useEffect, useState, useTransition } from "react";
import CountryCard from "../components/UI/CountryCard";
import SearchFilter from "../components/UI/SearchFilter";
import { countryContext } from "../store/countryStore";

const Countries = () => {
  const { countries, setCountries, isPending, filter, search } =
    useContext(countryContext);

  const searchCounry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  };

  const filterCountry = (country) => {
    if (filter !== "all") {
      return country.region === filter;
    }
    return true;
  };

  const filterCountries = countries.filter(
    (country) => searchCounry(country) && filterCountry(country)
  );

  if (isPending) return <center className="heading">Loading....</center>;
  return (
    <>
      <center className="heading">List of All countries</center>
      <SearchFilter />
      <ul className="selfContainerCard">
        {filterCountries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </ul>
    </>
  );
};

export default Countries;
