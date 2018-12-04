// this component will display the `info` block of the character sheet

import React from 'react';
import PropTypes from 'prop-types';

const Info = (props) => (
  <div className="info">
    <label>
      Name: 
      <input type="text" name="name" className="name" handleChange={handleChange}></input>
    </label>
    <label>
      Caste: 
      <input type="text" name="caste" className="caste" handleChange={handleChange}></input>
    </label>
    <label>
      Concept: 
      <input type="text" name="concept" className="concept" handleChange={handleChange}></input>
    </label>
    <label>
      Supernal Ability: 
      <input type="text" name="supernal" className="supernal" handleChange={handleChange}></input>
    </label>
  </div>
);

Info.propTypes = {
  info: PropTypes.object.isRequired,
};

export default Info;
