// this component will display the `attributes` block of the character sheet

import React from 'react';
import PropTypes from 'prop-types';

const Attributes = (props) => {
  let physicals = [];
  let mentals = [];
  let socials = [];

  for (var attr in props.physical) {
    let dots = [];
    for (let i = 1; i < 6; i += 1) {
      if (props.physical[attr] === i) {
        dots.push(
          <input type="radio" name={attr} className={attr} value={i} key={`${attr}${i}`} defaultChecked />
        );
      } else {
        dots.push(
          <input type="radio" name={attr} className={attr} value={i} key={`${attr}${i}`} />
        );
      }
    }

    physicals.push(
      <label>
        {attr}:
        {dots}
      </label>
    );
  }

  for (var attr in props.social) {
    let dots = [];
    for (let i = 1; i < 6; i += 1) {
      if (props.social[attr] === i) {
        dots.push(
          <input type="radio" name={attr} className={attr} value={i} key={`${attr}${i}`} defaultChecked />
        );
      } else {
        dots.push(
          <input type="radio" name={attr} className={attr} value={i} key={`${attr}${i}`} />
        );
      }
    }

    socials.push(
      <label>
        {attr}:
        {dots}
      </label>
    );
  }

  for (var attr in props.mental) {
    let dots = [];
    for (let i = 1; i < 6; i += 1) {
      if (props.mental[attr] === i) {
        dots.push(
          <input type="radio" name={attr} className={attr} value={i} key={`${attr}${i}`} defaultChecked />
        );
      } else {
        dots.push(
          <input type="radio" name={attr} className={attr} value={i} key={`${attr}${i}`} />
        );
      }
    }

    mentals.push(
      <label>
        {attr}:
        {dots}
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
