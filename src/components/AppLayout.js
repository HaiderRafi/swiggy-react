import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

let AppLayout = () => {
  return (
    <>
      <Header />
      {/* <Body/> */}
      <div className="pt-20">
      <Outlet />
      </div>
      
      <Footer />

      {/* outlet */}
      {/* footer */}
    </>
  );
};

export default AppLayout;
