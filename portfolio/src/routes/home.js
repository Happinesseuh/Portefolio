
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
            <header>
                <section className="section primary-color">
                    <Header />
                </section>
            </header>
            {/* <div className="columns pb-0 m-0"> */}
            {/* <div className="m-5 has-text-weight-bold is-jusitfy-content-center has-text-big-size has-text-white column is-three-fifths is-flex mb-0">
                    <div className="content is-flex is-align-items-center pl-6 ml-6">
                        <p>Hi,<br />I'm <strong className="has-text-brown">Inès</strong><br />Fullstack Developer</p>
                    </div>
                    <div className="column">
                            <button class="ml-6 button is-large primary-color has-text-white">Contact</button>
                        </div>
                </div> */}
            {/* <div className="m-5 is-size-1 has-text-weight has-text-white column">
                    <img alt="ines" src={ines}></img>
                </div> */}
            {/* </div> */}

            {/* <div className="card radius-0  primary-color pt-4 pb-4">
                <div className="columns m-6">
                    <div className="column is-half p-6 px-5">
                        <div className="is-relative has-text-white m-4 has-text-centered">
                            <p className="is-size-2">{t('home_title')}</p><br />
                            <p className="is-size-5">{t('home_desc')}</p>
                        </div>
                    </div>
                    <div className="column is-1">

                    </div>
                    <div className="column is-one-third">
                        <br />
                            <SimpleSlider />
                    </div>

                </div>
            </div> */}
            {/* <Characteristics />
            <Objectives />
            <Sample />
            <Partners /> */}
            <section class="section">
                <div class="columns is-centered">
                    <div class="column is-three-fifths">
                        <div className="m-5 has-text-weight-bold is-jusitfy-content-center has-text-big-size has-text-white mb-0">
                            <div className="content is-flex is-align-items-center pl-2 ml-6">
                                <p>Hi,<br />I'm <strong className="has-text-brown">Inès</strong><br />Fullstack Developer</p>
                            </div>
                            <div className="column">
                                <a href="/Contact">
                                    <button class="ml-6 button is-large primary-color has-text-white">Contact me !</button>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div class="column">
                        <div className="m-5 is-size-1 has-text-weight has-text-white column">
                            <img className="image is-4by5" alt="ines" src={ines}></img>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home;