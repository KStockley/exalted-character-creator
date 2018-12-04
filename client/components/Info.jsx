// this component will display the `info` block of the character sheet

import React from 'react';
import PropTypes from 'prop-types';

const Info = (props) => (
  <div className="info">
    <label>
      Name: 
      <input type="text" name="name" className="name" value={props.info.name} onChange={props.handleChange} required />
    </label>
    <label>
      Caste: 
      <input type="text" name="caste" className="caste" value={props.info.caste} onChange={props.handleChange} />
    </label>
    <label>
      Concept: 
      <input type="text" name="concept" className="concept" value={props.info.concept} onChange={props.handleChange} />
    </label>
    <label>
      Supernal Ability: 
      <input type="text" name="supernal" className="supernal" value={props.info.supernal} onChange={props.handleChange} />
    </label>
  </div>
);

Info.propTypes = {
  info: PropTypes.object.isRequired,
};

export default Info;
