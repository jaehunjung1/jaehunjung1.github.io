import React from 'react';

import PersonalLink from '../components/personal-link'
import profilePic from "../images/profilePic.JPG"
import style from './style/hero.module.css'



const Hero = () => {
    return (
        <div className={style.heroContainer}>
            <div className={style.intro}>
                <h1 className={style.title}>JAEHUN JUNG</h1>
                <h2 className={style.about}>
                  I am a Ph.D student in Computer Science at the University of Washington, advised by Yejin Choi.
                  I work in the area of Natural Language Processing, and am particularly interested in
                  generation and generation-guided reasoning.
                </h2>
                <h2 className={style.about}>
                  I graduated from Seoul National University with Bachelor's degree in Computer Science. I was fortunate
                  to be advised by Professor Jinwook Seo and Professor U Kang.
                </h2>

                <div className={style.links}>
                    <PersonalLink
                    imgSrc="download.png" 
                    linkTitle="Download CV"
                    href="pdf/JaehunJung_CV.pdf"
                    />
                    <PersonalLink 
                        imgSrc="github.svg" 
                        linkTitle="/jaehunjung1"
                        href="https://github.com/jaehunjung1"
                    />
                    <PersonalLink 
                        imgSrc="email.png" 
                        linkTitle="hoony123@cs.washington.edu"
                    />

                </div>
            </div>
            <img src={profilePic} className={style.profilePic} alt={"Profile Picture"}/>
           
                
        </div>
        
    )

};


export default Hero;