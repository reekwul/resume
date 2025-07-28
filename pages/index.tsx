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
                <title>Web Developer & Middle Frontend Developer | Григорий Бессчетнов</title>
                <meta name="description" content="Григорий Бессчетнов — Middle Frontend Developer (Vue.js) с 4+ годами коммерческого опыта. Резюме и портфолио." />
                <meta name="keywords" content="Frontend, Vue.js, JavaScript, разработчик, резюме, портфолио, Григорий Бессчетнов" />
                <meta name="author" content="Григорий Бессчетнов" />

                <meta property="og:title" content="Web Developer & Middle Frontend Developer | Григорий Бессчетнов" />
                <meta property="og:description" content="Григорий Бессчетнов — Middle Frontend Developer (Vue.js) с 4+ годами коммерческого опыта. Резюме и портфолио." />
                <meta property="og:url" content="https://grigory-besschetnov-resume.netlify.app" />
                <meta property="og:image" content="https://grigory-besschetnov-resume.netlify.app/favicon.ico" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="ResumeBesschetnovGA" />
                <meta property="og:locale" content="ru_RU" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Web Developer & Middle Frontend Developer | Григорий Бессчетнов" />
                <meta name="twitter:description" content="Григорий Бессчетнов — Middle Frontend Developer (Vue.js) с 4+ годами коммерческого опыта. Резюме и портфолио." />
                <meta name="twitter:image" content="https://grigory-besschetnov-resume.netlify.app/favicon.ico" />
                <meta name="twitter:site" content="@ваш_twitter_аккаунт" /> 


                <meta name="robots" content="index, follow" /> 
                <link rel="canonical" href="https://grigory-besschetnov-resume.netlify.app" /> 

                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#ffffff" /> 

                <link rel="icon" href="https://grigory-besschetnov-resume.netlify.app/favicon.ico" type="image/x-icon" />
                <link rel="shortcut icon" href="https://grigory-besschetnov-resume.netlify.app/favicon.ico" type="image/x-icon" />

                <link rel="apple-touch-icon" href="https://grigory-besschetnov-resume.netlify.app/favicon.ico" />
                <meta name="apple-mobile-web-app-title" content="Резюме Бессчетнов" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

                <meta name="msapplication-TileImage" content="https://grigory-besschetnov-resume.netlify.app/favicon.ico" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-config" content="browserconfig.xml" />
            </Head>
            <div className={classes.wrapper}>
                <App/>
            </div>
            <Footer/>
        </>

    )
}

export default Home
