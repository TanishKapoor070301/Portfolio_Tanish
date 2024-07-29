import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile_pic from '../../assets/profile_pic.JPG'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_pic} alt="" className='profile-img' />
      <h1><span>I'm Tanish Kapoor,</span> Full Stack developer based in India.</h1>
      <p>I am a Full Stack developer from Pune, India with 1.5 years of experience in Persistent Systems.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <a href='https://drive.google.com/file/d/1FlsJ57i8AchWSZc_kApiQTPQbmeVwZnl/view'><div className="hero-resume">My resume</div></a>
      </div>
    </div>
  )
}

export default Hero
