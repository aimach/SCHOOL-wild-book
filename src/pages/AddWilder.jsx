import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const AddWilder = () => {
  const [wilder, setWilder] = useState({name: "", email: "", description: ""});
  const [skills, setSkills] = useState([]);
  const [wilderSkills, setWilderSkills] = useState([]);

  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newWilder = await axios.post("http://localhost:5000/api/wilder", wilder)
    console.log(wilderSkills)
    axios.post(`http://localhost:5000/api/wilder/${newWilder.data.id}`, {"skills": wilderSkills})
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
      value={wilder.name}
      onChange={(e) => {
        setWilder({...wilder, name: e.target.value})
      }}
      />
       <br/>
      <label>Email</label>
      <input
      type="email"
      value={wilder.email}
      onChange={(e) => {
        setWilder({...wilder, email: e.target.value})
      }}
      />
      <br/>
      <label>Description</label>
      <input
      type="text"
      value={wilder.description}
      onChange={(e) => {
        setWilder({...wilder, description: e.target.value})
      }}
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
      <button className="button">Add Wilder</button>
      <br/>
      <Link to="/">
      <button className="button">Get back</button>
      </Link>
    </form>
    <Footer/>
    </>
  )
}

export default AddWilder;