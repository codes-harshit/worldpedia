import React, { useEffect, useState, useTransition } from "react";
import { countryData } from "../api/AxiosApi";
import CountryCard from "../components/UI/CountryCard";
import SearchFilter from "../components/UI/SearchFilter";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const res = await countryData();
      setCountries(res.data);
    });
  }, []);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

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
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />
      <ul className="selfContainerCard">
        {filterCountries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </ul>
    </>
  );
};

export default Countries;
