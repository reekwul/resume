import React from 'react';
import classes from "./aboutme.module.css";
import Skils from '../../ArraySkils'
import ProgBar from '../../ArrayProgressev'
import ListItem from "../ui/list-item/list-item";
import ProgressBar from "../ui/progressbar/progress-bar";
import Experience from '../ui/experience/experience';
import {Works} from "../../ArrayWorks"


const Aboutme = () => {

    return (
        <div className={classes.wrapper}>
            <div className={classes.about}>
                <div className={classes.about__text}>
                    <p>
                    Middle Frontend Developer с 4+ годами коммерческого опыта на Vue.js.
                    </p>
                    <p>
                        Специализация:
                    </p>
                    <ul>
                        <li>Разработка высоконагруженных приложений на Vue 3/Nuxt</li>
                        <li>Оптимизация производительности (ускорение на 40-65% в проектах)</li>
                        <li>Полный цикл разработки от архитектуры до финального релиза</li>
                    </ul>

                    <p>
                        Открыт к интересным предложениям в продуктовых компаниях и аутсорсе.
                        Готов к сложным задачам и работе с современным стеком.
                    </p>
                </div>
                
                <h2 className={classes.name}>
                    Обо мне
                </h2>
            </div>
            <Experience works={Works} />
            <div className={classes.rez}>
                <div className={classes.skill}>
                    {Skils.map((el, id) =>
                        <ListItem
                            className={classes.item}
                            key={id}
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
                    { ProgBar.map((el,id )=> 
                    <ProgressBar 
                        key={"bar-"+id} 
                        value={el.percent}
                        legend={el.legend}
                    />
                    )}

                </div>
                <h2 className={classes.name}>
                    Результаты
                </h2>
            </div>
        </div>
    );
};

export default Aboutme;