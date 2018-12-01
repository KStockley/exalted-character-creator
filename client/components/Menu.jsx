// this view will present the user with the option to create a new character,
// load an existing character, or delete an existing character
//
// three buttons each of which will change the main app view
// via an onclick handler passed from App

const Menu = (props) => {
  return (
    <div className="menu">
      <button className="new" type="button" value="new" onclick={props.clickHandler}>New</button>
      <button className="load" type="button" value="load" onclick={props.clickHandler}>Load</button>
      <button className="delete" type="button" value="delete" onclick={props.clickHandler}>Delete</button>
    </div>
  );
}

Menu.PropTypes = {
  clickHandler: PropTypes.func.isRequired,
};

module.exports = { Menu };