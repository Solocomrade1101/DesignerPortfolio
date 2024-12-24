import React from 'react';
import mod from './Footer.module.css'
function Footer(props) {
  return (
    <div className={mod.footer}>
      <nav className={mod.navigator}>
        <ul className={mod.list}>
        <li className={mod.item}>
          <a target='_blanc' href="https://www.linkedin.com/in/gbartev" aria-label="go to the messenger page" className={mod.link}>LinkedIn</a>
        </li>
        <li className={mod.item}>
          <a target='_blanc' href="https://t.me/User180126" aria-label="go to the messenger page" className={mod.link}>Telegram</a>
        </li>
        <li className={mod.item}>
          <a target='_blanc' href="https://www.behance.net/gbartev" aria-label="go to the messenger page" className={mod.link}>Behance</a>
        </li>
        <li className={mod.item}>
          <a href="https://drive.google.com/file/d/1JHV-QZTDZwFDSJAObaVbFkgUUzvsVtex/view" aria-label="go to the messenger page" target='_blanc' className={mod.link}>CV</a>
        </li>
        </ul>
        
      </nav>
      
    </div>
  );
}

export default Footer;