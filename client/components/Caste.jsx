// this component will display the `Caste` selector of the character sheet

import React from 'react';
import PropTypes from 'prop-types';

const Caste = (props) => {
  let castes = [];

  for (let i = 0; i < props.castes.length; i += 1) {
    castes.push(
      <option value={props.castes[i]} key={props.castes[i]}>{props.castes[i]}</option>
    );
  }

  return (
    <label>
      Caste 
      <select name="caste" value={props.caste} onChange={props.handleChange}>
        {castes}
      </select>
    </label>
  );
}

Caste.propTypes = {
  castes: PropTypes.array.isRequired,
  caste: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Caste;
