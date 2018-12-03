// this view/component will display a fresh character sheet in the case of a `new` view
// or a sheet from the database in the case of a `load` view

import React from 'react';
import Info from './Info.jsx';
import Attributes from './Attributes.jsx';
import Abilities from './Abilities.jsx';
import Essence from './Essence.jsx';
import Health from './Health.jsx';
import Defense from './Defense.jsx';
import Save from './Save.jsx';

class Creator extends React.Component {
  constructor (props) {
    super(props);
    this.state = { ...props.sheet };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange(e) {
    // setState to update changes
    this.setState({
      e.target.name: e.target.value,
    });
  }

  render () {
    const { info, physical, social, mental, abilities, essence, health } = this.state;

    const defense = {
      dex: physical.Dexterity,
      sta: physical.Stamina,
      man: social.Manipulation,
      wits: mental.Wits,
      dodge: abilities.Dodge,
      brawl: abilities.Brawl,
      martial: abilities['Martial Arts'],
      melee: abilities.Melee,
      integrity: abilities.Integrity,
      socialize: abilities.Socialize,
    };

    return (
      <div className="character-display">
        <form id="character-sheet" onSubmit={handleSubmit}>
          <Info info={info} />
          <Attributes physical={physical} social={social} mental={mental} onChange={this.handleChange} />
          <Abilities abilities={abilities} onChange={this.handleChange} />
          <Essence essence={essence} onChange={this.handleChange} />
          <Health health={health} onChange={this.handleChange} />
          <Defense defense={defense} onChange={this.handleChange} />
          <Save />
        </form>
      </div>
    );
  }
}

export default Creator;
