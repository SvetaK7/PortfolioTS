import React from "react";
import s from './projects.module.scss';
import sContainer from './../common/styles/Container.module.css'
import Project from "./project/Project";
import {MainTitle} from "../common/components/MainTitle";
import socialNetworkImg from "./../assets/image/social_network.jpg"
import todolistImg from "./../assets/image/tdL5.jpg"
import counterImg from "./../assets/image/counter4.jpg"
import {Fade} from "react-awesome-reveal";

function Projects() {
    const socialNetwork = {
        backgroundImage: `url(${socialNetworkImg})`,
        // overflow: 'hidden'
    }

    const todolist = {
        backgroundImage: `url(${todolistImg})`
    }

    const counter = {
        backgroundImage: `url(${counterImg})`,

    }
    return (

        <div id={'projects'} className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <MainTitle textTitle={'PROJECTS'}/>
                <Fade duration={2500}>
                    <div className={s.projects}>
                        <Project style={socialNetwork} title={'Social Network'} description={'Social Network created of React and typescript'}/>
                        <Project style={todolist} title={'Todolist'}
                                 description={'List of tasks for each on the react and typescript. List of tasks for each on the react and typescript.'}/>
                        <Project style={counter} title={'Counter'} description={'Simple counter created of React and TypeScript'}/>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Projects;