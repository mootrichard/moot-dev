import React from 'react';
import '../styles/index.css';
import Layout from '../components/layout';
import NameSVG from '../components/nameSVG';

function Index({location}) {
  return (
    <Layout>
      <NameSVG className="svg-name" />
    </Layout>
  );
}

export default Index;
