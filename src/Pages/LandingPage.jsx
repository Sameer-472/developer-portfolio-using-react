import React from 'react'
import Header from '../Components/Header/Header'
import Skills from '../Components/Skills/Skills'
import { Experience } from '../Components/Experience/Experience'
import { Projects } from '../Components/Projects/Projects'
import { Blogs } from '../Components/Blogs/Blogs'
// import { Contact } from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'

const LandingPage = () => {
  return (
    <div>
        <Header/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Blogs/>
        {/* <Contact/> */}
        <Footer/>
    </div>
  )
}

export default LandingPage