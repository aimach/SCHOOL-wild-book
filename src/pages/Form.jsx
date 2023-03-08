import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AddWilder = () => {
  const [wilder, setWilder] = useState({name: "", email: "", description: ""});
  return (
    <>
    <Header/>
    <form 
    className="container"
    onSubmit={(e) => {
      e.preventDefault();
      axios.post("http://localhost:5000/api/wilder", wilder)

    }}>
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