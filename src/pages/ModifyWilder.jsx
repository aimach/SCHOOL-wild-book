import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ModifyWilder = () => {
  const location= useLocation();
  const {wilder} = location.state
  console.log(wilder)

  // const [wilder, setWilder] = useState({name: "", email: "", description: ""});
  const [skills, setSkills] = useState([]);
  const [wilderSkills, setWilderSkills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const wilders = await axios.get("http://localhost:5000/api/skill");
      setSkills(wilders.data)
    }
    fetchData()
  }, [])

  const handleChecked = (e, skill) => {
    if (e) {
      setWilderSkills([...wilderSkills, skill.id])
    } else {
      const skillWithIdIndex = wilderSkills.findIndex((element) => element.id === skill.id);
      if (skillWithIdIndex > -1) {
        wilderSkills.splice(skillWithIdIndex, 1)
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post("http://localhost:5000/api/wilder", wilder)
    .then((res) => console.log({res : res.data}));
    // axios.post(`http://localhost:5000/api/wilder/${wilder.id}`, {skills: wilderSkills})
    // navigate("/");
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
      value={wilder.name}

      />
       <br/>
      <label>Email</label>
      <input
      type="email"
      value={wilder.email}

      />
      <br/>
      <label>Description</label>
      <input
      type="text"
      value={wilder.description}

      />
      <br/>
      <label>Skills</label>
      <div className="skills">
      {skills.map((skill) => {
        return(
        <div>
        <input type="checkbox" onClick={(e) => handleChecked(e.target.checked, skill)}/>
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