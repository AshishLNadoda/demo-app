import React, { useEffect, useState } from "react";
import "./h13.css"


const Epp = () => {
    const [advice, setAdvice] = useState("");

    useEffect(() => {
        const url = "https://api.adviceslip.com/advice";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.slip.advice);
                setAdvice(json.slip.advice);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
       <div  className="center">  
        <h1>Use the useEffect hook to fetch product data from an API and update the component's state.</h1>
        <h1>Use the useEffect hook again to perform cleanup when the component is unmounted.</h1>
        <h2>Refresh you will get  updated quote</h2>
       <h3> Quote:</h3> 
      <div className="quo">  <p>"{advice}"</p></div>
       </div>
          
    );
};

export default Epp;

