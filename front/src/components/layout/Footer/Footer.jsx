import React from 'react';
import './Footer.css';
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

function Footer() {
  return (
    <footer id="footer">
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='/product'>Product</a></li>
        <li><a href='/about'>About</a> </li>
        <li><a href='/contact'>Contact</a> </li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.facebook.com/profile.php?id=100040948238919'><BsFacebook className='fb-icon'/></a>
        <a href='https://www.instagram.com/s.h.a.n.g.a/?igshid=YmMyMTA2M2Y%3D'><BsInstagram className='insta-icon'/></a>
        <a href='https://twitter.com/the_turbulent'><BsTwitter className='twit-icon'/></a>
        <a href='https://www.linkedin.com/in/anupam-debnath-364b2619a/'><BsLinkedin className='linkedin-icon'/></a>
        <a href='https://github.com/sandipyash'><BsGithub className='git-icon'/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Copyright 2022 <a href='#'>Sandip Adhikary</a>. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer