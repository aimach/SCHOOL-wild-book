import '../App.css';

function Skill({ skill }) {
  return (
    <li>
      {skill.name}
      <span className="votes">{skill.vote}</span>
    </li>
  );
}

export default Skill;