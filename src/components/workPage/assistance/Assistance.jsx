import React from 'react';
import mod from './Assiastance.module.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  NavLink,
} from 'react-router-dom';
import assistanceHomeImg from '../../../assets/assistanceHomeImg.png'
import exampleImg1 from '../../../assets/exampleImg1.png'
import exampleImg2 from '../../../assets/exampleImg2.png'
import exampleMainImg from '../../../assets/exampleMainImg.png'
import figmaIcon from '../../../assets/figmaIcon.svg'
import workIcon from '../../../assets/workIcon.svg'
import Footer from '../../footer/Footer';
import workIconMain2 from '../../../assets/workIcon2.png'
import workIconMain4 from '../../../assets/workIcon4.png'


function Assistance(props) {
  return (
    <div className={mod.wrapper}>
      <div className={mod.content}>
        <div className={mod.linkBlock}>
          <NavLink onClick={window.scrollBy(0, 0)} className={mod.link} to='../work'>
          <div className={mod.svg}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M10.5307 3.63636C10.8235 3.92925 10.8235 4.40412 10.5307 4.69702L5.97765 9.25002H15.8337C16.2479 9.25002 16.5837 9.58581 16.5837 10C16.5837 10.4142 16.2479 10.75 15.8337 10.75H5.97765L10.5307 15.303C10.8235 15.5959 10.8235 16.0708 10.5307 16.3637C10.2378 16.6566 9.76289 16.6566 9.47 16.3637L3.63666 10.5304C3.34377 10.2375 3.34377 9.76258 3.63666 9.46969L9.47 3.63636C9.76289 3.34346 10.2378 3.34346 10.5307 3.63636Z" fill="#909090"/>
</svg>
          </div>
            <span>Back</span>
          </NavLink>
        </div>
        <div className={mod.header}>
          <div className={mod.titleBlock}>
            <h1 className={mod.title}>Virtual Assistance</h1>
            <p className={mod.subtitle}>This is a service that solves certain problems for the user. It can recognize calls from spammers and scammers, as well as protect the user from them. And also - just be a telephone secretary: conduct reasonable dialogues, send a transcript and recording of the conversation directly to the operator’s application.</p>
          </div>
          <nav className={mod.list}>
            <li className={mod.listItem}>Platform:  <span>App</span></li>
            <li className={mod.listItem}>Year:  <span>2023</span></li>
            <li className={mod.listItem}>Company:  <span>Beeline Russia</span> </li>
          </nav>
        </div>
        <div className={mod.homeImg}>
          <img src={assistanceHomeImg} alt='assistanceHomeImg'/>
        </div>
      </div>
    <hr/>
      <div className={mod.content}>
        <div className={mod.contextBlock}>
          <h2 className={mod.contextTitle}>Context</h2>
          <div className={mod.contextTextBlock}>
            <div className={mod.contextText}>
              <h5 className={mod.contextSubtitle}>Why is it important</h5>
              <p className={mod.contextParagraph}>The number of fraudulent calls is only increasing every year. According to statistics, every 5th call is spam. In the current realities, the presence of a virtual assistant is an integral part for every cellular operator.</p>
            </div>
            <div className={mod.contextText}>
              <h5 className={mod.contextSubtitle}>Problem</h5>
              <p className={mod.contextParagraph}>Initially, the functionality of the virtual assistant was implemented through a Telegram bot. This had its drawbacks as users faced difficulties connecting and setting up the assistant. The chat with the bot could simply get lost among a large number of correspondence. Also, this telegram bot had a number of technical limitations, due to which we could not develop our functionality to the fullest.</p>
            </div>
            <div className={mod.contextText}>
              <h5 className={mod.contextSubtitle}>Goal</h5>
              <p className={mod.contextParagraph}>My task was to create a separate section within our main application in which the user could easily set up a virtual assistant, track processed calls and view their transcripts. Our goal was to create a functional base for the virtual assistant, so that in the future it would be possible to add new features.</p>
            </div>
          </div>
        </div>
      </div>
    <hr/>
      <div className={mod.content}>
        <div className={mod.contextBlock}>
          <h2 className={mod.contextTitle}>Working process</h2>
          <div className={mod.contextTextBlock}>
              <div className={mod.contextText}>
                <h5 className={mod.contextSubtitle}>Competitor Analysis and Functionality</h5>
                <p className={mod.contextParagraph}>
                  <p className={mod.contextParagraphItem}>I started my work by drawing up a short user flow along with a product manager for a general understanding of the functionality. Then I analyzed analogues of virtual assistants from competitors in order to understand what patterns are familiar to users and with the help of which features we can stand out.</p>
                  
                  <p className={mod.contextParagraphItem}>Our virtual assistant has several additional features. We came up with an idea - to add some kind of constructor of abilities to the service connection stage. This gives the user the opportunity to connect only what it needs.</p>
                  
                  <p className={mod.contextParagraphItem}>After connecting, the user is taken to the Home page, where he can configure his assistant and see a list of processed calls. By clicking on the number, the user is taken to the transcript page, where he can familiarize himself with all the details of the call.</p>
                </p>
              </div>
              <div className={mod.contextText}>
                <h5 className={mod.contextSubtitle}>Hypothesis Testing</h5>
                <p className={mod.contextParagraph}>
                  <p className={mod.contextParagraphItem}>To test our ideas, I created a clickable prototype and submitted it for usability testing. Together with the research team, we drew up a plan, defined our main goals, and described the hypotheses that needed to be tested.</p>
                  
                  As a result, we identified several problems: <p>1. Most users encountered difficulties at the stage of connecting the assistant; they did not understand the final cost of the service and the principle of constructor of abilities (each ability had a separate cost).</p><p>2. Respondents did not identify the assistant by name (because they did not pay attention to it when connecting)</p>
                </p>
              </div>
          </div>
        </div>

        <div className={mod.examplesBlock}>
        <div className={mod.exampleBlock}><img src={exampleImg1} className={mod.exampleImg}/></div>
        <div className={mod.exampleBlock}><img src={exampleImg2} className={mod.exampleImg}/></div>
        </div>
        <div className={mod.exampleMainImg}>
        <img src={exampleMainImg} alt="image" />
        </div>
        <p className={mod.exampleText}>Service connection flow</p>
          
    
        <div className={mod.resultBlock}>
          <h2 className={mod.resultTilte}>Results</h2>
          <nav className={mod.resultList}>
            <li>Now the assistant’s functionality does not depend on the telegram bot. There are opportunities to add new features</li>
            <li>Made connecting and setting up the virtual assistant more convenient</li>
            <li>Now all calls and transcripts are in one place in the application</li>
            <li>The number of paying users increased by 11%</li>
          </nav>
          
        </div>
      </div>
    <hr />
      <div className={mod.content}>
        <div className={mod.finalyBlock}>
          <h2 className={mod.title}>Related Projects</h2>
          <div className={mod.works}>
            <NavLink to='../work/Self-Teacher' className={mod.NavLink}>
              <div className={mod.item}>
                <div className={mod.imgBlock}>
                  <div className={mod.img}><img src={workIconMain2} alt="keys image" /></div>
                </div>
                  <div className={mod.info}>
                  <img src={workIcon} alt='work icon' className={mod.icon}/>
                  <p className={mod.place}>BEELINE</p>
                  <p className={mod.date}>APP • 2023</p>
                </div>
                <h3 className={mod.subtitleWork}>English Self-Teacher</h3>
              </div>
            </NavLink>
            <a className={mod.NavLink} aria-label="go to the figma" href='https://www.figma.com/file/LjeSCddjRmnCGMI5wx8KQs/Other-work?type=design&node-id=810%3A3897&mode=design&t=Eg1SqvRB8iLhFj2k-1' target='_blanc'>
              <div className={mod.item}>
                <div className={mod.imgBlock}>
                  <div className={mod.img}><img src={workIconMain4} alt="keys image" /></div>
                </div>
                  <div className={mod.info}>
                  <img src={figmaIcon} alt='work icon' className={mod.icon}/>
                  <p className={mod.place}>OTHER WORK IN FIGMA</p>
                  <p className={mod.date}> 2021 - 2023</p>
                </div>
                <h3 className={mod.subtitleWork}>Landings, websites and etc.</h3>
              </div>
            </a>
          </div>
        </div>
        
      </div>
    <hr/>
    <Footer/>
    </div>
  );
}

export default Assistance;