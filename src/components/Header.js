import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Find your vehicle",
};

Header.propTypes = {
  title: PropTypes.string,
};
export default Header;
