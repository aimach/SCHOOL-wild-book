import './App.css';
import Header from './components/Header';
import Wilder from "./components/Wilder";
import Footer from "./components/Footer";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function App() {
  const [wilders, setWilders] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false)
  const [isModified, setIsModified] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const wilders = await axios.get("http://localhost:5000/api/wilder");
      setWilders(wilders.data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <Header />
      <main className="container">
      <Link to="/add">
      <button className="button">Add a new Wilder</button>
      </Link>
      <button className="button" onClick={() => {setIsDeleting(!isDeleting)}}>Delete a Wilder</button>
      <button className="button" onClick={() => {setIsModified(!isModified)}}>Modifiy a Wilder</button>
        <h2>Wilders</h2>
        <section className="card-row">
          {wilders.map((wilder) =>
            <Wilder wilder={wilder} isDeleting={isDeleting} isModified={isModified}  key={wilder.id}/>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
