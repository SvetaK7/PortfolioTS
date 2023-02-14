import React from 'react';
import s from "./Contacts.module.scss";
import sContainer from './../common/styles/Container.module.css'
import {MainTitle} from "../common/components/MainTitle";

function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container}`}>
                <MainTitle textTitle={'CONTACT'}/>
                <div className={s.formContainer}>
                    <form className={s.formContacts}>
                        <input placeholder={'Name'}/>
                        <input placeholder={'Email'}/>
                        <textarea placeholder={'Message'}></textarea>
                    </form>
                    <button type={'submit'} className={s.buttonSend}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Contacts;