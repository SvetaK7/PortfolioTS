import React from 'react';
import s from './MainTitle.module.scss';

export function MainTitle(props) {
    return(
        <div className={s.blockTitle}>
            <div className={s.lineBefore}></div>
            <h2 className={s.title}>{props.textTitle}</h2>
            <div className={s.lineAfter}></div>
        </div>
    )
}