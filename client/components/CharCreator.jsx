const React = require('react');
const Info = require('./info.jsx');
const Attributes = require('./attr.jsx');
const Abilities = require('./abilities.jsx');
const Essence = require('essence.jsx');
const Health = require('health.jsx');
const Defense = require('defense.jsx');

class Creator extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      character: {},
    };
  }

  render () {
    return (
      <div className="character">
        <Info />
        <Attributes />
        <Abilities />
        <Essence />
        <Health />
        <Defense />
      </div>
    );
  }
}

export default Creator;
