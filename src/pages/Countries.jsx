import React, { useEffect, useState, useTransition } from "react";
import { countryData } from "../api/AxiosApi";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const res = await countryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <center className="heading">Loading....</center>;
  return (
    <>
      <center className="heading">List of All countries </center>
      <ul>
        {countries.map((country) => (
          <div>{country.name.common}</div>
        ))}
      </ul>
    </>
  );
};

export default Countries;
