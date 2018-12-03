// this component will display the `attributes` block of the character sheet

import React from 'react';
import PropTypes from 'prop-types';

const Attributes = (props) => {
  let physicals = [];
  let mentals = [];
  let socials = [];

  for (var attr in props.physical) {
    physicals.push(
      <label>
        {attr}:
        <input type="radio" name={attr} className={attr} value="1" key={attr + '1'} />
        <input type="radio" name={attr} className={attr} value="2" key={attr + '2'} />
        <input type="radio" name={attr} className={attr} value="3" key={attr + '3'} />
        <input type="radio" name={attr} className={attr} value="4" key={attr + '4'} />
        <input type="radio" name={attr} className={attr} value="5" key={attr + '5'} />
      </label>
    );
  }

  for (var attr in props.social) {
    socials.push(
      <label>
        {attr}:
        <input type="radio" name={attr} className={attr} value="1" key={attr + '1'} />
        <input type="radio" name={attr} className={attr} value="2" key={attr + '2'} />
        <input type="radio" name={attr} className={attr} value="3" key={attr + '3'} />
        <input type="radio" name={attr} className={attr} value="4" key={attr + '4'} />
        <input type="radio" name={attr} className={attr} value="5" key={attr + '5'} />
      </label>
    );
  }

  for (var attr in props.mental) {
    mentals.push(
      <label>
        {attr}:
        <input type="radio" name={attr} className={attr} value="1" key={attr + '1'} />
        <input type="radio" name={attr} className={attr} value="2" key={attr + '2'} />
        <input type="radio" name={attr} className={attr} value="3" key={attr + '3'} />
        <input type="radio" name={attr} className={attr} value="4" key={attr + '4'} />
        <input type="radio" name={attr} className={attr} value="5" key={attr + '5'} />
      </label>
    );
  }

  return (
    <div className="attributes">
      <div className="physical">
        {physicals}
      </div>
      <div className="social">
        {socials}
      </div>
      <div className="mental">
        {mentals}
      </div>
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
