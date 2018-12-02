// this component will display the `attributes` block of the character sheet

import React from 'react';
import PropTypes from 'prop-types';

const Attributes = (props) => (
  <div className="attributes">
    <div className="physical">
      <p>Strength: {props.physical.strength}</p>
      <p>Dexterity: {props.physical.dexterity}</p>
      <p>Stamina: {props.physical.stamina}</p>
    </div>
    <div className="social">
      <p>Charisma: {props.social.charisma}</p>
      <p>Manipulation: {props.social.manipulation}</p>
      <p>Appearance: {props.social.appearance}</p>
    </div>
    <div className="mental">
      <p>Perception: {props.mental.perception}</p>
      <p>Intelligence: {props.mental.intelligence}</p>
      <p>Wits: {props.mental.wits}</p>
    </div>
  </div>
);

Attributes.propTypes = {
  physical: PropTypes.object.isRequired,
  social: PropTypes.object.isRequired,
  mental: PropTypes.object.isRequired,
};

export default Attributes;
