import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
import hero from '../../assets/hero__.JPG'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={hero} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am an experienced Full Stack Developer with over a 1.5 of professional expertise in the field. Throughout my career, I have had the privilege of collaborating to success and growth of project.</p>
                <p>My passion for Full Stack development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Tailwind CSS</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"90%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>Mongo DB</p><hr style={{width:"90%"}} /></div>
                <div className="about-skill"><p>Node JS</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>Express JS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Typescript</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Next JS</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>PostgreSQL</p><hr style={{width:"67%"}} /></div>


            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>1.5</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>MERN STACK</h1>
            <p>Developer</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>Persistent Systems</h1>
            <p>Organisation</p>
        </div>
      </div>
    </div>
  )
}

export default About
