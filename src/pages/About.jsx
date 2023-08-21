import React from 'react'
import "../styles/About.css"
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import { DiBootstrap, DiGit, DiMongodb, DiNodejsSmall, DiReact, DiSass, DiWordpress } from "react-icons/di";

const About = () => {
  return (
    <div className='about'>
      <div className='outerdiv d-flex flex-column flex-lg-row'>
        <div className='about-links d-flex flex-column justify-content-between'>
              <header className="d-flex flex-row flex-lg-column justify-content-between justify-content-lg-start align-items-center w-100 pe-3 pt-4">
                  <ul className="w-50 w-lg-100 d-flex flex-row flex-lg-column align-items-center align-items-lg-start ps-lg-0 ps-5 gap-4 ">
                    <li><Link className='link' to="/">portfolio</Link></li>
                    <li><Link className='link' to="/about">about</Link></li>
                    <li><Link className='link' to="/projects">projects</Link></li>
                  </ul>
                  <Link id='contact-btn' to="/contact" >Contact</Link>
                </header>
                <div className='d-flex flex-row flex-lg-column w-100 align-items-center justify-content-center gap-3 pb-lg-5'>
                  <a href='https://github.com/rajat62'><AiFillGithub  className='social-links' /></a>
                  <a href='https://www.linkedin.com/in/rajat-choudhary-mzn/'><AiFillLinkedin className='social-links' /></a>
                </div>
        </div>
        <div className='about-content d-flex justify-content-center align-items-center'>
          <div className='contentDiv'>
              <h3>. About Me</h3>
              <p className='pt-4'>Technology has constantly sparked my interest. I began my web development career by developing <span>WordPress</span> websites using <span>Elementor</span>. Then I continued to learn and discovered the world of <span>React</span>. I appreciate every aspect of learning and continue growing my knowledge through practice.</p>
              <h4 className=' pt-2 pt-lg-4'>.More About Me</h4>
              <div className='d-flex gap-5 pt-2 pt-lg-4'>
                <div className='more-about-me'>
                  <h5 className='pb-1 pb-lg-3'>Hobby</h5>
                  <p>Gardening</p>
                </div>
                <div className='more-about-me'>
                  <h5 className='pb-1 pb-lg-3'>What Defines Me </h5>
                  <p>Curious Explorer</p>
                  <p>Creative Innovator</p>
                  <p>Future Visionary</p>
                </div>
                
                <div className='more-about-me'>
                  <h5 className='pb-1 pb-lg-3'>Extra-Curricular Activities</h5>
                  <p>NCC Cadet</p>
                  <p>Participation in Hackathons</p>
                  <p>State Level in Cricket</p>
                </div>
              </div>
              <div className='pt-4'>
                  <h5 className='pb-1 pb-lg-3' id='techHeading'>Technologies I Use</h5>
                  <div className='d-flex gap-2'>
                    <DiReact className='techIcons'/>
                    <DiNodejsSmall className='techIcons'/>
                    <DiBootstrap className='techIcons'/>
                    <DiMongodb className='techIcons'/>
                    <DiGit className='techIcons'/>
                    <DiSass className='techIcons'/>
                    <DiWordpress className='techIcons'/>

                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About