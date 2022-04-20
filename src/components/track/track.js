import React from 'react';
import './track.scss';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Track = ({ name, description, images }) => {
  const getFirstParagraph = (descRaw) => {
    const desc = renderRichText(descRaw);
    return desc[0];
  };
  const image = getImage(images[0].imageFile);
  return (
    <div className='track'>
      <div className='track__title'>{name}</div>
      <div className='track__image'>
        <GatsbyImage image={image} alt=''></GatsbyImage>
      </div>
      <div className='track__description'>{getFirstParagraph(description)}</div>
    </div>
  );
};

export default Track;
