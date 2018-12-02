// this component will display the `abilities` block of the character sheet

import React from 'react';
import PropTypes from 'prop-types';

const Abilities = (props) => {
  let abilityList = [];
  
  for (var ability in props.abilities) {
    abilityList.push(
      <p className={ability} key={ability}>{ability}: {props.abilities[ability]}</p>
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
};

export default Abilities;
