// this component will display the `attributes` block of the character sheet

import React from 'react';
import PropTypes from 'prop-types';

const Attributes = (props) => {
  let physicals = [];
  let mentals = [];
  let socials = [];

  for (var attr in props.physical) {
    physicals.push(
      <div className="physical">
        {attr}:
        <label for={attr} />
        <input type="radio" name="physical" className={attr} value="1" key={attr} />
        <input type="radio" name="physical" className={attr} value="2" key={attr} />
        <input type="radio" name="physical" className={attr} value="3" key={attr} />
        <input type="radio" name="physical" className={attr} value="4" key={attr} />
        <input type="radio" name="physical" className={attr} value="5" key={attr} />
      </div>
    );
  }

  for (var attr in props.mental) {
    mentals.push(
      <div className="mental">
        {attr}:
        <label for={attr} />
        <input type="radio" name="mental" className={attr} value="1" key={attr} />
        <input type="radio" name="mental" className={attr} value="2" key={attr} />
        <input type="radio" name="mental" className={attr} value="3" key={attr} />
        <input type="radio" name="mental" className={attr} value="4" key={attr} />
        <input type="radio" name="mental" className={attr} value="5" key={attr} />
      </div>
    );
  }

  for (var attr in props.social) {
    socials.push(
      <div className="social">
        {attr}:
        <label for={attr} />
        <input type="radio" name="social" className={attr} value="1" key={attr} />
        <input type="radio" name="social" className={attr} value="2" key={attr} />
        <input type="radio" name="social" className={attr} value="3" key={attr} />
        <input type="radio" name="social" className={attr} value="4" key={attr} />
        <input type="radio" name="social" className={attr} value="5" key={attr} />
      </div>
    );
  }

  return (
    <div className="attributes">
      {physicals}
      {socials}
      {mentals}
    </div>
  );
};

Attributes.propTypes = {
  physical: PropTypes.object.isRequired,
  social: PropTypes.object.isRequired,
  mental: PropTypes.object.isRequired,
};

export default Attributes;
