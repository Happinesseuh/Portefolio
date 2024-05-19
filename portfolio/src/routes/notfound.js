
import React from "react";

import Header from '../components/header'
import Footer from '../components/footer'

import { useTranslation } from 'react-i18next';
import { AnimationOnScroll } from 'react-animation-on-scroll';


import notfound from '../assets/notfound.png'


function NotFound() {

    const { t } = useTranslation();

    return (
        <>
            <Header />
            <AnimationOnScroll animateIn="animate__fadeIn">

                <div className="pt-6 mt-0">
                    <div className="p-4 ml-6 mb-6 mt-6 is-size-2 has-text-centered text-underlined-purple is-size-1 is-relative">{t('notfound_title')}<strong className="text-color-purple-light">.</strong></div>
                </div>

                <div className="has-text-centered is-size-4">{t('notfound_desc')}</div>


                <div className="mb-6 is-flex is-justify-content-center">
                    <img className="image" alt="notfound" src={notfound}></img>
                </div>
            </AnimationOnScroll>

            <Footer />
        </>
    )
}

export default NotFound;