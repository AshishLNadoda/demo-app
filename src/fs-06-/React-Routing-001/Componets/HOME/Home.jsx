import React from 'react'
import '../../CSS_files/Home.css'
import BannerImg from '../../Images/Img_01.png'
import p1 from '../../Images/p1.png'
import p2 from '../../Images/p2.png'
import p3 from '../../Images/p3.png'
import p4 from '../../Images/p4.png'
import ChooseCard from './ChooseCard'
import ProjectCard from './ProjectCard'
import WhatWeDoCard from './WhatWeDoCard'
import { imgs1, imgs2, imgs3, imgs4, imgs5, imgs6,imgs7,imgs8 } from '../../Images/ProjectImages'

const Home = () => {
  return (
    <>
      <div className='home'>
        <div className="home-mainDiv">
          <div className="home-mainDiv-leftSide">
            <h1>Leading MEP & Facility management company in Dubai</h1>
            <p>Urban Science is always ready to accept your challenges
              Meeting your goals is our main objective. Professional services for facility management & MEP works</p>
            <div className="btn-Div">
              <button className='btn-01'>Company Profile</button>
              <button className='btn-02'>Watch Video</button>
            </div>
          </div>
          <div className="home-mainDiv-rightSide">
            <img src={BannerImg} alt="" />
          </div>
        </div>
        <div className="Choose-usDiv">
        <div className="Choose-usDiv-topView">
          <p>“YOU CANNOT CREATE THE EXPERIENCE. YOU MUST UNDERGO IT”</p>
          <h1>Why Choose Us</h1>
        </div>
        <div className="Choose-usDiv-bottomView">
          <ChooseCard 
          img1={p1}
          h3={'Clean Handover'}
          p={'A project can be started by any MEP business in Dubai, but only a select handful can finish them on schedule. Urban Science gives you the opportunity to speak with past clients before your project even begins. In order for you to receive full feedback on URBAN SCIENCE. Our clean and on-time handover makes us among the best facilities management companies in Dubai.'}
          />
          <ChooseCard img1={p2}
          h3={'Qualified and Certified'}
          p={'Urban Science is one of the leading companies in Dubai with a mission to provide customer satisfaction at every level. We provide effective solutions for all your MEP and facility management needs with a commitment to quality, environmental sustainability, and people-centered development. Urban Science is among the few companies in Dubai to be certified and approved by Dubai Municipality. Our professional and certified approach makes us among the best facilities management companies in Dubai'}
          />
          <ChooseCard img1={p3}
         h3={'Experienced team'} 
         p={'Urban Science is the best MEP and facility management company that provides comprehensive and reliable services to meet all your needs. We have been in Dubai for over 10 years, and have helped more than 200 companies around the city with their facilities management needs. We are a well-established company with years of experience in the field. Our workforce of over 200 employees is backed by advanced technology and the latest tools to provide quality services.'}
          />
        </div>
        </div>
        <div className="We-doDiv">
          <div className="We-doDiv-topView">
            <h1>What We Do ?</h1>
          </div>
          <div className="We-doDiv-bottomView">
            <WhatWeDoCard img1={p4}
            h3={'Facility management'}
            p={'We comply with the highest standards of professionalism and have one of the lowest employee turnover rates in the industry. Our urban science experts who are reliable and on time have a combined experience of over 18+ years. Financially, we offer the best rates in the industry with no hidden fees or expensive contracts. If you want to save money and find an inexpensive company for your facility management needs Urban Science is the place for you!'}
            />
             <WhatWeDoCard img1={p4}
            h3={'MEP Works'}
            p={'We comply with the highest standards of professionalism and have one of the lowest employee turnover rates in the industry. Our urban science experts who are reliable and on time have a combined experience of over 18+ years. Financially, we offer the best rates in the industry with no hidden fees or expensive contracts. If you want to save money and find an inexpensive company for your facility management needs Urban Science is the place for you!'}
            />
             <WhatWeDoCard img1={p4}
            h3={'Air conditioning services'}
            p={'We comply with the highest standards of professionalism and have one of the lowest employee turnover rates in the industry. Our urban science experts who are reliable and on time have a combined experience of over 18+ years. Financially, we offer the best rates in the industry with no hidden fees or expensive contracts. If you want to save money and find an inexpensive company for your facility management needs Urban Science is the place for you!'}
            />
            <WhatWeDoCard img1={p4}
            h3={'Air conditioning services'}
            p={'We comply with the highest standards of professionalism and have one of the lowest employee turnover rates in the industry. Our urban science experts who are reliable and on time have a combined experience of over 18+ years. Financially, we offer the best rates in the industry with no hidden fees or expensive contracts. If you want to save money and find an inexpensive company for your facility management needs Urban Science is the place for you!'}
            />
            <WhatWeDoCard img1={p4}
            h3={'Air conditioning services'}
            p={'We comply with the highest standards of professionalism and have one of the lowest employee turnover rates in the industry. Our urban science experts who are reliable and on time have a combined experience of over 18+ years. Financially, we offer the best rates in the industry with no hidden fees or expensive contracts. If you want to save money and find an inexpensive company for your facility management needs Urban Science is the place for you!'}
            />
          </div>
        </div>
        <div className="Project-div">
          <h1>Project</h1>
          <div className="project-Card">
            <ProjectCard imges={imgs1} head={'Mall Of Emirates'}/>
            <ProjectCard imges={imgs2} head={'Atlantis–The Palm'}/>
            <ProjectCard imges={imgs3} head={'Dubai-Mall'}/>
            <ProjectCard imges={imgs4} head={'Emax'}/>
            <ProjectCard imges={imgs5} head={'Medinat'}/>
            <ProjectCard imges={imgs6} head={'Carrefour'}/>
          </div>
          <button>Find Out more</button>
        </div>
        
        <div className="Office-PlaceDiv">
          <div className="div1 child">
            <img src={imgs7} alt="" />
            <h2>Dubai</h2>
          </div>
          <div className="div2 child">
            <img src={imgs8} alt="" />
            <h2>UK</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home