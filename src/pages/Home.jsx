import React from 'react'
import "../styles/Home.css"
import { Link } from 'react-router-dom';

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Home = () => {
  return (
      <div className="contain">

    
      <div className="outerdiv d-flex flex-column">
        <header className="header ">
          <ul className="d-flex flex-row gap-4 p-0">
            <li><Link className='link' to="/">portfolio</Link></li>
            <li><Link className='link' to="/about">about</Link></li>
            <li><Link className='link' to="/projects">projects</Link></li>
          </ul>
          <Link id='contact-btn' to="/contact" >Contact</Link>
        </header>
        <div className="main d-flex flex-column flex-lg-row justify-content-between">
          <div className="left w-lg-50 w-100 d-flex flex-column gap-lg-4  gap-2 align-items-center">
            <div className="left-inner d-flex flex-column gap-0 gap-lg-2 align-items-center align-items-lg-start ">
              <p className="text-white">Hi There,</p>
              <h2 className="pt-0 pt-lg-2 pb-0 pb-lg-2 text-white text-center text-lg-start">
                I am <span>Rajat Choudhary</span>
              </h2>
              <h6 className="text-white pb-1 pt-1 pt-lg-3">Passionate Frontend Developer with a Love for React</h6>
              <p className="pt-1 pt-lg-3">I enjoy learning, solving problems, and applying technology to make life simpler..</p>
            </div>
            <div className="left-bottom d-flex flex-row pt-2  align-items-center justify-content-center justify-content-lg-start ">
              <img src="/images/js-logo.png" className="bounce-2" />
              <img
                src="/images/react-logo.png"
                id="react-logo"
                className="bounce-2"
                style={{animationDelay: "0.3s"}}
              />
              <img
                src="/images/redux-toolkit.png"
                id="redux-logo"
                className="bounce-2"
                style={{animationDelay: "0.6s"}}
              />
            </div>
            <div className="left-bottom d-flex flex-row gap-2 justify-content-center justify-content-lg-start">
              <AiFillGithub  className='social-links' />
              <AiFillLinkedin className='social-links' />
            </div>
          </div>
          <div className="right d-flex flex-row align-items-end justify-content-center w-100 w-lg-50 pb-4">
            <div className="right-inner d-flex justify-content-center align-items-end">
              <img src="/images/Rajat.png"/>  
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Home