import React from 'react';
import sContainer from "../common/styles/Container.module.css";
import s from './Header.module.scss';
import Nav from "../nav/Nav";
import bgImg from "../assets/image/bg2.jpg";
import sNav from './../nav/Nav.module.css';
import ParticlesComponent from "../common/components/Particle";
import ReactTypingEffect from "react-typing-effect";
import {Link} from "react-scroll";


function Header() {
    const bgPhoto = {
        backgroundImage: `url(${bgImg})`
    }
    return (
        <div className={s.bgPhotoStyles}>
            <ParticlesComponent/>
            <div className={` ${sContainer.container} ${sNav.containerNav}`}>

                <div className={s.header}>
                    <Nav/>
                </div>
                <div className={s.bannerCaption}>
                    <h1>Hi! I'm Sveta</h1>
                    {/*<Test/>*/}
                    <div className={s.typingTextBlock}>
                        <ReactTypingEffect text={['FRONTEND DEVELOPER', 'REACT DEVELOPER']}
                                           typingDelay={400}
                                           eraseDelay={500}
                                           eraseSpeed={30}
                                           className={s.typingText}/>
                    </div>

                    <div className={s.CV}>
                        <a href={require('./../CV Kozlova_Svetlana.pdf')} download>Download CV</a>
                    </div>
                </div>
                {/*<div className={s.arrowDown}>*/}
                {/*    <a href={'#'}/>*/}
                {/*</div>*/}
                <div className={s.arrowPosition}>
                    <Link to={'main'} smooth={true} duration={500}>
                        <div className={s.arrowDown}/>
                    </Link>
                </div>


            </div>
        </div>


    )
}

export default Header;