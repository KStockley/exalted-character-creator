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
    const view = event.target.value;
    this.setState({ view: view });
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
