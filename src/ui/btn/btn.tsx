import React from 'react';
import classes from "./btn.module.css";


const Btn = ({...props}) => {
    return (
        <button
            className={classes.btn}
            {...props}
        >{props.children}</button>
    );
};


export default Btn;