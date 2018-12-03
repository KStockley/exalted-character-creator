// this component will display the `defense` block of the character sheet

import React from 'react';
import PropTypes from 'prop-types';

const Defense = (props) => (
  <div className="defense">
    <fieldset>
      <legend>Defenses</legend>
      <div className="soak">Soak: {props.sta}</div>
      <div className="parry">Parry: {(props.dex + props.melee) / 2}</div>
      <div className="evasion">Evasion: {(props.dex + props.dodge) / 2}</div>
      <div className="resolve">Resolve: {(props.wits + props.integrity) / 2}</div>
      <div className="guile">Guile: {(props.man + props.socialize) / 2}</div>
    </fieldset>
  </div>
);

Defense.propTypes = {
  defense: PropTypes.object.isRequired,
};

export default Defense;
