// this view/component will display a fresh character sheet in the case of a `new` view
// or a sheet from the database in the case of a `load` view

//=============================BLOCKS NEEDS TO BE REWORKED============================

import React from 'react';
import $ from 'jquery';
import Info from './Info.jsx';
import Attributes from './Attributes.jsx';
import Abilities from './Abilities.jsx';
import Essence from './Essence.jsx';
import Willpower from './Willpower.jsx';
import Health from './Health.jsx';
import Defense from './Defense.jsx';
import Save from './Save.jsx';
import blockOut from '../blockOut.jsx';

class CharSheet extends React.Component {
  constructor (props) {
    super(props);
    this.state = { ...props.sheet };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInfoChange = this.handleInfoChange.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    $.post('/exalted/save', this.state, () => {
      alert('Character Saved');
    });
  }

  handleInfoChange (e) {
    // setState to update changes
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleChange(e) {
    // setState to update changes
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10),
    });
  }

  render () {
    const { physical, social, mental, abilities, info, health } = blockOut(this.state);
    const { essence, willpower } = this.state;

    const defense = {
      dex: this.state.Dexterity,
      sta: this.state.Stamina,
      man: this.state.Manipulation,
      wits: this.state.Wits,
      dodge: this.state.Dodge,
      brawl: this.state.Brawl,
      martial: this.state['Martial Arts'],
      melee: this.state.Melee,
      integrity: this.state.Integrity,
      socialize: this.state.Socialize,
    };
    
    return (
      <div className="character-display">
        <form id="character-sheet" onSubmit={this.handleSubmit}>
          <Info info={info} handleChange={this.handleInfoChange} />
          <Attributes physical={physical} social={social} mental={mental} handleChange={this.handleChange} />
          <Abilities abilities={abilities} handleChange={this.handleChange} />
          <Essence essence={essence} handleChange={this.handleChange} />
          <Willpower willpower={willpower} handleChange={this.handleChange} />
          <Health health={health} handleChange={this.handleChange} />
          <Defense defense={defense} />
          <Save />
        </form>
      </div>
    );
  }
}

export default CharSheet;
