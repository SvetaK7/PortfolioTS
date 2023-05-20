import React from "react";
import s from './projects.module.scss';
import sContainer from './../common/styles/Container.module.css'
import Project from "./project/Project";
import {MainTitle} from "../common/components/MainTitle";
import socialNetworkImg from "./../assets/image/social_network.jpg"
import todolistImg from "./../assets/image/tdL5.jpg"
import counterImg from "./../assets/image/counter4.jpg"
import converterImg from "./../assets/image/converterCurrently.jpg"
import cardsImg from "./../assets/image/cards2.jpg"
import {Fade} from "react-awesome-reveal";

function Projects() {
  const socialNetwork = {backgroundImage: `url(${socialNetworkImg})`};
  const todolist = {backgroundImage: `url(${todolistImg})`};
  const counter = {backgroundImage: `url(${counterImg})`};
  const converter = {backgroundImage: `url(${converterImg})`};
  const cards = {backgroundImage: `url(${cardsImg})`};

  return (

    <div id={'projects'} className={s.projectsBlock}>
      <div className={`${sContainer.container} ${s.projectsContainer}`}>
        <MainTitle textTitle={'PROJECTS'}/>
        <Fade duration={2500}>
          <div className={s.projects}>
            <Project style={cards}
                     title={'Сard training'}
                     description={'Simple counter created of React and TypeScript'}
                     href={'https://leskevich.github.io/cards'}
                     linkToCode={'https://github.com/SvetaK7/Currency-converter'}
            />
            <Project style={todolist}
                     title={'Todolist'}
                     href={'https://SvetaK7.github.io/TodoList'}
                     description={'List of tasks for each on the react and typescript. List of tasks for each on the react and typescript.'}
                     linkToCode={'https://github.com/SvetaK7/TodoList'}
            />
            <Project style={counter}
                     title={'Counter'}
                     description={'Simple counter created of React and TypeScript, Redux'}
                     href={'https://SvetaK7.github.io/Counter'}
                     linkToCode={'https://github.com/SvetaK7/Counter'}
            />
            <Project style={converter}
                     title={'Currency converter'}
                     description={'Simple counter created of React and TypeScript'}
                     href={'https://svetak7.github.io/Currency-converter/'}
                     linkToCode={'https://github.com/SvetaK7/Currency-converter'}
            />
            <Project style={todolist}
                     title={'Todolist (RTK)'}
                     description={'Simple counter created of React and TypeScript'}
                     href={'https://SvetaK7.github.io/Todo-RTK'}
                     linkToCode={'https://github.com/SvetaK7/Todo-RTK'}
            />
            <Project href={'https://github.com/SvetaK7/samurai-way-main'}
                     style={socialNetwork}
                     title={'Social Network'}
                     description={'Social Network created of React and typescript'}
                     linkToCode={'Social Network created of React and typescript'}
            />
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Projects;