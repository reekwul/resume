import type {NextPage} from 'next'
import App from '../src/App'
import classes from "../styles/Home.module.css";
import Footer from "../src/footer/footer";
import React from "react";

const Home: NextPage = () => {
    return (
        <>
            <div className={classes.wrapper}>
                <App/>
            </div>
            <Footer/>
        </>

    )
}

export default Home
