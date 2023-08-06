import React from "react";
import logo from "./airbnb-logo.png";
import "./ab.css";

const heading = {
  textAlign: "center",
  fontSize: "4em",
  color: "white",
  marginTop: "100px"
};

const tag = {
  listStyleType: "none",
  color: "white",
  textAlign: "center",
  fontSize: "1.6em",
  marginTop: "80px"
};

const image = {
  height: "80px",
  width: "300px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "600px",
  marginTop: "-20px"
};

class Abn extends React.Component {
  render() {
    const el = (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1 style={heading}>
          The Evolution of <br /> Airbnb's Frontend
        </h1>
        <p style={tag}>
          <span>@spikebrehm</span>
        </p>
        <img src={logo} alt="Logo" style={image} />
      </div>
    );
    return el;
  }
}

export default Abn;