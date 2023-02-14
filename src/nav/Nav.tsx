import React from 'react';
import s from './Nav.module.css';

function Nav(props){
    return (
        <div className={s.containerNav}>
            <div>
                <div className={s.nav}>
                    <a href=''>Home</a>
                    <a href=''>Skills</a>
                    <a href=''>Projects</a>
                    <a href=''>Contacts</a>
                </div>
            </div>

        </div>

    )
}

export default Nav;