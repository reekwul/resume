import React from 'react';
import classes from "./footer.module.css";
import Btn from "../ui/btn/btn";
import download from '../../download'

const Footer = () => {
    const down =() => download("/file/rezume_Grigory_Besschetnov.pdf","rezume_Grigory_Besschetnov.pdf")
    return (
        <div className={classes.wrapper}>
            <hr className={classes.line}/>
            <div className={classes.content}>
                <div className={classes.contact}>
                    <div>
                        <h4>Телефон</h4>
                        <h6>+7(937)-550-67-69</h6>
                    </div>
                    <div >
                        <h4>Email</h4>
                        <h6>G.besscetnov@yandex.ru</h6>
                    </div>
                </div>
                <Btn
                    onClick={down}
                >Скачать в pdf</Btn>
            </div>

        </div>

    );
};

export default Footer;