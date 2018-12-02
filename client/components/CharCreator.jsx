const React = require('react');

// import Info from './info.jsx';
// import Attributes from './attr.jsx';
// import Abilities from './abilities.jsx';
// import Essence from 'essence.jsx';
// import Health from 'health.jsx';
// import Defense from 'defense.jsx';

class Creator extends React.Component {
  constructor (props) {
    super(props);
    this.state = { ...props.sheet };
  }

  render () {
    return (
      <div className="character">
        Creator Component Here
      </div>
    );
  }
}

export default Creator;
