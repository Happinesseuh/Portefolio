import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            //NAVBAR
            "home": "Presentation",
            "experiences": "Experiences",
            "projects": "Projects",
            "contact": "Contact",
            // HOME
            "hi": "Hi,",
            "im": "I'm",
            "fullstack_dev": "Fullstack developer",
            "contact_me": "Contact me !",
            "skills": "My skills",
            "about_me": "About me",
            "desc_years": "Currently a 5th year student at ",
            "epitech": "Epitech Paris ",
            "status": "and a future graduate (2025), I am looking for a  ",
            "number_days": " 3 days a week ",
            "days": "(Monday, Tuesday, Wednesday)",
            "possiblities": " starting 02/09/24 and ending 26/02/25, which may lead to a ",
            "end": "end-of-study internship.",
            "english_skill": "English (B2)",
            "driving": "Driving license",
            "cv": "Download my resume !",
            "experiences": "My experiences",
            "projects": "My projects",
            "tel" : "On the phone",
            "mail": "By mail",
            "linkedin": "On Linkedin",
            "contact_title": "Contact me ",
            "all_rights": "©2023 All Rights Reserved",
            "made_by": "Made by ",
            "notfound_title": "Not found ",
            "notfound_desc": "This page does not exist.",
            "english": "English",
            "french": "French",
            "see_website": "See website"
        }
    },
    fr: {
        translation: {
            //NAVBAR
            "home": "Présentation",
            "experiences": "Expériences",
            "projects": "Projets",
            "contact": "Contact",
            // HOME
            "hi": "Bonjour,",
            "im": "Je suis",
            "fullstack_dev": "Développeuse fullstack",
            "contact_me": "Contactez moi !",
            "skills": "Mes compétences",
            "about_me": "À propos de moi",
            "desc_years": "Actuellement étudiante en 5ème année à ",
            "epitech": "Epitech Paris ",
            "status": ", et future diplômée (2025), je suis à la recherche d'un  ",
            "number_days": " de 3 jours par semaine ",
            "days": "(Lundi, mardi, mercredi)",
            "possiblities": " débutant le 02/09/24 et finissant le 26/02/25, pouvant déboucher sur un ",
            "end": "stage de fin d'étude.",
            "english_skill": "Anglais (B2)",
            "driving": "Permis B",
            "cv": "Télécharger mon cv !",
            "experiences": "Mes expériences",
            "projects": "Mes projets",
            "tel" : "Au téléphone",
            "mail": "Par mail",
            "linkedin": "Via Linkedin",
            "contact_title": "Me contacter ",
            "all_rights": "©2023 Tous droits réservés",
            "made_by": "Réalisé par ",
            "notfound_title": "Introuvable ",
            "notfound_desc": "Cette page n'existe pas.",
            "english": "Anglais",
            "french": "Français",
            "see_website": "Voir le site"
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'fr',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;