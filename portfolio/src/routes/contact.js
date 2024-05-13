
import React from "react";

import Header from '../components/header'
import Footer from '../components/footer'
// import SimpleSlider from '../components/simpleSlider'
// import Footer from '../components/footer'
// import Characteristics from '../components/characteristics'
// import Objectives from '../components/objectives'
// import Sample from '../components/sample'
// import Partners from "../components/partners";

import { useTranslation } from 'react-i18next';



function Home() {

    const { t } = useTranslation();

    return (
        <>
            <Header />

            <div className="card radius-0  primary-color pt-2 pb-2 mt-0">
                <div className="is-size-1 has-text-centered has-text-weight-bold pt-6 m-6 has-text-white is-relative">Contactez-moi !</div>
                <div className="is-size-4 has-text-centered m-4 has-text-white is-relative pb-6">
                    Vous pouvez me joindre par téléphone, par mail ou via linkedin</div>
            </div>

            <div className="my-6">

            <div className="columns m-6">
                <div className="column card has-text-centered pb-6 mb-0 mr-6">
                    <box-icon type='solid' name='phone' size='lg'></box-icon>
                    <div className="is-size-4">Au téléphone</div>
                    <a href="tel:+33781594402">+33 7 81 59 44 02</a>
                </div>
                <div className="column card has-text-centered pb-6 mb-0 mr-6">
                    <box-icon name='envelope' type='solid' size='lg'></box-icon>
                    <p className="is-size-4">Par mail</p>
                    <a href="mailto:ines.maaroufi@epitech.eu">ines.maaroufi@epitech.eu</a>
                </div>
                <div className="column card has-text-centered pb-6">
                    <box-icon name='linkedin-square' type='logo' size='lg'></box-icon>
                    <p className="is-size-4">Via Linkedin</p>
                    <a href="https://www.linkedin.com/in/ines-maaroufi/">https://www.linkedin.com/in/ines-maaroufi/</a>
                </div>
            </div>

            </div>
            <Footer />
        </>
    )
}

export default Home;