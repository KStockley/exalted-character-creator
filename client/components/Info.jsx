// this component will display the `info` block of the character sheet

import React from 'react';
import PropTypes from 'prop-types';

const Info = (props) => (
  <div className="info">
    <label for="name">Name: </label>
    <input type="text" name="name" className="name"></input>
    <br />
    <label for="caste">Caste: </label>
    <input type="text" name="caste" className="caste"></input>
    <br />
    <label for="concept">Concept: </label>
    <input type="text" name="concept" className="concept"></input>
    <br />
    <label for="supernal">Supernal Ability: </label>
    <input type="text" name="supernal" className="supernal"></input>
  </div>
);

Info.propTypes = {
  info: PropTypes.object.isRequired,
};

export default Info;
