const React = require('react');
const Creator = require('./CharCreator.jsx');
const Menu = require('./Menu.jsx');

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      view: 'menu'
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler (event) {
    // function to change views when a menu button is clicked
  }

  render () {
    switch(this.state.view) {
      case 'menu':
        return (
          <div className="menu">
            <Menu clickHandler={this.clickHandler} />
          </div>
        );
      case 'character':
        return (
          <div className="creator">
            <Creator />
          </div>
        );
      default:
        return (
          <div>
            Uh Oh
          </div>
        );
    }
  }
}

export default App;
