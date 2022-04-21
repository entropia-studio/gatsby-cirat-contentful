import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/layout/layout';
import './track-detail.scss';
import { StaticImage } from 'gatsby-plugin-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
  MdDirectionsWalk,
  MdTimer,
  MdOutlineTrendingUp,
  MdOutlineTrendingDown,
} from 'react-icons/md';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const TrackDetail = ({ data }) => {
  console.log(data);
  const {
    description,
    distance,
    images,
    isCircular,
    maxAltitude,
    minAltitude,
    name,
    negativeGradient,
    positiveGradient,
    totalTime,
  } = data.contentfulTrack;
  const image = getImage(data.contentfulTrack.images[0].imageFile);
  return (
    <Layout>
      <div className='track'>
        <div className='track__header'>
          <Link to='/tracks'>
            <StaticImage
              src='../../images/left-arrow.png'
              width={20}
              className='track__header__left-arrow'
              alt=''
            ></StaticImage>
          </Link>
          {name}
        </div>
        <div className='track__detail'>
          <GatsbyImage image={image} alt=''></GatsbyImage>
          <div className='track__detail__info'>
            <div className='track__detail__info__slice'>
              <div>
                <MdDirectionsWalk className='track__detail__info__slice__icon' />
                <span>Distance: {distance} km</span>
              </div>
              <div>
                <span>Total time: {totalTime} h</span>
                <MdTimer className='track__detail__info__slice__icon' />
              </div>
            </div>
            <div className='track__detail__info__slice'>
              <div>
                <MdOutlineTrendingUp className='track__detail__info__slice__icon' />
                <span>Max. Altitude: {maxAltitude} m</span>
              </div>
              <div>
                <span>Min. Altitude: {minAltitude} m</span>
                <MdOutlineTrendingDown className='track__detail__info__slice__icon' />
              </div>
            </div>
            <span>{renderRichText(description)}</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query getTrack($slug: String) {
    contentfulTrack(slug: { eq: $slug }) {
      name
      description {
        raw
      }
      distance
      isCircular
      maxAltitude
      minAltitude
      negativeGradient
      positiveGradient
      totalTime
      images {
        imageFile {
          gatsbyImageData(width: 768)
        }
      }
    }
  }
`;

export default TrackDetail;
