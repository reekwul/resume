import React from 'react';
import classes from "./ListItem.module.css";

const ListItem = ({name,about,id,...props}) => {
    return (
        <div {...props}>
            <div className={classes.wrapper} >
                <h2>{id}</h2>
                <div className={classes.content}>
                    <h3>
                        {name}
                    </h3>
                    <p>
                        {about}
                    </p>
                </div>
            </div>
        </div>

    );
};

export default ListItem;