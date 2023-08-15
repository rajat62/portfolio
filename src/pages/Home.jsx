import React from 'react'
import "../styles/Home.css"
import { Link } from 'react-router-dom';

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Home = () => {
  return (
      <div className="contain">

    
      <div className="outerdiv d-flex flex-column">
        <header className="d-flex flex-row justify-content-between pe-3">
          <ul className="d-flex flex-row gap-4">
            <li><Link className='link' to="/">portfolio</Link></li>
            <li><Link className='link' to="/about">about</Link></li>
            <li><Link className='link' to="/projects">projects</Link></li>
          </ul>
          <button id='home-btn' >Contact Me</button>
        </header>
        <div className="main d-flex flex-column flex-lg-row">
          <div className="left w-100 w-lg-50 d-flex flex-column gap-4 align-items-center">
            <div className="left-inner d-flex flex-column gap-0 gap-lg-2 align-items-center align-items-lg-start ">
              <p className="text-white">Hi There,</p>
              <h2 className="pt-0 pt-lg-2 pb-0 pb-lg-2 text-white text-center text-lg-start">
                I am <span>Rajat Choudhary</span>
              </h2>
              <h6 className="text-white pb-1">I am a frontend web developer</h6>
              <p className="text-white">I love working with React.</p>
            </div>
            <div className="left-bottom d-flex flex-row pt-2 align-items-center justify-content-center justify-content-lg-start ">
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
          <div className="right d-flex flex-row align-items-end justify-content-center w-100 w-lg-50">
            <div className="right-inner d-flex justify-content-center">
              <img src="/images/Rajat.png"/>  
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Home