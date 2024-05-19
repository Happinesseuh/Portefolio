
import React, { useState, useEffect } from 'react';

import Header from '../components/header'
import Footer from '../components/footer'
// import Loading from '../components/loading'

import 'boxicons';
import { useTranslation } from 'react-i18next';

import Cards from '../components/cards'

import ExperiencesData from '../data/experiences.json'
import { AnimationOnScroll } from 'react-animation-on-scroll';


function Person() {
    const { t, i18n } = useTranslation();

    let experiences = [];

    let language = i18n.language;

    if (!ExperiencesData) {
        return <div />
    } else {
        console.log(ExperiencesData[language]['experiences']);
        ExperiencesData[language]['experiences'].forEach((experience, index) => {
            experiences.push(<Cards experience={experience} index={index} key={index} />);
        });
    }

    return (
        <>

            <Header />

            <AnimationOnScroll animateIn="animate__fadeIn">

                <div className="pt-6 mt-0">
                    <div className="p-4 mb-6 mt-6 is-size-2 has-text-centered text-underlined-purple is-size-3-mobile is-size-1 is-relative">{t('experiences')} <strong className="text-color-purple-light">.</strong></div>
                </div>

                <div className="mt-6"><br></br>

                    <div className="columns is-multiline is-justify-content-center m-6">
                        {experiences}
                    </div>

                </div>
            </AnimationOnScroll>

            <Footer />
        </>

    )
}

export default Person;
