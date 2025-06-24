import React from 'react';
import Heder from "./header/heder";
import Aboutme from "./aboutme/aboutme";
import classes from "./App.module.css";


const App = () => {
    return (
        <div className={classes.wrapper}>
            <Heder/>
            <Aboutme/>
        </div>
    );
};

export default App;