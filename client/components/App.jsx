import React from 'react';
import $ from 'jquery';
import blank from '../blank.jsx';
import CharSheet from './CharSheet.jsx';
import Menu from './Menu.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      view: 'menu',
      sheet: {},
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler (event) {
    const value = event.target.value;
    const name = event.target.name;
    let charSheet = blank;
    if (value === 'load') {
      const character = prompt('Which character would you like to load?');
      $.get(`/exalted/${character}`, (response) => {
        if(response[0]) {
          charSheet = response[0];
        } else {
          alert(`${character} does not exist, please create them`);
          charSheet.name = character;
        }
        this.setState({
          [name]: value,
          sheet: charSheet,
        });
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  render () {
    return (
      <div className="menu">
        { this.state.view === 'menu' &&
          <Menu clickHandler={this.clickHandler} />
        }
        { this.state.view === 'new' &&
          <CharSheet sheet={blank} />
        }
        { this.state.view === 'load' &&
          <CharSheet sheet={this.state.sheet} />
        }
      </div>
    );
  }
}

export default App;
