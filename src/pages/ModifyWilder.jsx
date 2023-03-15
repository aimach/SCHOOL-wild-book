import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Skill from "../components/Skill";
import { useNavigate } from "react-router-dom";
import "../App.css"

const ModifyWilder = () => {
  const navigate = useNavigate();
  const location= useLocation();
  const {wilder} = location.state

  const [wilderToModify, setWilderToModify] = useState({
    name: wilder.name, 
    email: wilder.email, 
    description: wilder.description, 
  });
  const [skills, setSkills] = useState([]);
  let wilderSkillsOnlyId = wilder.skills.map(e => e.id);
  // console.log({"wilders skills": wilderSkillsOnlyId})
  // console.log({"all skills": skills})
  const [wilderSkills, setWilderSkills] = useState(wilderSkillsOnlyId);



  useEffect(() => {
    const fetchData = async () => {
      const wilders = await axios.get("http://localhost:5000/api/skill");
      setSkills(wilders.data)
    }
    fetchData()
  }, [])

  const handleChecked = (e, skill) => {
    console.log(wilderSkills)
    if (e) {
      setWilderSkills([...wilderSkills, skill.id])
    } else {
      const skillWithIdIndex = wilderSkills.findIndex((element) => element === skill.id);
      if (skillWithIdIndex > -1) {
        wilderSkills.splice(skillWithIdIndex, 1)
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/wilder/${wilder.id}`, wilderToModify)
    // axios.post(`http://localhost:5000/api/wilder/${wilder.data}`, {"skills": wilderSkills})
    navigate("/");
  }

  return (
    <>
    <Header/>
    <form 
    className="container"
    onSubmit={(e) => handleSubmit(e)}>
      <label>Name</label>
      <input
      type="text"
      value={wilderToModify.name}
      onChange={(e) => {
        setWilderToModify({...wilderToModify, name: e.target.value})
      }}
      />
       <br/>
      <label>Email</label>
      <input
      type="email"
      value={wilderToModify.email}
      onChange={(e) => {
        setWilderToModify({...wilderToModify, email: e.target.value})
      }}
      />
      <br/>
      <label>Description</label>
      <input
      type="text"
      value={wilderToModify.description}
      onChange={(e) => {
        setWilderToModify({...wilderToModify, description: e.target.value})
      }}
      />
      <br/>
      <label>Skills</label>
      <ul className="skillsToModify">
        {wilder.skills.map((skill) =>
          <Skill skill={skill} key={skill.id} display={"modify"} wilderId={wilder.id}/>
        )}
      </ul>
      <div className="skills">
      {skills.map((skill) => {  
        // const alreadyChecked = wilderSkillsOnlyId.filter(e => e === skill.id).length > 0;
        return(
        <div key={skill.id}>
        <input
        type="checkbox" 
        onClick={(e) => handleChecked(e.target.checked, skill)}
        // checked = {alreadyChecked}
        />
        {skill.name}
        </div>
        )
      })}
      </div>
      <br/>
      <button className="button">Modify the Wilder</button>
      <br/>
      <Link to="/">
      <button className="button">Get back</button>
      </Link>
    </form>
    <Footer/>
    </>
  )
}

export default ModifyWilder;