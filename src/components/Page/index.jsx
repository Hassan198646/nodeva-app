import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
const Page = ({children}) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer/>  
    </React.Fragment>
  );
};

export default Page;
