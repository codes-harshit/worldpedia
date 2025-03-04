import { createContext, useEffect, useState, useTransition } from "react";
import { countryData } from "../api/AxiosApi";

export const countryContext = createContext({
  countries: [],
  setCountries: () => {},
  search: "",
  setSearch: () => {},
  filter: "all",
  setFilter: () => {},
  isPending: false,
  startTransition: () => {},
});

const CountryContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const res = await countryData();
      setCountries(res.data);
    });
  }, []);
  return (
    <countryContext.Provider
      value={{
        countries,
        setCountries,
        isPending,
        search,
        setSearch,
        filter,
        setFilter,
      }}
    >
      {children}
    </countryContext.Provider>
  );
};

export default CountryContextProvider;
