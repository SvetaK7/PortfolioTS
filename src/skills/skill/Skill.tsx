import React from 'react';
import s from './Skill.module.scss';

type SlillType = {
    style: {
        backgroundImage: string
    }
    title: string
    description: string
}
function Skill(props: SlillType){
    return (
        <div className={s.skill}>
            <div style={props.style} className={s.icon}></div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>

        </div>
    )
}

export default Skill;