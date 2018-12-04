// this component will display the `defense` block of the character sheet

import React from 'react';
import PropTypes from 'prop-types';

const Defense = (props) => {
  const parryDef = [props.defense.melee, props.defense.brawl, props.defense.martial].sort()[2];
  return (
    <div className="defense">
      <fieldset>
        <legend>Defenses</legend>
        <div className="soak">Soak: {props.defense.sta}</div>
        <div className="parry">Parry: {Math.ceil((props.defense.dex + (parryDef || 0)) / 2)}</div>
        <div className="evasion">Evasion: {Math.ceil((props.defense.dex + (props.defense.dodge || 0)) / 2)}</div>
        <div className="resolve">Resolve: {Math.ceil((props.defense.wits + (props.defense.integrity || 0)) / 2)}</div>
        <div className="guile">Guile: {Math.ceil((props.defense.man + (props.defense.socialize || 0)) / 2)}</div>
      </fieldset>
    </div>
  );
};

Defense.propTypes = {
  defense: PropTypes.object.isRequired,
};

export default Defense;
