import React from 'react';
import { graphql } from 'gatsby';
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
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';

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
  const { t } = useTranslation();

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
                <span>
                  {distance} {t('track.km')}
                </span>
              </div>
              <div>
                <span>
                  {totalTime} {t('track.h')}
                </span>
                <MdTimer className='track__detail__info__slice__icon' />
              </div>
            </div>
            <div className='track__detail__info__slice'>
              <div>
                <MdOutlineTrendingUp className='track__detail__info__slice__icon' />
                <span>
                  {t('track.maxAltitude')} {maxAltitude} m
                </span>
              </div>
              <div>
                <span>
                  {t('track.minAltitude')} {minAltitude} m
                </span>
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
  query ($slug: String, $language: String!) {
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
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default TrackDetail;
