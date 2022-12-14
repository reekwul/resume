import React from 'react';
import classes from "./aboutme.module.css";
import Skils from '../../ArraySkils'
import ProgBar from '../../ArrayProgressev'
import ListItem from "../ui/list-item/list-item";
import ProgressBar from "../ui/progressbar/progress-bar";

const Aboutme = () => {

    return (
        <div className={classes.wrapper}>
            <div className={classes.about}>

                <p>
                    Последние несколько лет активно использую и изучаю язык программирования JavaScript.
                    <br/>
                    <br/>
                    Отучился 11 классов в школе,написал ЕГЭ, паралельно ходил на курсы по программированию. Позже занялся
                    самообразованием. Поступил в РУТ(МИИТ). Во время учёбы работал по специальности,
                    одновременно с этим занимаясь фрилансом. Хочу заменить фриланс на постоянное место работы,
                    свободного времени много.
                    <br/>
                    <br/>
                    Я общительный, трудолюбивый. Мне нравится ставить трудные цели и достигать их.
                    <br/>
                    <br/>
                    <strong>Цель:</strong> начать карьеру Junior Frontend Development и достичь уровня Middle
                </p>

                <h2 className={classes.name}>
                    Обо мне
                </h2>
            </div>
            <div className={classes.rez}>
                <div className={classes.skill}>
                    {Skils.map((el, id) =>
                        <ListItem
                            className={classes.item}
                            key={Date.now.toString()}
                            legend={el.name}
                            about={el.about}
                            id={`0${id + 1}`}
                        />)}
                </div>
                <h2 className={classes.name}>
                    Навыки
                </h2>
            </div>
            <div className={classes.progress}>
                <div className={classes['progress-block']}>
                    {
                        ProgBar.map(el => <ProgressBar key={Date.now.toString()} value={el.percent}
                                                       legend={el.legend}/>)
                    }

                </div>
                <h2 className={classes.name}>
                    Результаты
                </h2>
            </div>
        </div>
    );
};

export default Aboutme;