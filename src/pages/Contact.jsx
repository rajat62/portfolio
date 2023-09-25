import React from 'react'
import "../styles/Contact.css"
import { Link } from 'react-router-dom'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
export const Contact = () => {
  return (
      <div className='contact'>
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
                  <div className='contact-content d-flex justify-content-center align-items-center'>
                        <div className='contentDiv'>
                              <h3 className='pb-2 pb-lg-4'>. Contact Me</h3>
                              {/* <form className='d-flex flex-column gap-4 pt-3 pb-3'>
                                    <input className='form-control' name='email' type='email' placeholder='email'/>
                                    <textarea placeholder='enter your query' class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                                    <input className='form-control btn btn-success w-50' type='submit'/>
                              </form> */}

                              <div className='email-link'>
                                    <h5 className='pt-5'>Email Address</h5>
                                    <p>rajatchoudharyjmit@gmail.com</p>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
  )
}
