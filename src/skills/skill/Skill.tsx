import React from 'react';
import s from './Skill.module.scss';

function Skill(props){
    return (
        <div className={s.skill}>
            <div style={props.style} className={s.icon}></div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>

        </div>
    )
}

export default Skill;