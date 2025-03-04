import React, { useContext, useEffect, useState, useTransition } from "react";
import CountryCard from "../components/UI/CountryCard";
import SearchFilter from "../components/UI/SearchFilter";
import { countryContext } from "../store/countryStore";

const Countries = () => {
  const { isPending, filterCountries } = useContext(countryContext);

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
