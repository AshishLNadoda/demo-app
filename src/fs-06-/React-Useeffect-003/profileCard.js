import React from "react";
import "./profileCard.css";

const Card = (props) => {
  return (
    <div>
      <div className="container">
        <div>
          <img src={props.image} alt="" />
        </div>
        <div className="info1">
          <h2>{props.name}</h2>
          <h3>@{props.idn}</h3>
          <p>Last Updated : {props.updation}</p>
        </div>
      </div>
      <div className="info2-main">
        <div className="info2">
          <div className="count">
            <span className="p1"> Followers</span>
            <br></br>
            <span className="p2">{props.followers}</span>
          </div>
          <div className="count">
            <span className="p1">Repositories </span>
            <br></br>
            <span className="p2">{props.repos}</span>
          </div>
          <div className="count">
            <span className="p1">Following </span>
            <br></br>
            <span className="p2">{props.following}</span>
          </div>
        </div>
      </div>
      <div>
        <div>

          <h2 style={{ marginTop: "3vh" }}>Repository List</h2>

          <span className="p4">{props.repos_url}</span>
         
        </div>
      </div>
    </div>
  );
};
export default Card;