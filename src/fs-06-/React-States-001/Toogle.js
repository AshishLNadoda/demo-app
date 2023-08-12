import React from 'react'
import './toogle.css'
const Toogle = ({lightTheme,darkTheme}) => {
    const spanStyle={
        color:(lightTheme==true)? "white":"black"
    }
  return (
    <>
    <div  className="maindiv">
        <div className="toogle">
        <h1 style={{color:(lightTheme==true)? "white":"black"}}>Over-reacted</h1>
    <button style={{color:(lightTheme==false)? "white":"black"}}
     onClick={()=>{
    darkTheme(!lightTheme)
    
}}>
    Toggle Here</button>
        </div>
  
  <div style={spanStyle}  className="containe">
            <div className="containe-child">
            <h2>The WET Codbase</h2>
            <span >Sunday 4th 2020 11min read</span>
            </div>
            <div className="containe-child">
            <h2>Goodby, clean code</h2>
            <span>Sunday 4th 2020 11min read</span>
            </div>
            <div className="containe-child">
            <h2>My Decade in Review</h2>
            <span>Saturday 11th 2018 5min read</span>
            </div>
            <div className="containe-child">
            <h2>What are the React Team</h2>
            <span>Thursday 4th 2015 5min</span>
            </div>
        </div>
    </div>

    </>
  )
}

export default Toogle