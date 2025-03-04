import { createContext, useEffect, useState, useTransition } from "react";
import { countryData } from "../api/AxiosApi";

export const countryContext = createContext({
  countries: [],
  setCountries: () => {},
  isPending: false,
  startTransition: () => {},
});

const CountryContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const res = await countryData();
      setCountries(res.data);
    });
  }, []);
  return (
    <countryContext.Provider
      value={{ countries, setCountries, isPending, startTransition }}
    >
      {children}
    </countryContext.Provider>
  );
};

export default CountryContextProvider;
