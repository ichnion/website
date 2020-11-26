import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Local First',
    imageUrl: 'img/undraw_current_location_rypt.svg',
    description: (
      <>
        We don't want to have to upload our personal data to a 3rd party service to be analyzed. Ichnion ensures your data stays with you.
      </>
    ),
  },
  {
    title: 'Personal Data',
    imageUrl: 'img/undraw_my_files_swob.svg',
    description: (
      <>
        Ichnion aims to make it easy for everyone to obtain, inspect, analyze and control their personal data.
      </>
    ),
  },
  {
    title: 'Digital Privacy',
    imageUrl: 'img/undraw_privacy_protection_nlwy.svg',
    description: (
      <>
        With Ichnion everyone can gain insight in the data that is stored about us, fostering transparency in a digital society.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--secondary', styles.heroBanner)}>
        <div className="container">
          <img src="img/textlogo.png" title="{siteConfig.title}" />
          <code className={styles.definition}>"ιχνιον" (ichnion) – a track, trace or footstep</code>
          <h1 className={styles.headline}>{siteConfig.tagline}</h1>
          <p className={styles.summary}>Through our daily activities and communications a vast digital footprint, our personal activity record data is being generated.<br/>Have you ever looked at your digital footprint (personal information) in a specific way?</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--primary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.content}>
          <div className="container">
            <div className="row">
              <h2>Sovereignty over our Digital Heritage</h2>
              <p>Through our daily activities and communications a vast amount of personal activity data is collected, analyzed and exploited ... surprisingly too often not for the benefit of us.</p>
              <p>However, the digital footprint of each individual is not only a visual depiction of memories but can be used for many things. It can be put to good use, such as health and asset management, career and personal development. In addition, if shared and accumulated across society based on the individual's free will, it will be useful in preventing the spread of pandemics, improving mobility services, road safety, and supporting responses to disasters for example.</p>
              <p>Personal data exports from web services are not readable for ordinary people. This project wants to change this and help individuals obtain the digital footprints from various service providers as comprehensively as possible based on data portability, to organize, integrate, visualize and put our data into an accessible format.</p>
            </div>
          </div>
        </section>

        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}

        <section className={clsx('hero hero--secondary', styles.heroBanner)}>
          <div className="container">
            <h1 className={styles.headline}>Mission</h1>
            <p className={styles.summary}><i>Code for Myself</i> aims to develop and provide Open Source software to help individuals obtain and manage their personal data archives.<br/>Our goal is to make digital footprints accessible to everyone to be used wisely for ourselves, our families, our communities and society.</p>
            <p>We are looking for people from all over the world to join and collaborate on this project.</p>
            <div className={styles.buttons}>
              <Link
                className={clsx(
                  'button button--outline button--primary button--lg',
                  styles.getStarted,
                )}
                to={useBaseUrl('docs/join')}>
                Join the project
              </Link>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}

export default Home;
