import useBaseUrl from '@docusaurus/useBaseUrl';
import BackToTopButton from '@theme/BackToTopButton';
import Layout from '@theme/Layout';
import React from 'react';
import { PageHero } from '../../components/PageHero';
import { ProjectList } from '../../components/ProjectList';
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
      <ProjectList projects={Data.projects} />
      <BackToTopButton />
    </Layout>
  );
};

export default Projects;
