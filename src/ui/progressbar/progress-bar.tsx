import React from 'react';
import classes from "./ProgressBar.module.css";

const ProgressBar = ({...props}) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.progress}>
                <progress
                    className={classes.bar}
                    max={100} value={props.value}>{props.value}%</progress>
                <p>
                    {props.value}%
                </p>
            </div>
            <h3>{props.legend}</h3>
        </div>
    );
};

export default ProgressBar;