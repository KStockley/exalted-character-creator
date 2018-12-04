// this component will display the `essence` block of the character sheet
// possibly add a tracker for committed motes

import React from 'react';
import PropTypes from 'prop-types';

const Essence = (props) => {
  const rating = props.essence || 1;
  const personalPool = rating * 3 + 10;
  const peripheralPool = rating * 7 + 26;
  let dots = [];

  for (let i = 1; i < 6; i += 1) {
    if (rating === i) {
      dots.push(
        <input type="radio" name="essence" className="essence" value={i} key={`willpower${i}`} onChange={props.handleChange} defaultChecked />
      );
    } else {
      dots.push(
        <input type="radio" name="essence" className="essence" value={i} key={`willpower${i}`} onChange={props.handleChange} />
      );
    }
  }

  return(
    <div className="essence">
      <label>
        Essence Rating:
        {dots}
      </label>
      <br />
      <label>
        Personal Motes:
        <input type="number" name="personal" className="personal" placeholder={personalPool} max={personalPool} min="0" />
      </label>
      <br />
      <label>
        Peripheral Motes:
        <input type="number" name="peripheral" className="peripheral" placeholder={peripheralPool} max={peripheralPool} min="0" />
      </label>
    </div>
  );
}

Essence.propTypes = {
  essence: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Essence;
