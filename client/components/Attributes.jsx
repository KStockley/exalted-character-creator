// this component will display the `attributes` block of the character sheet

import React from 'react';
import PropTypes from 'prop-types';
import Subset from './Subset.jsx';

const Attributes = (props) => {

  return (
    <div className="attributes">
      <Subset className="physical" subset='physical' stats={props.physical} />
      <Subset className="social" subset='social' stats={props.social} />
      <Subset className="mental" subset='mental' stats={props.mental} />
      <br />
    </div>
  );
};

Attributes.propTypes = {
  physical: PropTypes.object.isRequired,
  social: PropTypes.object.isRequired,
  mental: PropTypes.object.isRequired,
};

export default Attributes;
