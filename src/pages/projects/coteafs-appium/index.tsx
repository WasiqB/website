import React from 'react';
import Layout from '@theme/Layout';
import Features from '@components/Features';
import features from '@contents/coteafs-appium-features.json';
import HeroSection, { ButtonProps, GitHubButton } from '@components/heroSection';
import useBaseUrl from '@docusaurus/useBaseUrl';

const gitButtons: GitHubButton[] = [
  {
    id: 'gbtn-1',
    user: 'WasiqB',
    repo: 'coteafs-appium',
    type: 'star',
  },
  {
    id: 'gbtn-2',
    user: 'WasiqB',
    repo: 'coteafs-appium',
    type: 'fork',
  },
];

const buttons: ButtonProps[] = [
  {
    id: 'btn-1',
    text: 'Get Started',
    className: 'button--primary',
    to: '/projects/coteafs-appium/intro',
  },
  {
    id: 'btn-2',
    text: 'View on GitHub',
    className: 'button--info',
    iconClass: 'fab fa-github',
    to: 'https://github.com/WasiqB/coteafs-appium',
  },
];

function ProjectHero({ image, message, description }): JSX.Element {
  return (
    <HeroSection
      image={useBaseUrl(image)}
      description={description}
      message={message}
      buttons={buttons}
      gitButtons={gitButtons}
    />
  );
}

export default function CoteafsAppium(): JSX.Element {
  return (
    <Layout>
      <ProjectHero
        image='/img/projects/coteafs-appium/appium-banner.gif'
        message='<b>Coteafs-Appium</b> - Appium wrapper framework for Android and iOS'
        description='Coteafs-Appium'
      />
      <Features features={features} />
    </Layout>
  );
}
