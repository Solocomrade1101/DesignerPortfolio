import React from 'react';
import mod from './About.module.css'
import aboutPhoto from '../../assets/aboutPhoto.jpg'
import Footer from '../footer/Footer';
import { NavLink } from 'react-router-dom';
function About(props) {
  return (
    <>
      <div className={mod.content}>
    <h1 className={mod.title}>About me</h1>
    <p className={mod.subtitle}>Hey, I'm George. Learn a bit more about me, my passions, and how I spend my time when I'm not busy designing.</p>
    <div className={mod.photoBlock}><img src={aboutPhoto} alt="image" /></div>
    <p className={mod.text}>With a background in product design, I thrive on crafting digital experiences that seamlessly blend aesthetics, functionality, and user-centered design principles. My journey in the world of design has equipped me with a keen eye for detail, a deep understanding of user behavior, and the ability to transform complex concepts into intuitive, visually appealing products.</p>
    <p className={mod.text}>Whether it's crafting captivating user interfaces, optimizing user flows, or bringing an app from concept to fruition, I'm dedicated to delivering high-quality design solutions that not only meet but exceed expectations. My commitment to staying updated with the latest design trends.</p>
    <p className={mod.text}>In spare time, you'll find me playing football, riding the bike, hitting the gym, gaming, and trying to get my hands on the latest tech. I am constantly seeking inspiration from various sources, whether it's nature, art, or technology. This helps me bring a fresh perspective to my designs and create products that stand out in the market.</p>
    <p className={mod.text}>Thank you for visiting my portfolio, and I'm excited to connect with you to discuss how my skills can contribute to your next design or development endeavor. Let's collaborate to bring your ideas to life in the most innovative and efficient ways possible.</p>

    <NavLink to="../contact" className={mod.buttonBlock}>
        <button  className={mod.button}>Let’s Talk</button>
        <button  className={mod.buttonShow}>Let’s Talk</button>
    </NavLink>
    
      </div>
      <hr/>
      <Footer/>
    </>
  );
}

export default About;