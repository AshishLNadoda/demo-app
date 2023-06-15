
import React from "react";
import { useState } from "react";


function Filter ({setUser,state}){
    return(
        <div>
            <input type="radio" value="all" name="gender"onClick={
                ()=>setUser(state)
            }  />all
            <input type="radio" value="all" name="gender" onClick={
                ()=>{setUser(state.filter ((data) => data.gender === "male"))}
            }/>male
            <input type="radio" value="all" name="gender" onClick={
                ()=>{setUser(state.filter ((data) => data.gender === "female"))}
            }/>female
        </div>

    );
}
export default Filter;