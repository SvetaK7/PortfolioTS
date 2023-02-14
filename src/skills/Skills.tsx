import React from 'react';
import s from './Skills.module.scss';
import sContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import {MainTitle} from "../common/components/MainTitle";
import htmlImg from "./../assets/image/html.svg"
import jsImg from "./../assets/image/js2.svg"
import reactImg from "./../assets/image/react2.svg"
import reduxImg from "./../assets/image/redux2.svg"
import tsImg from "./../assets/image/ts2.svg"
import MUImg from "./../assets/image/materialUi2.svg"

function Skills() {

    const html = {
        backgroundImage: `url(${htmlImg})`
    }
    const js = {
        backgroundImage: `url(${jsImg})`
    }
    const react = {
        backgroundImage: `url(${reactImg})`
    }
    const redux = {
        backgroundImage: `url(${reduxImg})`
    }
    const ts = {
        backgroundImage: `url(${tsImg})`
    }
    const materialUI = {
        backgroundImage: `url(${MUImg})`
    }

    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <MainTitle textTitle={'SKILLS'}/>
                <div className={s.skills}>
                    <Skill style={html} title={'HTML&CSS&SASS'} description={'Web design is a similar process of creation, with the intention of presenting...\'Web design is a similar process of creation, with the intention of presenting...'}/>
                    <Skill style={js} title={'Javascript'} description={'Web design is a similar process of creation, with the intention of presenting...'}/>
                    <Skill style={react} title={'React'} description={'Web design is a similar process of creation, with the intention of presenting...'}/>
                    <Skill style={redux} title={'Redux'} description={'Web design is a similar process of creation, with the intention of presenting...Web design is a similar process of creation, with the intention of pres'}/>
                    <Skill style={ts} title={'Typescript'} description={'Web design is a similar process of creation, with the intention of presenting...Web design is a similar process of creation, with the intention of pres'}/>
                    <Skill style={materialUI} title={'Material UI'} description={'Web design is a similar process of creation, with the intention of presenting...Web design is a similar process of creation, with the intention of pres'}/>
                </div>
            </div>
        </div>
    )
}

export default Skills;