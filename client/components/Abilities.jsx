// this component will display the `abilities` block of the character sheet

import React from 'react';
import PropTypes from 'prop-types';

const Abilities = (props) => (
  <div className="abilities">
    <p className="name">
      Name: {props.abilities.name}
    </p>
    <p className="caste">
      Caste: {props.abilities.caste}
    </p>
    <p className="concept">
      Concept: {props.abilities.concept}
    </p>
    <p className="supernal">
      Supernal Ability: {props.abilities.supernal}
    </p>
  </div>
);

Abilities.propTypes = {
  abilities: PropTypes.object.isRequired,
};

export default Abilities;
