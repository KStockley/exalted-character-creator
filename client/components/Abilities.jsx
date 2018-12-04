// this component will display the `abilities` block of the character sheet

import React from 'react';
import PropTypes from 'prop-types';

const Abilities = (props) => {
  let abilityList = [];
  
  for (var ability in props.abilities) {
    abilityList.push(
      <label>
        {ability}:
        <input type="radio" name={ability} className={ability} value="1" key={ability + '1'} onChange={props.handleChange} />
        <input type="radio" name={ability} className={ability} value="2" key={ability + '2'} onChange={props.handleChange} />
        <input type="radio" name={ability} className={ability} value="3" key={ability + '3'} onChange={props.handleChange} />
        <input type="radio" name={ability} className={ability} value="4" key={ability + '4'} onChange={props.handleChange} />
        <input type="radio" name={ability} className={ability} value="5" key={ability + '5'} onChange={props.handleChange} />
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
  handleChange: PropTypes.func.isRequired,
};

export default Abilities;
