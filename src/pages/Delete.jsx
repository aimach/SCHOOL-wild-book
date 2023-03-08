import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const DeleteWilder = () => {
  const [wilders, setWilders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const wilders = await axios.get("http://localhost:5000/api/wilder");
      setWilders(wilders.data)
    }
    fetchData()
  }, [])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/wilder/${id}`)
  }

  return (
    <>
    <Header/>
    <h2>Wilders to delete</h2>
        <section className="container">
          {wilders.map((wilder) =>
            <div className="deleteCard">
              <h4>{wilder.name}</h4>
              <p>{wilder.description}</p>
              <button className="button" onClick={() => handleDelete(wilder.id)}>Delete</button>
            </div>
          )}
        </section>
      <Link to="/">
      <button className="button">Get back</button>
      </Link>

    <Footer/>
    </>
  )
}

export default DeleteWilder;