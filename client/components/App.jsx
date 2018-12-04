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
      sheet: blank,
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
        console.log(response[0]);
        this.setState({
          [name]: value,
          sheet: response[0],
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
          <CharSheet sheet={this.state.sheet} />
        }
        { this.state.view === 'load' &&
          <CharSheet sheet={this.state.sheet} />
        }
      </div>
    );
  }
}

export default App;
