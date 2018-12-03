// this component will display the `defense` block of the character sheet

import React from 'react';
import PropTypes from 'prop-types';

const Defense = (props) => (
  <div className="defense">
    <fieldset>
      <legend>Defenses</legend>
      <div className="soak">Soak: {props.defense.sta}</div>
      <div className="parry">Parry: {Math.ceil((props.defense.dex + props.defense.melee) / 2)}</div>
      <div className="evasion">Evasion: {Math.ceil((props.defense.dex + props.defense.dodge) / 2)}</div>
      <div className="resolve">Resolve: {Math.ceil((props.defense.wits + props.defense.integrity) / 2)}</div>
      <div className="guile">Guile: {Math.ceil((props.defense.man + props.defense.socialize) / 2)}</div>
    </fieldset>
  </div>
);

Defense.propTypes = {
  defense: PropTypes.object.isRequired,
};

export default Defense;
