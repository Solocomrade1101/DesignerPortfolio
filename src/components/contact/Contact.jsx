import React  from 'react';
import mod from './Contact.module.css'
import Footer from '../footer/Footer';
import { useState, useRef } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  NavLink,
} from 'react-router-dom';
import emailjs from '@emailjs/browser';
import * as clipboard from "clipboard-polyfill";



function Contact(props) {
const [value1, setValue1] = useState('')
const [value2, setValue2] = useState('')
const [value3, setValue3] = useState('')
const form = useRef();
const loader = `<div class='loaderBlock'>
  <svg class="loader" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g clipPath="url(#clip0_95_424)">
    <path d="M10 1.66675V5.00008" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 15V18.3333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.1084 4.1084L6.46673 6.46673" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.5332 13.5334L15.8915 15.8918" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.6665 10H4.99984" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 10H18.3333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.1084 15.8918L6.46673 13.5334" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.5332 6.46673L15.8915 4.1084" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_95_424">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
  </svg>
</div>`
const buttonBlockFin = document.querySelector('.Contact_buttonBlockFin__hf1T3')
const buttonBlock = document.querySelector('.Contact_buttonBlock__2fIjK')
const buttonTextStock = `<span class='Contact_button__Qd6Jv'>Send Message</span><span class='Contact_buttonShow__c3pgQ'>Send Message</span>`
const successBlock = document.querySelector('.Contact_successBlock__HsREj')
const textareaBlock = document.querySelector('.Contact_textarea__Qkfer')



function copiedShow(){
  clipboard.writeText("gbartev@gmail.com").then(
    () => { console.log("success!"); },
    () => { console.log("error!"); }
  )


  document.querySelector('#copied').classList.add('copiedShow')
  setTimeout(() => {
  document.querySelector('#copied').classList.remove('copiedShow')
    
  }, 3000);
}

function validInput1(e){
  setValue1(e.target.value)
  e.target.style.boxShadow = '#171717 0px 0px 0px 1px inset'
}

function validInput2(e){
  setValue2(e.target.value)
  e.target.style.boxShadow = '#171717 0px 0px 0px 1px inset'
}

function validInput3(e){
  setValue3(e.target.value)
  e.target.style.boxShadow = '#171717 0px 0px 0px 1px inset'
}

async function formSubmit(e){
  const inputs = document.querySelectorAll('#input')
  e.preventDefault()
  let errorValue = true

  inputs.forEach((input, index) => {
    if(input.value == ''){
      input.style.boxShadow = ' rgb(238, 68, 68) 0px 0px 0px 1px inset'
      errorValue = false
    }
  })
  if(inputs[1].value != '' || inputs[1].value != undefined){
    
    if(inputs[1].value.indexOf("@") === -1){
    inputs[1].style.boxShadow = 'rgb(238, 68, 68) 0px 0px 0px 1px inset';
    errorValue = false
  }
  }
  

  

  if(errorValue){
    buttonBlock.innerHTML = loader
    emailjs.sendForm('service_e8m1x4k', 'template_paa9mvo', form.current, 'XCtKmDg_w76mLrAWz')
      .then((result) => {
          console.log(result.text);
          successForm()

      }, (error) => {
          alert('error')
          // successForm()
          remoteForm()
      });
  }

  function successForm(){
    buttonBlockFin.style.display = 'flex'
    buttonBlock.style.display = 'none'
    inputs.forEach(input => {
      input.style.display = 'none'
    })
    textareaBlock.style.display = 'none'
    successBlock.classList.add('successBlockShow')
  }
}

function remoteForm(){
  const inputs = document.querySelectorAll('#input')
    buttonBlockFin.style.display = 'none'
    buttonBlock.style.display = 'flex'
    buttonBlock.innerHTML = buttonTextStock
    inputs.forEach(input => {
      input.style.display = 'block'
      input.value = ''
    })
    textareaBlock.style.display = 'block'

    successBlock.classList.remove('successBlockShow')
  }



  return (
    <div className={mod.formBlock}>
      <div id='copied' className={mod.copied}>
        <p className={mod.copiedText}>Email copied</p>
      </div>
      
      <div className={mod.content}>
        <h1 className={mod.title}>Let’s Chat</h1>
        <p className={mod.text}>If you'd like to talk about a potential project or just say hi, send me a message or email me at <span id='copied-text'  onClick={copiedShow}>gbartev@gmail.com</span></p>
        <form ref={form} onSubmit={formSubmit} id='form' className={mod.form}>
          <div className={mod.successBlock}>
            <div className={mod.successIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M26.6668 8L12.0002 22.6667L5.3335 16" stroke="#03E26B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className={mod.successText}>Your message has been sent</p>
          </div>
          
          <div className={mod.data}>
            <input 
              onChange={(e) => validInput1(e)}
              value1='' 
              id='input' 
              type='text' 
              placeholder='Name' 
              name='user_name'/>
            <input
              onChange={(e) => validInput2(e)}
              value2='' 
              id='input' 
              // type='email'
              placeholder='Your email' 
              name='user_email'/>
          </div>
          <div className={mod.textarea}>
            <textarea 
              onChange={(e) => validInput3(e)}
              value3='' 
              id='input' 
              form="form" 
              type='text' 
              placeholder='Message' 
              name='message'/>
          </div>
          <button  type='submit' className={mod.buttonBlock}><span className={mod.button}>Send Message</span><span className={mod.buttonShow}>Send Message</span></button>
          <div onClick={remoteForm} style={{display: 'none'}} className={mod.buttonBlockFin}>
            <button  className={mod.buttonFin}>Send Another Message</button>
            <button  className={mod.buttonShowFin}>Send Another Message</button>
          </div>
        </form>
        
        
      </div>
      <hr/>
      <Footer/>
    </div>
  );
}

export default Contact;