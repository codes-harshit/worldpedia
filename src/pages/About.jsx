import React from "react";
import countryFacts from "../api/countryData.json";
import FactCard from "../components/UI/FactCard";

const About = () => {
  return (
    <>
      <div className="selfContainerCard">
        {countryFacts.map((country) => (
          <FactCard key={country.id} country={country} />
        ))}
      </div>
    </>
  );
};

export default About;
