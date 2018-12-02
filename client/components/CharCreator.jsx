// this view/component will display a fresh character sheet in the case of a `new` view
// or a sheet from the database in the case of a `load` view

import React from 'react';
import Info from './Info.jsx';
// import Attributes from './attr.jsx';
// import Abilities from './abilities.jsx';
// import Essence from 'essence.jsx';
// import Health from 'health.jsx';
// import Defense from 'defense.jsx';

class Creator extends React.Component {
  constructor (props) {
    super(props);
    this.state = { ...props.sheet };
  }

  render () {
    return (
      <div className="character">
        <Info info={this.state.info} />
      </div>
    );
  }
}

export default Creator;
