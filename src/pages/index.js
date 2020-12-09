import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address}
            {/* · {config.phone} */}
            · <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <div className="subheading mb-4">
            {config.job}
          </div>
          <p className="lead mb-5">
            {config.about}
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url} target="_blank">
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
