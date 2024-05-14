
import React from "react";

import Header from '../components/header'
import Footer from '../components/footer'

import { useTranslation } from 'react-i18next';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProjectsData from '../data/projects.json'

function Project(props) {

    let tags = [];

    props.project.tags.forEach((tag, index) => {
        tags.push(<span class="tag primary-color-purple-light has-text-white">Docker</span>)
    });

    const picture = `${process.env.PUBLIC_URL}/demo/${props.project.logo}`


    return (
        <div className="column is-full card">
            <div className="columns">
                <div className="column is-flex is-justify-content-center is-align-items-center">
                    <figure className="image is-inline-block is-pulled-left" style={{ 'width': '500px'}}>
                        <img className="blue-border" src={picture} alt="Placeholder image" />
                    </figure>
                </div>

                {/* <div className="is-flex is-align-items-center"> */}
                <div className="column m-5">
                    <div className="columns">
                        <div className="column">
                            <span className="title is-4">{props.project.title} </span>
                            <span className="is-size-6 has-text-grey">{props.project.year}</span>
                        </div>
                        <div className="column">
                            <div className="media is-pulled-right">
                                {props.project.site && <a className="has-text-purple" href={props.project.site}>
                                    Voir le site
                                </a>}
                            </div>
                        </div>
                        <br />
                    </div>

                    <span className="is-size-6 has-text-grey mt-2">{props.project.description}</span><br />
                    <div className="tags is-flex is-align-items-center mt-5">{tags}
                    </div>
                </div>
            </div>
            {/* </div> */}

        </div>)
}

function Projects() {

    let projects = [];


    if (!ProjectsData) {
        return <div />
    } else {
        console.log(ProjectsData["fr"]['projects']);
        ProjectsData["fr"]['projects'].forEach((project, index) => {
            projects.push(<Project project={project} />);
        });
    }

    return (

        <>
            <Header />

            <div className="pt-6 mt-0">
                <div className="p-4 ml-6 mb-6 is-size-2 has-text-centered text-underlined-purple is-size-1 is-relative">Mes expériences <strong className="text-color-purple-light">.</strong></div>
            </div>

            <div className="columns is-multiline m-6">
                {projects}
            </div>
            <Footer />
        </>
    );

    // function SimpleSlider(props) {

    //     const settings = {
    //         dots: true,
    //         infinite: true,
    //         speed: 300,
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         autoplay: true
    //     };

    //     let slider = [];

    //     props.images.forEach((image, index) => {
    //         slider.push(<div>
    //             <img className="image-slider" alt={index} src={image} />
    //         </div>)
    //     });

    //     return (
    //         <Slider {...settings}>
    //             {slider}
    //         </Slider>
    //     );
    // }
}

export default Projects;