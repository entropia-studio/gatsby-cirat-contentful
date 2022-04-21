import React from 'react';
import { graphql } from 'gatsby';
import Track from '../../components/track/track.js';
import Layout from '../../components/layout/layout.js';
import LangMenu from '../../components/lang-menu/lang-menu.js';

const Tracks = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <LangMenu />
      {data.allContentfulTrack.nodes.map((track) => (
        <Track key={track.id} {...track} />
      ))}
    </Layout>
  );
};

export const query = graphql`
  query getTracks($language: String) {
    allContentfulTrack(filter: { sys: {}, node_locale: { eq: $language } }) {
      nodes {
        id
        name
        images {
          imageFile {
            gatsbyImageData(width: 768)
          }
        }
        description {
          raw
        }
        slug
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

export default Tracks;
