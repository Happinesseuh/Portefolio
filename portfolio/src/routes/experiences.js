
import React from "react";

import Header from '../components/header'
import Footer from '../components/footer'


// import { useTranslation } from 'react-i18next';

import 'boxicons';
// import { useTranslation } from 'react-i18next';

import Cards from '../components/cards'
// import Loading from '../components/loading'

import ExperiencesData from '../data/experiences.json'


function Person() {
    // const { t, i18n } = useTranslation();

    let experiences = [];

    // let language = i18n.language;

    if (!ExperiencesData) {
        return <div/>
    } else {
        ExperiencesData["en"][0]['experiences'].forEach((experience, index) => {
            experiences.push(<Cards experience={experience} index={index} key={index}/>);
        });
    }

    return (
        <>
            <header>
                <section className="section primary-color">
                    <Header />
                </section>
            </header>

            <div className=""><br></br>

                <div className="columns is-multiline is-justify-content-center m-6">
                    {experiences}
                </div>

            </div>

            <Footer />

        </>

    )
}

export default Person;
