import React, {useState} from 'react';
import s from "./Contacts.module.scss";
import sContainer from './../common/styles/Container.module.css'
import {MainTitle} from "../common/components/MainTitle";
import {send} from "emailjs-com";
import Stack from '@mui/material/Stack';
import LoadingButton from '@mui/lab/LoadingButton';

function Contacts() {

    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
    });
    const [loading, setIsLoading] = useState(false)

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
                setToSend({
                    from_name: '',
                    message: '',
                    reply_to: '',
                })
            })
            .catch((err: any) => {
                console.log('FAILED...', err);
            });
    };


    const handleChange = (e: any) => {
        setToSend({...toSend, [e.target.name]: e.target.value});
    };

    // @ts-ignore
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
                        <Stack direction="row" spacing={2}>
                            <LoadingButton loading={loading}

                                           variant="outlined"
                                           //disableRipple
                                           sx={{width: 150,
                                               backgroundColor: '#00acc1',
                                               color: 'white',
                                               borderColor: '#00acc1',
                                               borderRadius: 1,
                                               padding: 1,
                                               '.Mui-focusVisible': {
                                                   backgroundColor: '#00acc1!important'
                                               },
                                                  '.MuiButtonBase-root:hover': {
                                                      backgroundColor: '#00acc1'
                                           }
                                           }}>
                                Send message
                            </LoadingButton>
                        </Stack>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contacts;

//service_hzs5aik
//VbpZyaTbVQimDHaPLRE3