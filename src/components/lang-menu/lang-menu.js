import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import './lang-menu.scss';

const LangMenu = () => {
  const { changeLanguage } = useI18next();
  return (
    <div className='lang-menu'>
      <button
        className='lang-menu__button'
        onClick={() => changeLanguage('en-US')}
      >
        EN
      </button>
      <button
        className='lang-menu__button'
        onClick={() => changeLanguage('es')}
      >
        ES
      </button>
    </div>
  );
};

export default LangMenu;
