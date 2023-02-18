import React from 'react';
import s from './Nav.module.css';
import ParticlesComponent from "../common/components/Particle";
import {Link} from "react-scroll";

function Nav(){
    return (
        <div className={s.containerNav}>
            <div>
                <div className={s.nav}>
                    <a href='#' id={'home'}>Home</a>
                    <Link to={'main'} smooth={true} duration={500} activeClass={s.active}>About me</Link>
                    <Link to={'skills'} smooth={true} duration={500} activeClass={s.active}>Skills</Link>
                    <Link to={'projects'} smooth={true} duration={500}>Projects</Link>
                    <Link to={'contacts'} smooth={true} duration={500}>Contacts</Link>
                </div>
            </div>

        </div>

    )
}

export default Nav;