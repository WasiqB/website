/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './Features.module.css';

export type FeatureItem = {
  title: string;
  image: string;
  description: string;
};

type FeatureItems = {
  features: FeatureItem[];
};

function FeatureTitle({ title, image }): JSX.Element {
  return (
    <div className='text--center'>
      <img className={styles.featureSvg} alt={title} src={image} />
    </div>
  );
}

function FeatureDescription({ title, description }): JSX.Element {
  return (
    <div className='text--center padding-horiz--md'>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
function Feature({ title, image, description }: FeatureItem): JSX.Element {
  return (
    <div className={clsx('col col--4')}>
      <FeatureTitle title={title} image={image} />
      <FeatureDescription title={title} description={description} />
    </div>
  );
}

export default function Features({ features }: FeatureItems): JSX.Element {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
