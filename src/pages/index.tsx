import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Features, { FeatureItem } from '../components/Features';
import useBaseUrl from '@docusaurus/useBaseUrl';

const ServiceList: FeatureItem[] = [
  {
    title: 'Freelancing projects',
    image: '/img/undraw_Organizing_projects.svg',
    description: (
      <>
        I can help automate any product for any platform (e.g: Web, API, Android and iOS) or help
        you create Test automation frameworks.
      </>
    ),
  },
  {
    title: 'Personalized Training',
    image: '/img/undraw_personal_training.svg',
    description: (
      <>
        I can provide personalized training for any tech stack related to Test Automation and CI /
        CD.
      </>
    ),
  },
  {
    title: 'Mentoring',
    image: '/img/undraw_teacher.svg',
    description: (
      <>
        I can help mentor you in Test Automation space, understand different concepts and tools used
        for Automation and CI / CD.
      </>
    ),
  },
  {
    title: 'Knowledge sharing',
    image: '/img/undraw_knowledge.svg',
    description: (
      <>
        I like sharing my knowledge with the QA community. I am thinking of sharing my knowledge via
        blogs, YouTube videos, workshops, talks, etc.
      </>
    ),
  },
];

function HomepageHeader(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <div className='row'>
          <div className={clsx('col col--6', styles.heroProfile)}>
            <img
              src={useBaseUrl('/img/home_banner.jpg')}
              alt={siteConfig.title}
              className={styles.heroImage}
            />
          </div>
          <div className='col col--6'>
            <h1 className='hero__title'>{siteConfig.title}</h1>
            <p className='hero__subtitle'>{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link className='button button--secondary button--lg' to='/docs/intro'>
                Docusaurus Tutorial - 5min ⏱️
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <Features features={ServiceList} />
      </main>
    </Layout>
  );
}
