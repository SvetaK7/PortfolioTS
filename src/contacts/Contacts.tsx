import React, {useEffect, useState} from 'react';
import s from "./Contacts.module.scss";
import sContainer from './../common/styles/Container.module.css'
import {MainTitle} from "../common/components/MainTitle";
import {send} from "emailjs-com";

function Contacts() {

    // useEffect(() => {
    //     document.addEventListener('submit', (e) => {
    //         // e.preventDefault();
    //         // @ts-ignore
    //         console.log(e.target);
    //         // @ts-ignore
    //         e.target.reset();
    //     })
    // }, [])
    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e: any) => {
        e.preventDefault();
        send(
            'service_hzs5aik',
            'template_unf2z39',
            toSend,
            'VgyohuyFH3kMERxEo'
        )
            .then((response: any) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err: any) => {
                console.log('FAILED...', err);
            });
    };

    const handleChange = (e: any) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div id={'contacts'} className={s.contactsBlock}>
            <div className={`${sContainer.container}`}>
                <MainTitle textTitle={'CONTACT'}/>
                <div className={s.formContainer}>
                    <form onSubmit={onSubmit} className={s.formContacts}>
                        <input placeholder={'Name'}
                               type='text'
                               name='from_name'
                               value={toSend.from_name}
                               onChange={handleChange}
                        />
                        <input placeholder={'Email'}
                               type='text'
                               name='reply_to'
                               value={toSend.reply_to}
                               onChange={handleChange}
                        />
                        <input placeholder={'Message'}
                                  type='text'
                                  name='message'
                                  value={toSend.message}
                                  onChange={handleChange}
                        ></input>
                        <button type={'submit'} className={s.buttonSend}>Send message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contacts;

//service_hzs5aik
//VbpZyaTbVQimDHaPLRE3