
import React, { useState, useEffect } from 'react';

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
        return <div />
    } else {
        console.log(ExperiencesData["fr"]['experiences']);
        ExperiencesData["fr"]['experiences'].forEach((experience, index) => {
            experiences.push(<Cards experience={experience} index={index} key={index} />);
        });
    }

    return (
        <>
            <Header />


            <div className="card radius-0  primary-color pt-2 pb-2 mt-0">
                <div className="is-size-1 has-text-centered has-text-weight-bold pt-6 m-6 has-text-white is-relative">Mes expériences</div>
                <div className="is-size-4 has-text-centered m-4 has-text-white is-relative pb-6">
                    L'ensemble des postes que j'ai pu occuper</div>
            </div>

            <div className="mt-6"><br></br>

                <div className="columns is-multiline is-justify-content-center m-6">
                    {experiences}
                </div>

            </div>

            <Footer />
        </>

    )
}

export default Person;
