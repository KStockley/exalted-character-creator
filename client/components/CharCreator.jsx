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
    this.handleChange = this.handleChange.bind(this);
    this.handleInfoChange = this.handleInfoChange.bind(this);
    this.handleAttrChange = this.handleAttrChange.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    console.log(this.state);
    alert('Character Saved');
  }

  handleChange (e) {
    // setState to update changes
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleInfoChange (e) {
    // setState to update changes
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10),
    });
  }

  handleAttrChange(e) {
    // setState to update changes
    const subset = e.target.name.split('.')[0];
    const attr = e.target.name.split('.')[1];
    this.setState({
      [subset]: {
        [attr]: parseInt(e.target.value, 10),
      }
    });
  }

  render () {
    const { physical, social, mental, abilities, essence, health } = this.state;
    const info = {
      name: this.state.name,
      caste: this.state.caste,
      concept: this.state.concept,
      supernal: this.state.supernal,
    };

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
        <form id="character-sheet" onSubmit={this.handleSubmit}>
          <Info info={info} handleChange={this.handleInfoChange} />
          <Attributes physical={physical} social={social} mental={mental} onChange={this.handleAttrChange} />
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
