import React, { useState, useEffect } from 'react';

// import useStore from '../data/useStore';

import 'boxicons';
// import { useTranslation } from 'react-i18next';

function Cards(props) {
    const picture = `${process.env.PUBLIC_URL}/logo/${props.person.logo}`

    return (

        <div className="column is-one-quarter" key={props.index}>
            <div className="card">
                <div className="has-text-centered">
                    <figure className="m-5 image is-128x128 is-inline-block">
                        <img style={{ width: '128px', height: '128px' }} className="blue-border is-rounded" src={picture} alt="Placeholder image" />
                    </figure>
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{props.person.fullname}</p>
                            {props.person.linkedin && <a href={props.person.linkedin}>
                                <box-icon type='logo' name='linkedin-square'></box-icon>
                            </a>}
                            {props.person.google_scholar && <a href={props.person.google_scholar}>
                                <box-icon name='google' type='logo' className="ml-4"></box-icon>
                            </a>}
                        </div>
                    </div>
                </div>
                <div className="card-content">
                    <div className="content has-text-centered">
                        {props.person.role}
                        <br />
                    </div>
                    <div className="content has-text-centered has-text-primary-color has-text-weight-bold">
                        {props.person.institution}
                        <br />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Cards;