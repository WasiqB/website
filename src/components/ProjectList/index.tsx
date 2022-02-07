import { Link } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

const Project = ({ title, image, description, link }): JSX.Element => {
  return (
    <article className={clsx(styles.Project, 'col col--4')}>
      <div className={styles.ProjectImage}>
        <img src={useBaseUrl(image)} alt={title} />
      </div>
      <div className={styles.ProjectInfo}>
        <h3 className={styles.ProjectTitle}>
          <Link to={useBaseUrl(link)} target={'_self'}>
            {title}
          </Link>
        </h3>
        <p className={styles.ProjectDescription}>{description}</p>
      </div>
    </article>
  );
};
const ProjectList = ({ projects }): JSX.Element => {
  return (
    <section className={styles.ProjectsContainer}>
      <div className='container'>
        <div className='row'>
          {projects.map((project, idx) => (
            <Project key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { ProjectList };
