import React, { useState } from "react";
import Card from "./profileCard";
import "./User.css";

const Gituser = () => {
  const [user, setUser] = useState("");
  const [apidata, setapiData] = useState({});

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${user}`)
      .then((result) => {
        return result.json();
      })
      .then((value) => {
        setapiData(value);
      });
  };

  return (
    <div>
      <div className="Guser-main">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={user}
            onChange={handleChange}
            className="search-box"
          />
          <input type="submit" value="Submit" className="submit-button" />
        </form>
        <div className="Card">
          <Card
            image={apidata.avatar_url}
            name={apidata.name}
            idn={apidata.login}
            updation={apidata.updated_at}
            followers={apidata.followers}
            repos={apidata.public_repos}
            following={apidata.following}
          />
        </div>
      </div>
    </div>
  );
};
export default Gituser;