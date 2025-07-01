import React from "react";
import logo from "../assets/logo-footer.svg";
// import { Link } from "react-router";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import footerLink from "../assets/footerPage.webp";
import footerLink2 from "../assets/footerPage2.webp";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="px-1 w-11/12 mx-auto py-3 divide-y text-black dark:text-gray-300">
      <div className=" grid grid-cols-2 gap-6 py-6 lg:grid-cols-4 items-start">
        <div className="lg:w-1/3">
          <NavLink to="/">
            <img className="flex items-center justify-center w-34" src={logo} />
          </NavLink>
          <div className="flex">
            <img className="w-16" src={footerLink} alt="" />
            <img className="w-16" src={footerLink2} alt="" />
          </div>
        </div>
        <div className="lg:space-y-3 flex flex-col items-center">
          <h3 className="tracking-wide uppercase dark:text-gray-100 font-semibold">
            Company
          </h3>
          <ul className="space-y-1 flex flex-col lg:items-start items-center">
            <li>
              <Link to="/privacyPolicy">Privacy policy</Link>
            </li>
            <li>
              <Link to="/termsAndConditions">Terms of Service</Link>
            </li>
          </ul>
        </div>
        <div className="lg:space-y-3 flex flex-col lg:items-center">
          <h3 className="tracking-wide uppercase dark:text-gray-100 font-semibold">
            Services
          </h3>
          <ul>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="lg:space-y-3 gap-2 flex flex-col items-center">
          <div className="uppercase dark:text-gray-100 font-semibold">Social media</div>
          <div className="flex justify-start items-center space-x-3">
            <a href="https://www.facebook.com/sifat.tarafder.5" target="_blank" className="text-blue-700">
              <FaFacebook size={21} />
            </a>
            <a href="https://x.com/SifatTarafder98" target="_blank" className="text-blue-500">
              <FaTwitter size={21} />
            </a>
            <a href="https://www.instagram.com/sifat_trf98/" target="_blank" className="text-pink-700">
              <FaInstagram size={23} />
            </a>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-gray-600 dark:text-gray-300">
        © 2025 All-Events. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;