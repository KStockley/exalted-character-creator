import React from 'react';
import PropTypes from 'prop-types';

const Subset = (props) => {
  let attrs = [];

  for (var stat in props.stats) {
    let dots = [];
    for (let i = 1; i < 6; i += 1) {
      if (props.stats[stat] === i) {
        dots.push(
          <input type="radio" name={stat} className={props.subset} value={i} key={`${stat}${i}`} onChange={props.handleChange} defaultChecked />
        );
      } else {
        dots.push(
          <input type="radio" name={stat} className={props.subset} value={i} key={`${stat}${i}`} onChange={props.handleChange} />
        );
      }
    }

    attrs.push(
      <label>
        {stat}:
        {dots}
      </label>
    );
  }

  return attrs;
};

Subset.propTypes = {
  stats: PropTypes.object.isRequired,
  subset: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Subset;