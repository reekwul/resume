import React from 'react';
import classes from "./footer.module.css";
import Btn from "../ui/btn/btn";
import download from '../../download'
import Contacts from '../ui/contacts/contacts';
import { MeRu } from '@/Contacts';

const Footer = () => {
    const down =() => download("/file/rezume.pdf","rezume_Grigory_Besschetnov.pdf")
    return (
        <div className={classes.wrapper}>
            <hr className={classes.line}/>
            <div className={classes['contact-block']}>
                <div className={classes.contact}>
                    <Contacts phone={MeRu.phone} email={MeRu.email} />
                </div>
                <Btn
                    onClick={down}
                >Скачать в pdf</Btn>
            </div>

        </div>

    );
};

export default Footer;