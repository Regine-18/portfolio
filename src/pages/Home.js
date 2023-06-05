import React from 'react'
import MainNavbar from '../components/MainNavbar';
import Portfolio from '../components/Portfolio'
import AboutMe from '../components/AboutMe'
import Profile from '../components/Profile'
import ContactMe from '../components/ContactMe'
import Services from '../components/Services'
import Skills from '../components/Skills'


const Home = () => {

  return (
    <>
        <MainNavbar />
        <Profile />
        <AboutMe />
        <Skills />
        <Services />
        <Portfolio/>
        <ContactMe />
    </>
  )
}

export default Home