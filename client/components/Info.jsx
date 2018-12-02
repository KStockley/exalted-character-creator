// this component will display the `info` block of the character sheet

import React from 'react';
import PropTypes from 'prop-types';

const Info = (props) => (
  <div className="info">
    <p className="name">
      Name: {props.info.name}
    </p>
    <p className="caste">
      Caste: {props.info.caste}
    </p>
    <p className="concept">
      Concept: {props.info.concept}
    </p>
    <p className="supernal">
      Supernal Ability: {props.info.supernal}
    </p>
  </div>
);

Info.propTypes = {
  info: PropTypes.object.isRequired,
};

export default Info;
