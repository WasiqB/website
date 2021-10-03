/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageServices.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

type ServiceItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const ServiceList: ServiceItem[] = [
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

function ServiceTitle({ title, image }): JSX.Element {
  return (
    <div className='text--center'>
      <img className={styles.serviceSvg} alt={title} src={useBaseUrl(image)} />
    </div>
  );
}

function ServiceDescription({ title, description }): JSX.Element {
  return (
    <div className='text--center padding-horiz--md'>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
function Service({ title, image, description }: ServiceItem): JSX.Element {
  return (
    <div className={clsx('col col--4')}>
      <ServiceTitle title={title} image={image} />
      <ServiceDescription title={title} description={description} />
    </div>
  );
}

export default function HomepageServices(): JSX.Element {
  return (
    <section className={styles.services}>
      <div className='container'>
        <div className='row'>
          {ServiceList.map((props, idx) => (
            <Service key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
