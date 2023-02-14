import React from 'react'
import s from './Footer.module.css'
import sContainer from './../common/styles/Container.module.css'
import linkedin from './../assets/image/linkedin.svg'
import codewars from './../assets/image/codewars.svg'
import github from './../assets/image/github.svg'


function Footer () {
    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <div className={s.socialMedia}>
                            <a href={'https://www.linkedin.com/in/svetlana-kozlova-b74211231/'} target={'_blank'}>
                                <img src={linkedin} width={'24px'} height={'24px'} alt={'Linkedin'}/>
                            </a>
                            <a href={'https://github.com/SvetaK7'} target={'_blank'}>
                                <img src={github} width={'24px'} height={'24px'}  alt={'GitHub'}/>
                            </a>
                            <a href={'https://www.codewars.com/users/SvetaK7'} target={'_blank'}>
                                <img src={codewars} width={'24px'} height={'24px'}  alt={'Codewars'}/>
                            </a>
                </div>
                <div className={s.copyright}>
                    <span>Copyrights © 2022 </span>
                    <a href={'#'}>Sveta</a>
                    <span>.</span>
                    <p>All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;