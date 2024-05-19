
import React, { useRef } from "react";

import Header from '../components/header'
import Footer from '../components/footer'
import Skills from '../components/skills'

import ines from '../assets/ines_maaroufi.png'

import { useTranslation } from 'react-i18next';

import { AnimationOnScroll } from 'react-animation-on-scroll';


function Home() {

    const { t, i18n } = useTranslation();
    let language = i18n.language;

    const ref = useRef(null);
    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div>
            <Header />
            <div className="card m-6-not-important mobile-device"><br /><br /><br />
                <div class="columns is-centered mt-6 mb-0 pb-6">

                    <div class="column is-three-fifths mb-0 pb-0">
                        <div className="m-5 has-text-weight-bold is-jusitfy-content-center has-text-big-size has-text-white mb-0 is-size-3-mobile">
                            <div className="content is-flex is-align-items-center pl-2 ml-6 pt-6 has-text-black">
                                <p>{t('hi')}<br />{t('im')} <strong className="has-text-purple">Inès Maaroufi</strong><br />{t('fullstack_dev')}</p>
                            </div>
                            <div className="column mb-0">
                                <a href="/Contact">
                                    <button class="ml-6 button is-large primary-color has-text-white">{t('contact_me')}</button>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div class="column mb-0 pb-0">
                        <div className="m-5 is-size-1 mb-0 has-text-weight has-text-white column">
                            <img className="image" alt="ines" src={ines}></img>
                        </div>
                    </div>
                </div>
                <div className="is-flex is-justify-content-center" ref={ref}>
                    <button className='button circle-button mb-5' onClick={handleClick}><box-icon name='down-arrow-alt' color='#ffffff' style={{ 'width': '50px', 'height': '50px' }}></box-icon></button>
                </div>
            </div>

            <AnimationOnScroll animateIn="animate__fadeIn">
                <div>
                    <div className="has-text-centered p-5 mb-0" >
                        <div className="p-4 mb-6 is-size-2 has-text-centered text-underlined-purple is-size-3-mobile">{t('about_me')}<strong className="text-color-purple-light">.</strong></div>
                        <div className="p-4 is-size-5">{t('desc_years')}<strong className="has-text-purple">{t('epitech')}</strong>{t('status')}<strong className="has-text-purple">part-time</strong>{t('number_days')}<strong className="has-text-purple">{t('days')}</strong>{t('possiblities')}<strong className="has-text-purple">{t('end')}</strong></div>
                    </div>
                </div>
                <div className="has-text-centered p-5">
                    <div className="p-4 mb-6 is-size-2 has-text-centered text-underlined-purple is-size-3-mobile">{t('skills')}<strong className="text-color-purple-light">.</strong></div>
                    <div className="columns p-6 is-multiline">
                        <Skills></Skills>


                    </div>
                    <div className="column has-text-centered">
                        <button className="button has-text-centered mb-6 primary-color is-medium">
                            <span className="icon ml-3">
                                <box-icon color='white' name='download'></box-icon>
                            </span>
                            <a href={`${process.env.PUBLIC_URL}/ines_maaroufi_cv.pdf`} download='ines_maaroufi_cv' className="px-4 has-text-white">{t('cv')}</a>
                        </button>
                    </div>
                </div>


            </AnimationOnScroll>

            <Footer />
        </div>

    )
}

export default Home;