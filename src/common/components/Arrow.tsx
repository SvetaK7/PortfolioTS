import React, {useEffect} from 'react';
import s from "../../header/Header.module.scss";
import style from './Arrow.module.scss'
import {Link} from "react-scroll";
import arrow from "../../assets/image/arrow.svg";

export const Arrow = () => {

    return (
        <div className={style.arrowPosition}>
            <Link to={'home'} smooth={true} duration={500}>
                <div className={style.colorArrow}><img src={arrow} width={'70px'} height={'70px'}/></div>
            </Link>
        </div>

    )
}