// this component will display the `essence` block of the character sheet
// possibly add a tracker for committed motes

import React from 'react';
import PropTypes from 'prop-types';

const Essence = (props) => {
  const personalPool = props.essence * 3 + 10;
  const peripheralPool = props.essence * 7 + 26;

  return(
    <div className="essence">
      <label>
        Essence Rating:
        <input type="radio" name="essence" className="essence" value="1" onChange={props.handleChange} defaultChecked />
        <input type="radio" name="essence" className="essence" value="2" onChange={props.handleChange} />
        <input type="radio" name="essence" className="essence" value="3" onChange={props.handleChange} />
        <input type="radio" name="essence" className="essence" value="4" onChange={props.handleChange} />
        <input type="radio" name="essence" className="essence" value="5" onChange={props.handleChange} />
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
