// this component will display the `info` block of the character sheet

import React from 'react';
import PropTypes from 'prop-types';
import Caste from './Caste.jsx';
import Supernal from './Supernal.jsx';

const Info = (props) => (
  <div className="info">
    <label>
      Name: 
      <input type="text" name="name" className="name" value={props.info.name} onChange={props.handleChange} required />
    </label>
    <label>
      Concept: 
      <input type="text" name="concept" className="concept" value={props.info.concept} onChange={props.handleChange} />
    </label>
    <br />
    <Caste caste={props.info.caste} castes={props.castes} handleChange={props.handleChange} />
    <Supernal className="supernal" supernal={props.info.supernal} abilities={props.abilities} handleChange={props.handleChange} />
  </div>
);

Info.propTypes = {
  info: PropTypes.object.isRequired,
  abilities: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  castes: PropTypes.array.isRequired,
};

export default Info;
