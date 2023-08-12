import React from 'react'
import "./box.css"
function Box({image,username,avatarimage,headline,para,posttime,date,button}) {
  return (
    <div className='divs'>
    <div className='Left'>
    <div className='avatardiv'>
    <img id="avatar" src={avatarimage}></img>
    <h5>{username}</h5>
    </div>
    <div className='text'>
        <h1>{headline}</h1>
        <p style={{color:"GrayText"}}>{para}</p>
    </div>
    <div className='time' style={{color:"GrayText"}}>
    <p>{date}</p>
    <p className='dot'>.</p>
    <p>{posttime}</p>
    <p className='dot'>.</p>
    <p id='textbutton'>{button}</p>
    </div>
    </div>
    <div className='Right'>
        <img src={image}></img>
    </div>
    </div>
  )
}

export default Box