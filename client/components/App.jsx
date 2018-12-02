const React = require('react');
const blank = require('../blank.jsx');

import Creator from './CharCreator.jsx';
import Menu from './Menu.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      view: 'menu'
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
          <Creator sheet={blank} />
        }
      </div>
    );
  }
}

export default App;
