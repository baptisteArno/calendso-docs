import React from 'react';
import clsx from 'clsx';
import styles from './HomepageCategories.module.css';
import Link from '@docusaurus/Link';

const CategoryList = [
  {
    link: '/docs/self-hosting/installation',
    title: 'Installing Cal',
    Svg: require('../../static/img/categories/text.svg').default,
    description: (
      <>
        Learn how to get set up with your own self-hosted instance of Cal.
      </>
    ),
  },
  {
    link: '/docs/self-hosting/upgrading',
    title: 'Upgrading Cal',
    Svg: require('../../static/img/categories/download.svg').default,
    description: (
      <>
        How to update your self-hosted Cal installation to the latest version.
      </>
    ),
  },
  {
    link: '/docs/self-hosting/docker',
    title: 'Deploying with Docker',
    Svg: require('../../static/img/categories/docker.svg').default,
    description: (
      <>
        How to use our unofficial Docker image to deploy Cal quickly and easily.
      </>
    ),
  },
    {
        link: '/docs/integrations/google-calendar',
        title: 'Integrating Google Calendar',
        Svg: require('../../static/img/categories/default.svg').default,
        description: (
            <>
                How to add the Google Calendar integration to check conflicts and schedule events.
            </>
        ),
    },
    {
        link: '/docs/integrations/outlook-calendar',
        title: 'Integrating Outlook/Microsoft 365',
        Svg: require('../../static/img/categories/default.svg').default,
        description: (
            <>
                How to add the Outlook/Microsoft 365 integration to check conflicts and schedule events.
            </>
        ),
    },
    {
        link: '/docs/integrations/zoom',
        title: 'Integrating Zoom',
        Svg: require('../../static/img/categories/video.svg').default,
        description: (
            <>
                How to add the Zoom integration to automatically create meetings for your bookings.
            </>
        ),
    },
];

function Category({Svg, title, description, link}) {
  return (
      <Link to={link} className={clsx('col col--4')}>
        <div>
            <div className={styles.backing}>
                <Svg className={styles.featureSvg} alt={title} />
            </div>
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </Link>
  );
}

export default function HomepageCategories() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {CategoryList.map((props, idx) => (
            <Category key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
