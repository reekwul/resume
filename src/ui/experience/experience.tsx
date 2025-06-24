import React from "react";
import classes from "./experience.module.css"
import { WorksMe } from "@/types/works";


const Experience = (props:{works:WorksMe[]})=>{
    const {works} = props
    return (
        <div className={classes.experience}>
            <h2 className={classes.experience__header}>
                Опыт работы
            </h2>
            <ul className={classes.work_list}>
                {
                    works.map((work, index)=>
                        <li className={classes.work_list__item} key={"work_item-"+index}>
                            <div className={classes.work__time}>
                                <h4>{work.period}</h4>
                                <p>{work.duration}</p>
                            </div>
                            <div className={classes.company}>
                                <div>
                                    <a href={work.company_link} target="_blank" className={classes.company__link}>
                                        <h4 className={classes.company__link__text}>{work.company_name}</h4>
                                    </a>
                                    <p className={classes.company__position}>
                                       {work.position}
                                    </p>
                                </div>
                                
                                <div className={classes.stack}>
                                    <h4 className={classes.stack__header}>Стек 🛠</h4>
                                    <div className={classes.stack__list}>
                                        {
                                            work.company_techologies.map((el,index)=>
                                                <span className={classes.stack__list__item} key={"techologies-"+index}>
                                                    {el}
                                                </span>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className={classes.results}>
                                    <p className={classes.results__about}>
                                        {work.about}
                                    </p>
                                    {work.achivments && work.achivments.length?
                                        <div className={classes.results__achievements}>
                                            <h5 className={classes.results__achievements__header}>Достижения:</h5>
                                            <ul className={classes.results__achievements__list}>
                                                {work.achivments.map(el=>
                                                    <li className={classes.results__achievements__list_items}>{el}</li>
                                                )}
                                            </ul>
                                        </div>
                                        :''
                                    }

                                    {work.indicators && work.indicators.length ?
                                        <div className={classes.results__indicators}>
                                            <h5 className={classes.results__indicators__header}>Показатели в цифрах</h5>
                                            <ul className={classes.results__indicators__list}>
                                                {work.indicators.map(el=>
                                                    <li className={classes.results__indicators__list_items}>{el}</li>
                                                )}
                                            </ul>
                                        </div>
                                        :''
                                    }
                                </div>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Experience