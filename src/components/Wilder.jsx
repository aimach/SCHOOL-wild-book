import '../App.css';
import Skill from './Skill';
import profile from "../assets/profile.png"
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Wilder({ wilder, isDeleting, isModified }) {

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/wilder/${id}`)
    window.location.reload(false);
  }

  return (
    <article className="card">
      <img src={profile} alt="wilder profile" />
      <h3>{wilder.name}</h3>
      <p>
        {wilder.description}
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {wilder.skills.map((skill) =>
          <Skill skill={skill} key={skill.id}/>
        )}
      </ul>
      {isModified ? (<Link to={`/modify`} state={{ wilder: wilder}}><button className='button'>Modify</button></Link>) : null}
      {isDeleting ? (<button className='button' onClick={() => handleDelete(wilder.id)}>Delete</button>) : null}
    </article>
  );
}

Wilder.propTypes = {
  wilder: PropTypes.shape({id : PropTypes.number.isRequired, name: PropTypes.string.isRequired, email: PropTypes.string.isRequired, skills: PropTypes.array })
}

export default Wilder;