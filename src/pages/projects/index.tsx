import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import React from 'react';
import { Features } from '../../components/Features';
import { PageHero } from '../../components/PageHero';
import Data from '../../contents/projects.json';

const Projects = (): JSX.Element => {
  return (
    <Layout>
      <PageHero
        image={useBaseUrl(Data.image)}
        tagLine={Data.description}
        title={Data.title}
        buttons={[]}
        gitButtons={[]}
      />
      <Features features={Data.projects} />
    </Layout>
  );
};

export default Projects;
