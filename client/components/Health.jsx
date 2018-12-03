// this component will display the `health` block of the character sheet
// possibly add a tracker for committed motes

import React from 'react';
import PropTypes from 'prop-types';

const Health = (props) => {
  let unhurtLevels = [];
  let hurtLevels = [];
  let woundedLevels = [];
  let crippledLevels = [];
  let incap = [];

  for(let i = 0; i < props.health['-0']; i += 1) {
    unhurtLevels.push(
      <input type="checkbox" name="-0" key={'unhurt' + i} />
    );
  }

  for(let i = 0; i < props.health['-1']; i += 1) {
    hurtLevels.push(
      <input type="checkbox" name="-1" key={'hurt' + i} />
    );
  }

  for(let i = 0; i < props.health['-2']; i += 1) {
    woundedLevels.push(
      <input type="checkbox" name="-2" key={'wounded' + i} />
    );
  }

  for(let i = 0; i < props.health['-4']; i += 1) {
    crippledLevels.push(
      <input type="checkbox" name="-4" key={'crippled' + i} />
    );
  }

  return(
    <fieldset className="health">
      <legend>Health Levels</legend>
      <label>
        -0
        {unhurtLevels}
      </label>
      <br />
      <label>
        -1
        {hurtLevels}
      </label>
      <br />
      <label>
        -2
        {woundedLevels}
      </label>
      <br />
      <label>
        -4
        {crippledLevels}
      </label>
      <br />
      <label>
        Incapacitated
        <input type="checkbox" name="incap" />
      </label>
    </fieldset>
  );
}

Health.propTypes = {
  health: PropTypes.object.isRequired,
};

export default Health;
