
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
    const fullstack = ["Angular", "Flutter", "React Native", "React", "NodeJS", "MySQL", "PHP", "CSS", "HTML", "JQuery"];
    const fullstackTags = [];

    fullstack.forEach((elem, index) => {
        fullstackTags.push(<span class="tag is-small magenta-tag has-text-white">{elem}</span>);
    });

    return (
        <div>
            <Header />
            <div class="columns is-centered mt-6 mb-0 pb-6">
                <div class="column is-three-fifths mb-0 pb-0">
                    <div className="m-5 has-text-weight-bold is-jusitfy-content-center has-text-big-size has-text-white mb-0">
                        <div className="content is-flex is-align-items-center pl-2 ml-6 pt-6 has-text-black">
                            <p>Hi,<br />I'm <strong className="has-text-purple">Inès Maaroufi</strong><br />Fullstack Developer</p>
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

            <div className="has-text-centered p-5 mb-0">
                <div className="p-4 ml-6 mb-6 is-size-2 has-text-centered text-underlined-purple">À propos de moi <strong className="text-color-purple-light">.</strong></div>
                <div className="p-4 ml-6 is-size-5">Actuellement étudiante en 5ème année à <strong className="has-text-purple">Epitech Paris</strong>, et future diplômée (2025), je suis à la recherche d'un  <strong className="has-text-purple">part-time</strong> de 3 jours par semaine <strong className="has-text-purple">(Lundi, mardi, mercredi)</strong> débutant le 02/09/24 et finissant le 26/02/25, pouvant déboucher sur un <strong className="has-text-purple">stage de fin d'étude</strong></div>
            </div>

            <div className="has-text-centered p-5">
                <div className="p-4 ml-6 mb-6 is-size-2 has-text-centered text-underlined-purple">Mes compétences <strong className="text-color-purple-light">.</strong></div>
                <div className="columns p-6 is-multiline">

                    <div className="column is-one-quarter">
                        <div className="card p-5 is-flex is-justify-content-center is-align-items-center has-background-white">
                            <div>
                                <p className="has-text-weight-bold">Dev Fullstack</p><br />
                                <div className="tags is-flex is-justify-content-center">{fullstackTags}</div>
                            </div>
                        </div>
                    </div>


                    <div className="column is-one-quarter">
                        <div className="card p-5 is-flex is-justify-content-center is-align-items-center has-background-white">
                            <div>
                                <p className="has-text-weight-bold">Dev Ops</p><br />
                                <div className="tags is-flex is-justify-content-center">
                                    <span class="tag pink-tag has-text-white">Jenkins</span>
                                    <span class="tag pink-tag has-text-white">Git actions</span>
                                    <span class="tag pink-tag has-text-white">Docker</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="column is-one-quarter">
                        <div className="card p-5 is-flex is-justify-content-center is-align-items-center has-background-white">
                            <div>
                                <p className="has-text-weight-bold">Dev Scrapping</p><br />
                                <div className="tags is-flex is-justify-content-center">
                                    <span class="tag orange-tag has-text-white">Scrapy</span>
                                    <span class="tag orange-tag has-text-white">Sélénium</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column is-one-quarter">
                        <div className="card p-5 is-flex is-justify-content-center is-align-items-center has-background-white">

                            <div>
                                <p className="has-text-weight-bold">Langage</p><br />

                                <div className="tags is-flex is-justify-content-center">

                                    <span class="tag orange-light-tag has-text-white">C</span>
                                    <span class="tag orange-light-tag has-text-white">C++</span>
                                    <span class="tag orange-light-tag has-text-white">C#</span>
                                    <span class="tag orange-light-tag has-text-white">Python</span>
                                    <span class="tag orange-light-tag has-text-white">JavaScript</span>
                                    <span class="tag orange-light-tag has-text-white">UML</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="column is-one-quarter">
                        <div className="card p-5 is-flex is-justify-content-center is-align-items-center has-background-white">
                            <div>

                                <p className="has-text-weight-bold">Pratiques</p><br />
                                <div className="tags is-flex is-justify-content-center">

                                    <span class="tag primary-color-light">Anglais (B2)</span>
                                    <span class="tag primary-color-light">Permis B</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="column is-one-quarter">
                        <div className="card p-5 is-flex is-justify-content-center is-align-items-center has-background-white">
                            <div>
                                <p className="has-text-weight-bold">Autre</p><br />
                                <div className="tags is-flex is-justify-content-center">
                                    <span class="tag yellow-tag">Figma</span>
                                    <span class="tag yellow-tag">Linux</span>
                                    <span class="tag yellow-tag">Git</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="button has-text-centered mb-6 primary-color is-large">
                    <span className="icon ml-3">
                        <box-icon color='white' name='download'></box-icon>
                    </span>
                    <a href={`${process.env.PUBLIC_URL}/ines_maaroufi_cv.pdf`} download='ines_maaroufi_cv' className="px-4 has-text-white">Télécharger mon cv !</a>
                </button>
            </div>
            <Footer />
        </div>
    )
}

export default Home;