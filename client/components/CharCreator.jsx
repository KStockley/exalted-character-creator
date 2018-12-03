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
    const { info, physical, social, mental, abilities, essence, health } = this.state;

    return (
      <div className="character-display">
        <form className="character-sheet">
          <Info info={info} />
          <Attributes physical={physical} social={social} mental={mental} />
          <Abilities abilities={abilities} />
          <Essence essence={essence} />
          <Health health={health} />
        </form>
      </div>
    );
  }
}

export default Creator;
