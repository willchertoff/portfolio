import React, { PropTypes } from 'react';

const propTypes = {
  specials: PropTypes.array.isRequired,
};

const Specialties = ({ specials }) => (
  <div className="specials-container">
    <div className="inner-wrap">
      <div className="row small-collapse large-collapse">
        <div className="small-12 medium-12 large-12">
          <h3>Specialties</h3>
        </div>
        {
          specials.map(special => (
            <div key={special.name} className="column small-6 medium-4 large-3">
              <span>{special.name}</span>
            </div>
          ))
        }
      </div>
    </div>
  </div>
);

Specialties.propTypes = propTypes;

export default Specialties;
