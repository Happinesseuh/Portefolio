
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

import contact from '../assets/contact.png'


function Home() {

    const { t } = useTranslation();

    return (
        <>
            <Header />

            <div className="pt-6 mt-0">
                <div className="p-4 ml-6 mb-6 mt-6 is-size-2 has-text-centered text-underlined-purple is-size-1 is-relative">Me contacter <strong className="text-color-purple-light">.</strong></div>
            </div>

            <div className="mt-0 center-screen">

                <div className="columns m-6 mb-0 ">
                    <div style={{
                        'width': '400px',
                        'height': '220px'
                    }} className="column card has-text-centered pb-6 mb-0 mr-6">
                        <box-icon type='solid' name='phone' size='lg'></box-icon>
                        <div className="is-size-4">Au téléphone</div>
                        <a href="tel:+33781594402">+33 7 81 59 44 02</a>
                    </div>
                    <div style={{
                        'width': '400px',
                        'height': '220px'
                    }} className="column card has-text-centered pb-6 mb-0 mr-6">
                        <box-icon name='envelope' type='solid' size='lg'></box-icon>
                        <p className="is-size-4">Par mail</p>
                        <a href="mailto:ines.maaroufi@epitech.eu">ines.maaroufi@epitech.eu</a>
                    </div>
                    <div style={{
                        'width': '400px',
                        'height': '220px'
                    }} className="column card has-text-centered pb-6">
                        <box-icon name='linkedin-square' type='logo' size='lg'></box-icon>
                        <p className="is-size-4">Via Linkedin</p>
                        <a href="https://www.linkedin.com/in/ines-maaroufi/">https://www.linkedin.com/in/ines-maaroufi/</a>
                    </div>
                </div>

            </div>


            <div className="mb-6 is-flex is-justify-content-center">
                <img className="image" alt="contact" src={contact}></img>
            </div>
            <Footer />
        </>
    )
}

export default Home;