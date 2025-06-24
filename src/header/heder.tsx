import React from 'react';

import classes from "./heder.module.css";
import Btn from "../ui/btn/btn";
import download from "../../download";
import Contacts from '../ui/contacts/contacts';
import { MeRu } from '@/Contacts';  
const Heder = () => {
    const down = () => download("/file/rezume.pdf", "rezume_Grigory_Besschetnov.pdf")
    return (
        <div className={classes.wrapper}>
            <div className={classes.text}>
                <h1 className={classes['text-h1']}>Привет!</h1>
                <h2 className={classes['text-h2']}>Я Григорий Бессчетнов</h2>
                <h6 className={classes['text-h6']}>Web Developer & Middle frontend developer</h6>
                <Btn onClick={down} >Скачать в pdf</Btn>
                <hr className={classes.line}/>
                <div className={classes.contact}>
                    <Contacts {...MeRu} />
                </div>
            </div>
            <div className={classes.face}>
            </div>
        </div>
    );
};

export default Heder;