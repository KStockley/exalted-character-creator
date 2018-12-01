import PropTypes from 'prop-types';

const Info = (props) => (
  <div className="info">
    <p className="name">
      {props.name}
    </p>
    <p className="caste">
      {props.caste}
    </p>
    <p className="concept">
      {props.concept}
    </p>
    <p className="supernal">
      {props.supernal}
    </p>
  </div>
);

Info.PropTypes = {
  name: PropTypes.string.isRequired,
  caste: PropTypes.string.isRequired,
  concept: PropTypes.string.isRequired,
  supernal: PropTypes.string.isRequired,
};

export default Creator;
