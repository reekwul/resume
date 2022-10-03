import React from 'react';
import classes from "./btn.module.css";


const Btn = ({children,...props}) => {
    return (
        <button
            className={classes.btn}
            {...props}
        >{children}</button>
    );
};


export default Btn;