import React from 'react';
import classes from "./ListItem.module.css";

const ListItem = ({...props}) => {
    return (
        <div {...props}>
            <div className={classes.wrapper} >
                <h2 className={classes.id}>{props.id}</h2>
                <div className={classes.content}>
                    <h3 className={classes['content-name']}>
                        {props.legend}
                    </h3>
                    <p className={classes['content-about']}>
                        {props.about}
                    </p>
                </div>
            </div>
        </div>

    );
};

export default ListItem;