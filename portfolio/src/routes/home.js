
import React from "react";

import Header from '../components/header'
import Footer from '../components/footer'
// import SimpleSlider from '../components/simpleSlider'
// import Footer from '../components/footer'
// import Characteristics from '../components/characteristics'
// import Objectives from '../components/objectives'
// import Sample from '../components/sample'
// import Partners from "../components/partners";

import ines from '../assets/ines.png'

import { useTranslation } from 'react-i18next';



function Home() {

    const { t } = useTranslation();

    return (
        <>
            <Header />
            <div class="columns is-centered mt-6 mb-0 pb-0">
                <div class="column is-three-fifths mb-0 pb-0">
                    <div className="m-5 has-text-weight-bold is-jusitfy-content-center has-text-big-size has-text-white mb-0">
                        <div className="content is-flex is-align-items-center pl-2 ml-6 pt-6">
                            <p>Hi,<br />I'm <strong className="has-text-brown">Inès</strong><br />Fullstack Developer</p>
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

            <div className="card primary-color radius-0 has-text-centered py-5 mb-0">
                <div className="p-4 ml-6 mb-6 is-size-2 has-text-white has-text-centered has-text-weight-bold text-underlined">À propos de moi</div>
                <div className="p-4 ml-6 has-text-brown-light is-size-5">Actuellement étudiante en 5ème année à <strong className="has-text-white">Epitech Paris</strong>, et future diplômée (2025), je suis à la recherche d'un  <strong className="has-text-white">part-time</strong> de 3 jours par semaine <strong className="has-text-white">(Lundi, mardi, mercredi)</strong> débutant le 02/09/24 et finissant le 26/02/25, pouvant déboucher sur un strong <strong className="has-text-white">stage de fin d'étude</strong></div>
            </div>

            <div className="card primary-color-brown-light radius-0 has-text-centered pb-5">
                <div className="p-4 ml-6 mb-6 is-size-2 has-text-brown has-text-centered has-text-weight-bold text-underlined-brown">Compétences</div>
                <div>
                    
                </div>
            </div>
    
            <Footer />
        </>
    )
}

export default Home;