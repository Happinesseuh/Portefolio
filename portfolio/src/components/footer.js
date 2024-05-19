import React from "react";

import { useTranslation } from 'react-i18next';

function Footer() {

  const { t, i18n } = useTranslation();

  return (
    <footer className="footer p-6 has-text-white primary-color">
      <div className="content has-text-centered">
        <p className="has-text-white">{t('all_rights')}<br/>{t('made_by')} <strong className="has-text-white">Inès Maaroufi</strong>
        </p>
      </div>
    </footer>
  )
}

export default Footer;