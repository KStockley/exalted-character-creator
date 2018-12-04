// this component will display the `Supernal Ability` selector of the character sheet

import React from 'react';
import PropTypes from 'prop-types';

const Supernal = (props) => {
  let abilities = [];

  for (var ability in props.abilities) {
    abilities.push(
      <option value={ability} key={ability}>{ability}</option>
    );
  }

  return (
    <label>
      Supernal Ability: 
      <select name="supernal" value={props.supernal} onChange={props.handleChange}>
        {abilities}
      </select>
    </label>
  );
}

Supernal.propTypes = {
  abilities: PropTypes.object.isRequired,
  supernal: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Supernal;
