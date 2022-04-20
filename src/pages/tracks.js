import React from 'react';
import { graphql } from 'gatsby';
import Track from '../components/track/track.js';
import Layout from '../components/layout/layout';

const Tracks = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      {data.allContentfulTrack.nodes.map((track) => (
        <Track key={track.id} {...track} />
      ))}
    </Layout>
  );
};

export const query = graphql`
  query getTracks {
    allContentfulTrack(filter: { sys: {}, node_locale: { eq: "en-US" } }) {
      nodes {
        id
        name
        images {
          imageFile {
            gatsbyImageData(width: 764)
          }
        }
        description {
          raw
        }
      }
    }
  }
`;

export default Tracks;
