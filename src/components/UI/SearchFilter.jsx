import React, { useContext } from "react";
import { countryContext } from "../../store/countryStore";

const SearchFilter = () => {
  const { search, setSearch, filter, setFilter, countries, setCountries } =
    useContext(countryContext);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleOptionChange = (event) => {
    setFilter(event.target.value);
  };

  const handleOrderChange = (order) => {
    if (order == "asc") {
      const newCountries = [...countries].sort((a, b) => {
        return a.name.common
          .toLowerCase()
          .localeCompare(b.name.common.toLowerCase());
      });
      setCountries(newCountries);
    } else {
      const newCountries = [...countries].sort((a, b) => {
        return b.name.common
          .toLowerCase()
          .localeCompare(a.name.common.toLowerCase());
      });
      setCountries(newCountries);
    }
  };
  return (
    <>
      <div className="SearchContainer">
        <div class="searchInput input-group mb-3 ">
          <input
            type="text"
            class="form-control"
            placeholder="Search Country"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            value={search}
            onChange={handleInputChange}
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Countries
          </button>
        </div>

        <button
          className="btn btn-primary"
          onClick={() => handleOrderChange("asc")}
        >
          Asc
        </button>
        <button
          className="btn btn-primary"
          onClick={() => handleOrderChange("dsc")}
        >
          Dsc
        </button>

        <div class="searchInput input-group mb-3">
          <select
            class="form-select"
            id="inputGroupSelect02"
            onChange={handleOptionChange}
          >
            <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
          <label class="input-group-text" for="inputGroupSelect02">
            Regions
          </label>
        </div>
      </div>
    </>
  );
};

export default SearchFilter;
