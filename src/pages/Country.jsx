import React, { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import { getCountryIndData } from "../api/AxiosApi";

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
  return <div>{params.id}</div>;
};

export default Country;
