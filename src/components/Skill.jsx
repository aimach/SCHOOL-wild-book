import '../App.css';
import PropTypes from 'prop-types';
import close from "../assets/close.png";
import axios from 'axios';

function Skill({ skill, display, wilderId }) {

  const handleDeleteSkill = (skillId) => {
    axios.delete(`http://localhost:5000/api/wilder/${wilderId}/skill/${skillId}`);
    window.location.reload();
  }

  return (
    <li>
      {skill.name}
      <span className="votes">{skill.vote}</span>
      {display === "modify" ? 
      <img src={close} width="15px" height="15px" alt="cross" onClick={() => handleDeleteSkill(skill.id)}/> : null}
    </li>
  );
}

Skill.propTypes = {
  skill: PropTypes.shape({id : PropTypes.number.isRequired, name: PropTypes.string.isRequired})
}

export default Skill;