import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageServices from '../components/HomepageServices';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <div className='row'>
          <div className={clsx('col col--6', styles.heroProfile)}>
            <img
              src={useBaseUrl('/img/home_banner.jpg')}
              alt='Wasiq Bhamla'
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
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <HomepageHeader />
      <main>
        <HomepageServices />
      </main>
    </Layout>
  );
}
