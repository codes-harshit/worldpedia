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
  filterCountries: [],
});

const CountryContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [isPending, startTransition] = useTransition();

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
        filterCountries,
      }}
    >
      {children}
    </countryContext.Provider>
  );
};

export default CountryContextProvider;
