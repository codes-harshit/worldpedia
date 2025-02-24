import React, { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import { getCountryIndData } from "../api/AxiosApi";
import CountryDetails from "../components/UI/CountryDetails";

const Country = () => {
  const params = useParams();
  const [country, setCountry] = useState();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(params.id);
      setCountry(res.data[0]);
    });
  }, []);
  console.log(country);

  if (isPending) return <h1>Loading...</h1>;
  return <> {country && <CountryDetails country={country} />}</>;
};

export default Country;
