import React from 'react';
import classes from "./ProgressBar.module.css";

const ProgressBar = ({value,legend}) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.progress}>
                <progress
                    className={classes.bar}
                    max={100} value={value}>{value}%</progress>
                <p>
                    {value}%
                </p>
            </div>
            <h3>{legend}</h3>
        </div>
    );
};

export default ProgressBar;