import React from 'react';
import Navbar from "../components/Navbar"
import Business from '../components/Business'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Advert from '../components/Advert'
import Demo from '../components/Demo';
import Footer from '../components/Footer'

const HomePage = () => {
    return (
        <>
            <Navbar/>
            <Hero />
            <Business />
            <HowItWorks />
            <Advert />
            <Demo />
            <Footer />
        </>
    )
}

export default HomePage;