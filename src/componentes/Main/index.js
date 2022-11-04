import React from 'react';
import HeroSection from '../Hero'
import About from '../About';
import MyGuess from '../Myguess';
import Info from '../Info';
import './style.css'

function Main () {
    return (
        <div className='main_Container'>
            <HeroSection />
            <About />
            <MyGuess />
            <Info />
        </div>
    );
};

export default Main;
