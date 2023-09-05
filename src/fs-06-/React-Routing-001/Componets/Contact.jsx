import React from 'react'
import '../CSS_files/Contact.css'
import contact from '../Images/p5.png'
const Contact = () => {
  return (
   <>
    <div className='contact'>
      <div className="leftSide">
        <img src={contact} alt="" />
      </div>
      <div className="rightSide">
        <form action="">
          <div className='name  flex'>
            <label>Name</label>
            <input type="text" name="" id="" />

          </div>
          <div className='email flex'>
            <label>Email</label>
            <input type="email" name="" id="" />

          </div>
          <div className='number flex'>
            <label>Contact Number</label>
            <input type="number" name="" id="" />

          </div>
          <div className='msg flex'>
          <label>Massage</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div className='btn flex'>
            <button>Submit</button>
          </div>
        </form>
      </div>


    </div>
   </>
  )
}

export default Contact