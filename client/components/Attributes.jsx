// this component will display the `attributes` block of the character sheet

import React from 'react';
import PropTypes from 'prop-types';

const Attributes = (props) => {
  let physicals = [];
  let mentals = [];
  let socials = [];

  for (var attr in props.physical) {
    physicals.push(
      <p className={attr} key={attr}>{attr}: {props.physical[attr]}</p>
    );
  }

  for (var attr in props.mental) {
    mentals.push(
      <p className={attr} key={attr}>{attr}: {props.mental[attr]}</p>
    );
  }

  for (var attr in props.social) {
    socials.push(
      <p className={attr} key={attr}>{attr}: {props.social[attr]}</p>
    );
  }

  return (
    <div className="attributes">
      <div className="physical">
        {physicals}
      </div>
      <div className="social">
        {socials}
      </div>
      <div className="mental">
        {mentals}
      </div>
    </div>
  );
};

Attributes.propTypes = {
  physical: PropTypes.object.isRequired,
  social: PropTypes.object.isRequired,
  mental: PropTypes.object.isRequired,
};

export default Attributes;
