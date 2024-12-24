import React from 'react';
import mod from './Testimonials.module.css'
import face from '../../../assets/face.svg'
import face2 from '../../../assets/face2.svg'

function Testimonials(props) {
  const star = (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9.99996 1.66675L12.575 6.88341L18.3333 7.72508L14.1666 11.7834L15.15 17.5167L9.99996 14.8084L4.84996 17.5167L5.83329 11.7834L1.66663 7.72508L7.42496 6.88341L9.99996 1.66675Z" fill="#EFC400" stroke="#EFC400" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>)
  return (
    <div className={mod.testimonials}>
      <h2 className={mod.title}>Testimonials</h2>
      <div className={mod.reviews}>
        <div className={mod.review}>
          <div className={mod.content}>
            <p className={mod.text}>"From the position of a product owner, I can recommend George as a creative, talented, responsible designer and a true professional. He has developed many screens from scratch, from logging into the application with mobile ID authorization, registration flow, to the main screens of product functionality, which significantly improved the user experience. He always meets all..."</p>
            <div className={mod.cap}>
              <div className={mod.info}>
                <div className={mod.imgBlock}><img src={face} alt="avatar" /></div>
                <div className={mod.infoText}>
                  <h4 className={mod.subtitle}>Elena Ageeva</h4>
                  <p className={mod.subtext}>senior Product manager</p>
                </div>
              </div>
              <div className={mod.stars}>{star} {star} {star} {star} {star} </div>
            </div>
          </div>
        </div>
        <div className={mod.review}>
          <div className={mod.content}>
            <p className={mod.text}>"George is a talented product designer, I had some opportunity to work on several projects. It was a pleasant and productive experience. He has a unique vision of product and the ability to translate ideas into reality, and also creates a user experience that pleases and satisfies the needs of the client. George shows high responsibility, punctuality and discipline in his work. He clearly understands..."</p>
            <div className={mod.cap}>
              <div className={mod.info}>
                <div className={mod.imgBlock}><img src={face2} alt="avatar" /></div>
                <div className={mod.infoText}>
                  <h4 className={mod.subtitle}>Vladimir Antipov</h4>
                  <p className={mod.subtext}>LEAD PRODUCT DESIGNER</p>
                </div>
              </div>
              <div className={mod.stars}>{star} {star} {star} {star} {star}</div>
            </div>
          </div>
        </div>
      </div>
      <a target='_blanc' aria-label="go to the linkedin" href="https://www.linkedin.com/in/gbartev" className={mod.buttonBlock}>
        <button  className={mod.button}>View On LinkedIn</button>
        <button  className={mod.buttonShow}>View On LinkedIn</button>
      </a>
      
    </div>
  );
}

export default Testimonials;