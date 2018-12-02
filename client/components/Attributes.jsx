// this component will display the `attributes` block of the character sheet

import React from 'react';
import PropTypes from 'prop-types';

const Attributes = (props) => (
  <div className="attributes">
    <div className="physical">
      <p className="strength">Strength: {props.physical.strength}</p>
      <p className="dexterity">Dexterity: {props.physical.dexterity}</p>
      <p className="stamina">Stamina: {props.physical.stamina}</p>
    </div>
    <div className="social">
      <p className="charisma">Charisma: {props.social.charisma}</p>
      <p className="manipulation">Manipulation: {props.social.manipulation}</p>
      <p className="appearance">Appearance: {props.social.appearance}</p>
    </div>
    <div className="mental">
      <p className="perception">Perception: {props.mental.perception}</p>
      <p className="intelligence">Intelligence: {props.mental.intelligence}</p>
      <p className="wits">Wits: {props.mental.wits}</p>
    </div>
  </div>
);

Attributes.propTypes = {
  physical: PropTypes.object.isRequired,
  social: PropTypes.object.isRequired,
  mental: PropTypes.object.isRequired,
};

export default Attributes;
