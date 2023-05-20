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
import {Fade} from "react-awesome-reveal";
import postmanImg from './../assets/image/postman.svg'
import rhformImg from './../assets/image/rhform.svg'
import formikImg from './../assets/image/formik.svg'


function Skills() {
    const html = {backgroundImage: `url(${htmlImg})`}
    const js = {backgroundImage: `url(${jsImg})`}
    const react = {backgroundImage: `url(${reactImg})`}
    const redux = {backgroundImage: `url(${reduxImg})`}
    const ts = {backgroundImage: `url(${tsImg})`}
    const materialUI = {backgroundImage: `url(${MUImg})`}
    const postman = {backgroundImage: `url(${postmanImg})`}
    const reactHookForm = {backgroundImage: `url(${rhformImg})`}
    const formik = {backgroundImage: `url(${formikImg})`}
    //
    // const particlesOpt = {
    //     "particles": {
    //         "number": {
    //             "value": 150,
    //             "density": {
    //                 "enable" : true,
    //                 "value_area": 800
    //             }
    //         }
    //     }
    // }

    return (
        <div id={'skills'} className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <MainTitle textTitle={'SKILLS'}/>
                <Fade duration={2500}>
                    <div className={s.skills}>
                        <Skill style={html} title={'HTML&CSS&SASS'} description={'HTML is a markup language. CSS is a style language with which we give the style of displaying HTML content'}/>
                        <Skill style={js} title={'Javascript'} description={'A high-level interpreted programming language, mainly used in browsers to give interactivity to web pages.'}/>
                        <Skill style={react} title={'React'} description={'An open source JavaScript library for creating external user interfaces.'}/>
                        <Skill style={redux} title={'Redux (RTK)'} description={'An open source JavaScript library designed to manage the state of an application.'}/>
                        <Skill style={ts} title={'Typescript'} description={'Strongly typed programming language based on JavaScript'}/>
                        <Skill style={materialUI} title={'Material UI'} description={'Library for creating a design without using CSS layout and prescribing styles.'}/>
                        <Skill style={postman} title={'Postman'} description={'Service for creating, testing, documenting, publishing and maintaining APIs'}/>
                        <Skill style={reactHookForm} title={'React Hook Form'} description={'Library that reduces the amount of code you need to write by removing unnecessary re-renders.'}/>
                        <Skill style={formik} title={'Formik'} description={'Library that helps you work with forms. It makes it easier to get data from the form, validate data, output error messages, and much more.'}/>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Skills;