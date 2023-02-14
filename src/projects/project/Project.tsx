import React from 'react';
import s from "./Project.module.scss"

function Project(props: any) {
    return (
        <div className={s.project}>
            <div style={props.style} className={s.icon}>
                <a href={'#'}></a>
            </div>
            <div className={s.information}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>

        </div>
    )
}

export default Project;