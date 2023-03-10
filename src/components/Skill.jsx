import '../App.css';
import PropTypes from 'prop-types';

function Skill({ skill }) {
  return (
    <li>
      {skill.name}
      <span className="votes">{skill.vote}</span>
    </li>
  );
}

Skill.propTypes = {
  skill: PropTypes.shape({id : PropTypes.number.isRequired, name: PropTypes.string.isRequired})
}

export default Skill;