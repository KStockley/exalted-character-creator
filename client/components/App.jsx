import React from 'react';
import blank from '../blank.jsx';
import CharSheet from './CharSheet.jsx';
import Menu from './Menu.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      view: 'menu',
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler (event) {
    const view = event.target.value;
    this.setState({ view: view });
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
          <CharSheet sheet={this.state.character} />
        }
      </div>
    );
  }
}

export default App;
