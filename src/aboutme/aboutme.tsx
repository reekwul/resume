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

                    Отучился 11 классов в школе, паралельно ходил на курсы по программированию. Позже занялся
                    самообразованием и написал ЕГЭ. Поступил в РУТ(МИИТ). Во время учёбы работал по специальности,
                    одновременно с этим занимаясь фрилансом. Хочу заменить фриланс на постоянное место работы,
                    свободного времени много.

                    Я общительный, трудолюбивый, мне нравится ставить трудные цели и достигать их.

                    Цель: начать карьеру Junior Frontend Development и достич уровня Middle
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
                            key={id}
                            name={el.name}
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
                        ProgBar.map(el=><ProgressBar value={el.percent} legend={el.legend}/>)
                    }

                </div>
                <h2 className={classes.name}>
                    Прогресс
                </h2>
            </div>
        </div>
    );
};

export default Aboutme;