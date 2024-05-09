
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
            <header>
                <section className="section primary-color">
                    <Header />
                </section>
            </header>
                
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
            <Footer />
        </>
    )
}

export default Home;