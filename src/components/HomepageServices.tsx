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
    title: 'Personalized Training',
    image: '/img/undraw_personal_training.svg',
    description: (
      <>
        I like training people who have hunger to learn new technologies related to QA testing and
        Automation. I will give you personal training for any topic related to Automation testing.
      </>
    ),
  },
  {
    title: 'Freelancing projects',
    image: '/img/undraw_Organizing_projects.svg',
    description: (
      <>
        I am passionate about QA testing and Automation. I can help you in doing QA activities for
        your project. If you need my services for your project at reasonable cost, then do reach out
        to me.
      </>
    ),
  },
  {
    title: 'Mentoring',
    image: '/img/undraw_teacher.svg',
    description: (
      <>
        You can connect me if you need mentoring from QA perspective or any thing related to QA or
        DevOps. I&apos;ll do my best to guide you in the right direction.
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
