import '../App.css';
import Skill from './Skill';
import profile from "../assets/profile.png"

function Wilder({ wilder }) {
  console.log(wilder)
  return (
    <article className="card">
      <img src={profile} alt="Jane Doe Profile" />
      <h3>{wilder.name}</h3>
      <p>
        {wilder.description}
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {wilder.skills.map((skill) =>
          <Skill skill={skill} />
        )}
      </ul>
    </article>
  );
}

export default Wilder;