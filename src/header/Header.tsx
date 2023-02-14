import React from 'react';
import sContainer from "../common/styles/Container.module.css";
import s from './Header.module.scss';
import Nav from "../nav/Nav";
import bgImg from "../assets/image/bg2.jpg";
import sNav from './../nav/Nav.module.css';


function Header() {
    const bgPhoto = {
        backgroundImage: `url(${bgImg})`
    }
    return (
        <div style={bgPhoto} className={` ${s.bgPhotoStyles}`}>
            <div className={` ${sContainer.container} ${sNav.containerNav}` }>
                <div className={s.header}>
                    <Nav/>
                </div>
                <div className={s.bannerCaption}>
                    <h1>Hi! I'm Sveta</h1>
                    <p>FRONTEND DEVELOPER</p>
                </div>
                <div className={s.arrowDown}>
                    <a href={'#'}/>
                </div>
            </div>

        </div>

)
}

export default Header;