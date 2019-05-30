import React from 'react';
import './loader.scss';

const Loader = () => {
  return (
    <section className="loader">
      <div className="wrapper">
        <div className="ring"></div>
        <div className="ball"></div>
      </div>
    </section>
  );
};

export default Loader;