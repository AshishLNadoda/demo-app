import React from 'react'
import { useState } from "react";
import Filter from './components/filter/Filter'

function User(){
    const[user,setUser]=useState([])
    const[state,setState]=useState([])
    const getuser = () =>{
        fetch("https://randomuser.me/api/?results=500")
        .then((res) =>  res.json())
        .then((data)=>{
            console.log(data.results);
            setUser(data.results)
            setState(data.results)
        })

    }
    return(
        <div>
            <h1>some user data</h1>
            <p>
            </p>
           <button onClick={getuser}>more data</button>
          <div>
            <Filter setUser={setState} state={state} />
          </div>
          {
            user.length>0 &&  <table width="100%" frame="box" rules="all">
            <thead>
                <tr>
                   <th>image </th>
                   <th>name</th>
                   <th>gender</th>
                   <th>email</th>
                   <th>city</th>
    
                </tr>

            </thead>
            <tbody align="center">
            {
                user.map((ele) => {
                  return(  
                    <tr>
                        <td> <img src={ele.picture.medium} alt='a gig' width="100" height="100" /></td>
                        <td>{ele.name.first}

                        </td>
                        <td>{ele.gender}</td>
                        <td>{ ele.email}</td>
                        <td>{ele.location.city}</td>
                    </tr>);
                })
            }

            </tbody  >

           </table>
          }

        </div>

    );
}
export default User;