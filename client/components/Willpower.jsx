// this component will display the `essence` block of the character sheet
// possibly add a tracker for committed motes

import React from 'react';
import PropTypes from 'prop-types';

const Willpower = (props) => {
  let dots = [];
  const rating = props.willpower || 1;
  for (let i = 1; i < 10; i += 1) {
    if (rating === i) {
      dots.push(
        <input type="radio" name="willpower" className="willpower" value={i} key={`willpower${i}`} onChange={props.handleChange} defaultChecked />
      );
    } else {
      dots.push(
        <input type="radio" name="willpower" className="willpower" value={i} key={`willpower${i}`} onChange={props.handleChange} />
      );
    }
  }

  return(
    <div className="willpower">
      <label>
        Willpower:
        {dots}
      </label>
    </div>
  );
};

Willpower.propTypes = {
  willpower: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Willpower;
