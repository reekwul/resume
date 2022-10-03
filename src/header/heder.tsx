import React from 'react';

import classes from "./heder.module.css";
import Btn from "../ui/btn/btn";
import download from "../../download";

const Heder = () => {
    const down = () => download("/file/rezume_Grigory_Besschetnov.pdf", "rezume_Grigory_Besschetnov.pdf")
    return (
        <div className={classes.wrapper}>
            <div className={classes.text}>
                <h1>Привет!</h1>
                <h2>Я Григорий Бессчетнов</h2>
                <h6>Web Developer & Front-end Junior</h6>
                <Btn onClick={down} >Скачать в pdf</Btn>
                <hr className={classes.line}/>
                <div className={classes.contact}>
                    <div className={classes['contact-block']}>
                        <h2>Город</h2>
                        <h4>Волгоград</h4>
                    </div>
                    <div>
                        <h2>Телефон</h2>
                        <h4>+7(937)-550-67-69</h4>
                    </div>
                    <div>
                        <h2>Email</h2>
                        <h4>G.besscetnov@yandex.ru</h4>
                    </div>
                </div>
            </div>
            <div className={classes.face}>
            </div>
        </div>
    );
};

export default Heder;