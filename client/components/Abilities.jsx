// this component will display the `abilities` block of the character sheet

import React from 'react';
import PropTypes from 'prop-types';

const Abilities = (props) => {
  let abilityList = [];

  for (var ability in props.abilities) {
    let dots = [];
    let rating = props.abilities[ability] || 0;
    for (let i = 1; i < 6; i += 1) {
      if (rating === i) {
        dots.push(
          <input type="radio" name={ability} className={ability} value={i} key={`${ability}${i}`} onChange={props.handleChange} defaultChecked />
        );
      } else {
        dots.push(
          <input type="radio" name={ability} className={ability} value={i} key={`${ability}${i}`} onChange={props.handleChange} />
        );
      }
    }

    abilityList.push(
      <label>
        {ability}:
        {dots}
        <br />
      </label>
    );
  }

  return (
    <div className="abilities">
      {abilityList}
    </div>
  );
};

Abilities.propTypes = {
  abilities: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Abilities;
