import React from 'react';
import Layout from '@theme/Layout';
import { Features } from '../../../components/Features';
import Data from '../../../contents/projects/coteafs-appium.json';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { PageHero } from '../../../components/PageHero';
import BackToTopButton from '@theme/BackToTopButton';

const ProjectHero = (): JSX.Element => {
  return (
    <PageHero
      image={useBaseUrl(Data.image)}
      tagLine={Data.description}
      title={Data.title}
      buttons={Data.buttons}
      gitButtons={Data.gitButtons}
    />
  );
};

const CoteafsAppium = (): JSX.Element => {
  return (
    <Layout>
      <ProjectHero />
      <Features features={Data.features} />
      <BackToTopButton />
    </Layout>
  );
};

export default CoteafsAppium;
