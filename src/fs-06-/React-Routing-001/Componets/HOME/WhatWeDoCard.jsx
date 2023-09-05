import React from 'react'
import '../../CSS_files/WhatWeDoCard.css'
const WhatWeDoCard = ({img1,h3,p}) => {
  return (
    <>
    <div className='WhatWeDoCard'>
    <img src={img1} alt="" />
    <h2>{h3}</h2>
    <p>{p}</p>
    </div>
    </>
  )
}

export default WhatWeDoCard