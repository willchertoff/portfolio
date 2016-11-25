import React, { PropTypes } from 'react';

const propTypes = {
  name: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

const Title = ({ name, subTitle }) => (
  <div className="title-container">
    <div className="inner-wrap">
      <a href="//github.com/willchertoff">
        <h1>{name}</h1>
        <h2>{subTitle}</h2>
      </a>
    </div>
  </div>
);

Title.propTypes = propTypes;

export default Title;
