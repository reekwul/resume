import React from 'react';

import classes from "./heder.module.css";
import Btn from "../ui/btn/btn";
import download from "../../download";

const Heder = () => {
    const down = () => download("/file/rezume.pdf", "rezume_Grigory_Besschetnov.pdf")
    return (
        <div className={classes.wrapper}>
            <div className={classes.text}>
                <h1 className={classes['text-h1']}>Привет!</h1>
                <h2 className={classes['text-h2']}>Я Григорий Бессчетнов</h2>
                <h6 className={classes['text-h6']}>Web Developer & Front-end Junior</h6>
                <Btn onClick={down} >Скачать в pdf</Btn>
                <hr className={classes.line}/>
                <div className={classes.contact}>
                    <div className={classes['module-visible']} >
                        <h2 className={classes.headers}>Город</h2>
                        <h4 className={classes.telo}>Волгоград</h4>
                    </div>
                    <div >
                        <h2 className={classes.headers}>Телефон</h2>
                        <h4 className={classes.telo}>+7(937)-550-67-69</h4>
                    </div>
                    <div >
                        <h2 className={classes.headers}>Email</h2>
                        <h4 className={classes.telo}>G.besscetnov@yandex.ru</h4>
                    </div>
                </div>
            </div>
            <div className={classes.face}>
            </div>
        </div>
    );
};

export default Heder;