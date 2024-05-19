
import React from "react";

import Header from '../components/header'
import Footer from '../components/footer'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProjectsData from '../data/projects.json'
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { useTranslation } from 'react-i18next';


function Project(props) {

    let tags = [];

    props.project.tags.forEach((tag, index) => {
        tags.push(<span class="tag primary-color-purple-light has-text-white">{tag}</span>)
    });

    const { t } = useTranslation();

    const picture = `${process.env.PUBLIC_URL}/demo/${props.project.logo}`

    return (
        <div className="column is-full card">
            <div className="columns">
                <div className="column is-flex is-justify-content-center is-align-items-center">
                    <figure className="image is-inline-block is-pulled-left" style={{ 'width': '500px' }}>
                        <img className="blue-border" src={picture} alt={picture}/>
                    </figure>
                </div>
                <div className="column m-5">
                    <div className="columns">
                        <div className="column">
                            <span className="title is-4">{props.project.title} </span>
                            <span className="is-size-6 has-text-grey">{props.project.year}</span>
                        </div>
                        <br />
                    </div>

                    <span className="is-size-6 has-text-grey mt-2">{props.project.description}</span><br />
                    <div className="tags is-flex is-align-items-center mt-5">{tags}</div>
                    <div className="media is-pulled-right">
                        {props.project.site && <a className="has-text-purple" href={props.project.site}>
                            {t('see_website')}
                        </a>}
                    </div>
                </div>
            </div>
        </div>)
}

function Projects() {

    let projects = [];
    const { t, i18n } = useTranslation();
    let language = i18n.language;


    if (!ProjectsData) {
        return <div />
    } else {
        ProjectsData[language]['projects'].forEach((project, index) => {
            projects.push(<Project project={project} />);
        });
    }

    return (

        <>
            <Header />
            <AnimationOnScroll animateIn="animate__fadeIn">

                <div className="pt-6 mt-0">
                    <div className="p-4 mb-6 mt-6 is-size-2 has-text-centered text-underlined-purple is-size-3-mobile is-size-1 is-relative">{t('projects')}<strong className="text-color-purple-light">.</strong></div>
                </div>

                <div className="columns is-multiline m-6">
                    {projects}
                </div>
            </AnimationOnScroll>

            <Footer />
        </>
    );
}

export default Projects;