import React, { useState, useEffect } from 'react';

// import useStore from '../data/useStore';

import 'boxicons';
// import { useTranslation } from 'react-i18next';

function Cards(props) {
    const picture = `${process.env.PUBLIC_URL}/logo/${props.experience.logo}`
    let tags = [];

    props.experience.tags.forEach((tag, index) => {
        tags.push(<span className="tag primary-color has-text-weight-bold is-size-7 has-text-white">{tag}</span>);
    });

    return (
        <div className="column is-one-third" key={props.index}>
            <div className="card ">
                <div className='columns'>
                    <div className='column'>
                        <figure className="ml-6 mt-5 image is-inline-block is-pulled-left">
                            <img style={{ width: '70px', height: '70px' }} className="blue-border is-rounded" src={picture} alt="Placeholder image" />
                        </figure>
                    </div><br className='is-mobile'/><br className='is-mobile'/>
                    <div className='column mr-6'>
                        <div className="media is-pulled-right">
                            <div className="media-content">
                                {props.experience.site && <a href={props.experience.site}>
                                    <box-icon name="buildings"></box-icon>
                                </a>}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-content ml-5 mr-5">
                    <div className="content">
                        <p className='is-size-6 has-text-grey'><strong className="title is-6">{props.experience.company} </strong>{props.experience.duration}</p>
                        <p className='is-size-3 mb-3 is-size-5-mobile'>{props.experience.title}</p>
                        <p>{props.experience.sector}</p>
                        <hr />
                        <div className='tags mt-2 mb-5'>{tags}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;