import React from "react";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";

const Footer = () => {
  return (
    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <a
            href="/"
            class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <svg class="bi" width="30" height="24">
              <use xlink:href="#bootstrap"></use>
            </svg>
          </a>
          <span class="mb-3 mb-md-0 text-body-secondary">
            © 2025, Harshit Bihani Inc
          </span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3">
            <a class="text-body-secondary" href="#">
              <TiSocialTwitter />
            </a>
          </li>
          <li class="ms-3">
            <a class="text-body-secondary" href="#">
              <TiSocialInstagram />
            </a>
          </li>
          <li class="ms-3">
            <a class="text-body-secondary" href="#">
              <TiSocialFacebook />
            </a>
          </li>
          <li class="ms-3">
            <a class="text-body-secondary" href="#">
              <TiSocialLinkedin />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
