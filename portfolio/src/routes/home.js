
import React from "react";

import Header from '../components/header'
import Footer from '../components/footer'
// import SimpleSlider from '../components/simpleSlider'
// import Footer from '../components/footer'
// import Characteristics from '../components/characteristics'
// import Objectives from '../components/objectives'
// import Sample from '../components/sample'
// import Partners from "../components/partners";

import ines from '../assets/ines_maaroufi.png'

import { useTranslation } from 'react-i18next';



function Home() {

    const { t } = useTranslation();

    return (
        <div className="primary-color">
            <Header />
            <div class="columns is-centered mt-6 mb-0 pb-6 primary-color">
                <div class="column is-three-fifths mb-0 pb-0">
                    <div className="m-5 has-text-weight-bold is-jusitfy-content-center has-text-big-size has-text-white mb-0">
                        <div className="content is-flex is-align-items-center pl-2 ml-6 pt-6">
                            <p>Hi,<br />I'm <strong className="has-text-pink-light">Inès Maaroufi</strong><br />Fullstack Developer</p>
                        </div>
                        <div className="column mb-0">
                            <a href="/Contact">
                                <button class="ml-6 button is-large primary-color has-text-white">Contact me !</button>
                            </a>

                        </div>
                    </div>
                </div>

                <div class="column mb-0 pb-0">
                    <div className="m-5 is-size-1 mb-0 has-text-weight has-text-white column">
                        <img className="image is-4by5" alt="ines" src={ines}></img>
                    </div>
                </div>
            </div>

            <div className="card primary-color-brown-light radius-0 has-text-centered p-5 mb-0">
                <div className="p-4 ml-6 mb-6 is-size-2 has-text-centered text-underlined-purple">À propos de moi <strong className="text-color-purple-light">.</strong></div>
                <div className="p-4 ml-6 is-size-5">Actuellement étudiante en 5ème année à <strong className="has-text-brown">Epitech Paris</strong>, et future diplômée (2025), je suis à la recherche d'un  <strong className="has-text-brown">part-time</strong> de 3 jours par semaine <strong className="has-text-brown">(Lundi, mardi, mercredi)</strong> débutant le 02/09/24 et finissant le 26/02/25, pouvant déboucher sur un <strong className="has-text-brown">stage de fin d'étude</strong></div>
            </div>

            <div className="card radius-0 has-text-centered p-5">
                <div className="p-4 ml-6 mb-6 is-size-2 has-text-centered text-underlined-purple">Mes compétences <strong className="text-color-purple-light">.</strong></div>
                <div className="columns p-6">
                    <div className="column">
                        <p className="has-text-weight-bold">Dev<strong className="text-color-purple-light"> Fullstack</strong></p><br />
                        <p>Angular<br />Flutter<br />React Native<br />React<br />NodeJS<br />MySQL<br />PHP<br />CSS<br />HTML<br />JQuery</p>
                    </div>
                    <div className="column">
                        <p className="has-text-weight-bold">Dev<strong className="text-color-purple-light">Ops</strong></p><br />
                        <p>Jenkins<br />Git Actions<br />Docker</p>
                    </div>
                    <div className="column">
                        <p className="has-text-weight-bold">Scrap<strong className="text-color-purple-light">ping</strong></p><br />
                        <p>Scrapy<br />Selenium</p>
                    </div>
                    <div className="column">
                        <p className="has-text-weight-bold">Lang<strong className="text-color-purple-light">age</strong></p><br />
                        <p>C<br />C++<br />C#<br />Python<br />JavaScript<br />UML</p>
                    </div>
                    <div className="column">
                        <p className="has-text-weight-bold"><strong className="text-color-purple-light">Pratiques</strong></p><br />
                        <p>Anglais (B2)<br />Permis B</p>
                    </div>
                    <div className="column">
                        <p className="has-text-weight-bold"><strong className="text-color-purple-light">Autre</strong></p><br />
                        <p>Figma<br />Linux<br />Git</p>
                    </div>
                </div>
                <button className="button has-text-centered mb-6 primary-color is-large">
                    <span className="icon ml-3">
                        <box-icon color='white' name='download'></box-icon>
                    </span>
                    <a href={`${process.env.PUBLIC_URL}/ines_maaroufi_cv.pdf`} download='ines_maaroufi_cv'className="px-4 has-text-white">Télécharger mon cv !</a>
                </button>
            </div>
            <Footer />
        </div>
    )
}

export default Home;