import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Features } from '../components/Features';
import { PageHero } from '../components/PageHero';
import Data from '../contents/home.json';
import BackToTopButton from '@theme/BackToTopButton';

const HomepageHeader = ({ title, description }): JSX.Element => {
  return (
    <PageHero
      image={'/img/home_banner.jpg'}
      tagLine={description}
      title={title}
      buttons={Data.buttons}
      gitButtons={Data.gitButtons}
      showTwitter={true}
    />
  );
};

const Home = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader title={siteConfig.title} description={siteConfig.tagline} />
      <main>
        <Features features={Data.services} />
      </main>
      <BackToTopButton />
    </Layout>
  );
};

export default Home;
