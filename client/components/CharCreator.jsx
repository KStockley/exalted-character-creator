// this view/component will display a fresh character sheet in the case of a `new` view
// or a sheet from the database in the case of a `load` view

import React from 'react';
import Info from './Info.jsx';
import Attributes from './Attributes.jsx';
import Abilities from './Abilities.jsx';
import Essence from './Essence.jsx';
import Health from './Health.jsx';
// import Defense from './Defense.jsx';

class Creator extends React.Component {
  constructor (props) {
    super(props);
    this.state = { ...props.sheet };
  }

  render () {
    return (
      <div className="character-display">
        <form className="character-sheet">
          <Info info={this.state.info} />
          <Attributes physical={this.state.physical} social={this.state.social} mental={this.state.mental} />
          <Abilities abilities={this.state.abilities} />
          <Essence essence={this.state.essence} />
          <Health health={this.state.health} />
        </form>
      </div>
    );
  }
}

export default Creator;
