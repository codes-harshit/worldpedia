import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const handleActiveChange = (active) => {
    setActiveTab(active);
  };
  return (
    <div class="container">
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg class="bi me-2" width="40" height="32">
            <use xlink:href="#bootstrap"></use>
          </svg>
          <span class="fs-4">World Pedia</span>
        </a>

        <ul class="nav nav-pills">
          <li class="nav-item">
            <NavLink to={"/"}>
              <a
                href="#"
                className={`nav-link ${activeTab === "Home" ? "active" : ""}`}
                aria-current="page"
                onClick={() => handleActiveChange("Home")}
              >
                Home
              </a>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to={"/about"}>
              <a
                href="#"
                className={`nav-link ${activeTab === "About" ? "active" : ""}`}
                aria-current="page"
                onClick={() => handleActiveChange("About")}
              >
                About
              </a>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to={"/countries"}>
              <a
                href="#"
                className={`nav-link ${
                  activeTab === "Countries" ? "active" : ""
                }`}
                aria-current="page"
                onClick={() => handleActiveChange("Countries")}
              >
                Countries
              </a>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to={"/contact"}>
              <a
                href="#"
                className={`nav-link ${
                  activeTab === "Contact" ? "active" : ""
                }`}
                aria-current="page"
                onClick={() => handleActiveChange("Contact")}
              >
                Contact
              </a>
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
