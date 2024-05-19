import React from "react";

import { useTranslation } from 'react-i18next';

function createTags(list, color) {
    let tags = [];

    list.forEach((elem, index) => {
        tags.push(<span class={`tag is-small has-text-white ${color}`}>{elem}</span>);
    });

    return tags;
}

function Skills() {

    const { t, i18n } = useTranslation();

    const fullstackTags = createTags(["Angular", "Flutter", "React Native", "React", "NodeJS", "MySQL", "PHP", "CSS", "HTML", "JQuery"], "magenta-tag");
    const devopsTags = createTags(["Jenkins", "Git actions", "Docker"], "pink-tag");
    const scrapingTags = createTags(["Scrapy", "Sélenium"], "orange-tag");
    const languageTags = createTags(["C", "C++", "C#", "Python", "Javascript", "UML"], "orange-light-tag");
    const softSkillsTags = createTags([t('english_skill'), t('driving')], "primary-color-light has-text-black");
    const otherTags = createTags(["Figma", "Linux", "Git"], "yellow-tag has-text-black");

    const skills = [
        {title: "Dev Fullstack", list: fullstackTags},
        {title: "Dev Ops", list: devopsTags},
        {title: "Dev Scrapping", list: scrapingTags},
        {title: "Language", list: languageTags},
        {title: "Pratiques", list: softSkillsTags},
        {title: "Other", list: otherTags},
    ]

    let skillsElem = [];

    skills.forEach((elem, index) => {
        skillsElem.push(
        <div className="column is-one-quarter">
        <div className="card p-5 is-flex is-justify-content-center is-align-items-center has-background-white">
            <div>
                <p className="has-text-weight-bold">{elem.title}</p><br />
                <div className="tags is-flex is-justify-content-center">{elem.list}</div>
            </div>
        </div>
    </div>)
    });

    return (
        <>
        {skillsElem}
        </>
    )
}

export default Skills;