import React from "react";
import "../css/header.css";

function Header() {
  return (
    <div className="header">
      <h1 className="very-dark-blue">
        <span className="h1-span grayish-blue">
          Reliable, efficient delivery
        </span>
        <br /> Powered by Technology
      </h1>
      <p className="h1-p grayish-blue very-dark-blue">
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
    </div>
  );
}

export default Header;
