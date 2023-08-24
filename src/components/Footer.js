import React from "react";
import { FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

let Footer = () => {
  return (
    <>
      <div className="bg-black w-full h-[550px]  ">
        <div className="flex justify-evenly pt-20 ">
          <div className="text-gray-400 text-lg font-semibold ">
            <h1>COMPANY</h1>
            <ul>
              <li className="text-white pt-5">About us</li>
              <li className="text-white pt-1 ">Team</li>
              <li className="text-white pt-1">Career</li>
              <li className="text-white pt-1">Swiggy Blog</li>
              <li className="text-white pt-1">Bug Bounty</li>
              <li className="text-white pt-1">Swiggy One</li>
              <li className="text-white pt-1">Swiggy Corporate</li>
              <li className="text-white pt-1">Swiggy Instamart</li>
              <li className="text-white pt-1">Swiggy Genie</li>
            </ul>
          </div>

          <div className="text-gray-400 text-lg font-semibold">
            <h1>CONTACT</h1>
            <ul>
              <li className="text-white pt-5">Help & Support</li>
              <li className="text-white pt-1 ">Partner with us</li>
              <li className="text-white pt-1 ">Ride with us</li>
            </ul>
          </div>

          <div className="text-gray-400 text-lg font-semibold">
            <h1>LEGAL</h1>
            <ul>
              <li className="text-white pt-5">Terms & Conditions</li>
              <li className="text-white pt-1 ">Refund & Cancellation</li>
              <li className="text-white pt-1 ">Privacy Policy</li>
              <li className="text-white pt-1 ">Cookie Policy</li>
              <li className="text-white pt-1 ">Offer Terms</li>
              <li className="text-white pt-1 ">Phishing & Fraud</li>
              <li className="text-white pt-1 ">
                Corporate – Swiggy Money Codes
              </li>
              <li className="text-white pt-1 ">Corporate - Swiggy Discount</li>
            </ul>
          </div>
          <div className="text-gray-400 text-lg font-semibold">
            <img
              className="w-[300px]"
              src="https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-travel-awards-globestamp-7.png"
              alt="img"
            />
          </div>
        </div>

        <div className="pt-10 flex justify-evenly items-center">
          <div>
            <img
              className="w-[200px]"
              src="https://driver-media-assets.swiggy.com/drivers/q_auto,f_auto,fl_lossy,c_fill/ride-with-us/icons/footer.png"
            />
          </div>

          <div className="text-gray-400 text-lg font-semibold "> &copy;Haider Rafi</div>
          <div className="flex">
            <div className="pr-2"><FaTwitter size='2.5rem' className="fill-white "/></div>
            <div className="pr-2"><FaLinkedinIn size='2.5rem'  className="fill-white "/></div>
            <div className="pr-2"><FaInstagram  size='2.5rem' className="fill-white "/></div>
            <div className="pr-2"><FaGithub size='2.5rem'  className="fill-white "/></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
