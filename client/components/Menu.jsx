// this view will present the user with the option to create a new character,
// load an existing character, or delete an existing character
//
// three buttons each of which will change the main app view
// via an onclick handler passed from App
import PropTypes from 'prop-types';
import React from 'react';

const Menu = (props) => {
  return (
    <div className="menu">
      <button className="new" type="button" name="view" value="new" onClick={props.clickHandler}>New</button>
      <button className="load" type="button" name="view" value="load" onClick={props.clickHandler}>Load</button>
      <button className="delete" type="button" name="view" value="delete" onClick={props.clickHandler}>Delete</button>
    </div>
  );
}

Menu.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default Menu;
