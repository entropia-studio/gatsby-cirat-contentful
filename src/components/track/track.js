import React from 'react';
import './track.scss';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Track = ({ name, description, images, slug }) => {
  const getFirstParagraph = (descRaw) => {
    const desc = renderRichText(descRaw);
    return desc[0];
  };
  const image = getImage(images[0].imageFile);
  return (
    <div className='track'>
      <div className='track__title'>{name}</div>
      <div className='track__image'>
        <Link to={`/tracks/${slug}`}>
          <GatsbyImage image={image} alt=''></GatsbyImage>
        </Link>
      </div>
      <div className='track__description'>{getFirstParagraph(description)}</div>
    </div>
  );
};

export default Track;
