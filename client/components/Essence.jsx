// this component will display the `essence` block of the character sheet
// possibly add a tracker for committed motes

import React from 'react';
import PropTypes from 'prop-types';

const Essence = (props) => {
  const personalPool = props.essence.rating * 3 + 10;
  const peripheralPool = props.essence.rating * 7 + 26;

  return(
    <div className="essence">
      <label>
        Essence Rating:
        <input type="radio" name="rating" className="rating" value="1" />
        <input type="radio" name="rating" className="rating" value="2" />
        <input type="radio" name="rating" className="rating" value="3" />
        <input type="radio" name="rating" className="rating" value="4" />
        <input type="radio" name="rating" className="rating" value="5" />
      </label>
      <br />
      <label>
        Personal Motes:
        <input type="number" name="rating" className="personal" placeholder={personalPool} max={personalPool} min="0" />
      </label>
      <br />
      <label>
        Peripheral Motes:
        <input type="number" name="rating" className="peripheral" placeholder={peripheralPool} max={peripheralPool} min="0" />
      </label>
    </div>
  );
}

Essence.propTypes = {
  essence: PropTypes.object.isRequired,
};

export default Essence;
