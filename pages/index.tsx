import type {NextPage} from 'next'
import App from '../src/App'
import classes from "../styles/Home.module.css";
import Footer from "../src/footer/footer";
import React from "react";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Резюме</title>
            </Head>
            <div className={classes.wrapper}>
                <App/>
            </div>
            <Footer/>
        </>

    )
}

export default Home
