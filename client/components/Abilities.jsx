// this component will display the `abilities` block of the character sheet

import React from 'react';
import PropTypes from 'prop-types';

const Abilities = (props) => {
  let abilityList = [];
  
  for (var ability in props.abilities) {
    abilityList.push(
      <label>
        {ability}:
        <input type="radio" name="social" className={ability} value="1" key={ability + '1'} />
        <input type="radio" name="social" className={ability} value="2" key={ability + '2'} />
        <input type="radio" name="social" className={ability} value="3" key={ability + '3'} />
        <input type="radio" name="social" className={ability} value="4" key={ability + '4'} />
        <input type="radio" name="social" className={ability} value="5" key={ability + '5'} />
        <br />
      </label>
    );
  }

  return (
    <div className="abilities">
      {abilityList}
    </div>
  );
};

Abilities.propTypes = {
  abilities: PropTypes.object.isRequired,
};

export default Abilities;
