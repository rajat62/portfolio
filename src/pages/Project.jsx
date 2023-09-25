import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import "../styles/Project.css"
const Project = () => {

      const projectData = [
            { name: "Adventure Addicts", image: "/images/adventure_addicts_logo.png", link: "https://github.com/rajat62/Adventure_Addicts", tech: [ "React","Redux", "MongoDB" ]},
            { name: "Finance Buddy", image: "/images/finance_buddy_logo.png", link: "https://github.com/rajat62/Finance_Buddy", tech: [ "React","Redux", "MongoDB" ]},
            { name: "Apna Bazaar", image: "/images/apna_bazaar_logo.png", link: "https://github.com/rajat62/Apna_Bazaar", tech: [ "EJS", "MongoDB" ]},
      ]
  return (
      <div className='project'>
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
            <div className='contentDiv d-flex flex-column justify-content-between'>
                  <h3>. Projects</h3>
                  <div className='projects d-flex flex-wrap justify-content-evenly'>
                        {
                              projectData.map((item)=>{
                                    return (
                                          <div className='single-project d-flex flex-column gap-2 gap-lg-3 align-items-center'>
                                                <img src={item.image} className='rounded-5'/>
                                                <h6><a href={item.link}>{item.name}</a></h6>
                                                <div className='d-flex gap-3'>
                                                      {
                                                            item.tech.map((ele)=>{
                                                                  return <p className='techName'>{ele}</p>
                                                            })
                                                      }
                                                </div>
                                          </div>
                                    )
                              })
                        }
                  </div>
            </div>
            
            </div>
      </div>
      </div>
  )
}

export default Project