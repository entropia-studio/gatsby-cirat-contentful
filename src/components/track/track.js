import React from 'react';
import './track.scss';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const Track = ({ name, description }) => {
  const getFirstParagraph = (descRaw) => {
    const desc = renderRichText(descRaw);
    return desc[0];
  };

  return (
    <div className='track'>
      <div className='track__title'>{name}</div>
      <div className='track__description'>{getFirstParagraph(description)}</div>
    </div>
  );
};

export default Track;
