import React from 'react';
import Layout from '@theme/Layout';
import Features from '../../../components/Features';
import features from '../../../contents/coteafs-appium-features.json';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ButtonType } from '../../../components/ActionButton';
import { GitHubButtonType } from '../../../components/GitHubCountButton';
import { PageHero } from '../../../components/PageHero';

const gitButtons: GitHubButtonType[] = [
  {
    id: 1,
    userId: 'WasiqB',
    repoName: 'coteafs-appium',
    type: 'Star',
  },
  {
    id: 2,
    userId: 'WasiqB',
    repoName: 'coteafs-appium',
    type: 'Watch',
  },
  {
    id: 3,
    userId: 'WasiqB',
    repoName: 'coteafs-appium',
    type: 'Fork',
  },
];

const buttons: ButtonType[] = [
  {
    id: 1,
    text: 'Get Started',
    type: 'button--primary',
    href: '/projects/coteafs-appium/intro',
    target: '_self',
  },
  {
    id: 2,
    text: 'View on GitHub',
    type: 'button--info',
    href: 'https://github.com/WasiqB/coteafs-appium',
    target: '_self',
  },
];

const ProjectHero = ({ image, message, description }): JSX.Element => {
  return (
    <PageHero
      image={useBaseUrl(image)}
      tagLine={description}
      title={message}
      buttons={buttons}
      gitButtons={gitButtons}
    />
  );
};

export default function CoteafsAppium(): JSX.Element {
  return (
    <Layout>
      <ProjectHero
        image='/img/projects/coteafs-appium/appium-banner.gif'
        message='Coteafs-Appium'
        description='Appium wrapper framework for Android and iOS'
      />
      <Features features={features} />
    </Layout>
  );
}
