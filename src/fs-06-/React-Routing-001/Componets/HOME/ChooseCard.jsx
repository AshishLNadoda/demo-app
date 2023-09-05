import React from 'react'
import '../../CSS_files/ChooseCard.css'
const ChooseCard = ({img1,h3,p}) => {
  return (
    <>
    <div className='ChooseCard'>
    <img src={img1} alt="" />
    <h2>{h3}</h2>
    <p>{p}</p>
    </div>
    </>
  )
}

export default ChooseCard
