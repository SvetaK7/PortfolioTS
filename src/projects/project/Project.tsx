import React from 'react';
import s from "./Project.module.scss"

type Props = {
  href: string
  style: {}
  title: string
  description: string
  stack: string
  linkToCode: string
}
function Project(props: Props) {
  return (
    <div className={s.project}>
      <a href={props.href} target="_blank">
        <div style={props.style} className={s.icon}/>
      </a>
      <div className={s.information}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p className={s.stack}>{props.stack}</p>
        <div className={s.linkToCode}><a href={props.linkToCode} target="_blank"><span>Code</span></a></div>
      </div>
    </div>
  )
}

export default Project;