import React from 'react';
import classes from "./ListItem.module.css";

const ListItem = ({...props}) => {
    return (
        <div {...props}>
            <div className={classes.wrapper} >
                <h2>{props.id}</h2>
                <div className={classes.content}>
                    <h3>
                        {props.name}
                    </h3>
                    <p>
                        {props.about}
                    </p>
                </div>
            </div>
        </div>

    );
};

export default ListItem;