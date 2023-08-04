import React, { Component } from "react";

const heading = {
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "4em",
};

const para = {
  textAlign: 'center',
  fontSize: '1.5em'
};

class Heading extends React.Component {
  render() {
    const about = (
      <div>
        <h1 style={heading}>About Us</h1>
        <p style={para}>At Zappos.com, our purpose is simple: to live and deliver WOW.</p>
        <p style={para}>
          Twenty years ago, we began as a small online retailer that only sold
          shoes. Today, we still sell shoes -- as well as <br />
          clothing, handbags, accessories, and more. That "more is providing
          very best customer service, customer <br />
          experience, and company culture. We aim to inspire the world by
          showing it's possible to simultaneously deliver <br /> happiness to
          customers, employees, vendors, shareholders, and the community in a
          long-term, sustainable way.
        </p>
        <p style={para}>
          We hope in that future people won't even realize we started selling
          shoes online. Instead, they'll know Zappos as a <br />
          service company that just happens to sell ______.
        </p>
      </div>
    );
    return about;
  }
}

export default Heading;