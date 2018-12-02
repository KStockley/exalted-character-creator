// this component will display the `essence` block of the character sheet
// possibly add a tracker for committed motes

import React from 'react';
import PropTypes from 'prop-types';

const Essence = (props) => (
  <div className="essence">
    <p className="rating">
      Essence Rating: {props.essence.rating}
    </p>
    <p className="personal">
      Personal Motes: {props.essence.personal}
    </p>
    <p className="peripheral">
      Peripheral Motes: {props.essence.peripheral}
    </p>
  </div>
);

Essence.propTypes = {
  essence: PropTypes.object.isRequired,
};

export default Essence;
