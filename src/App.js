import './App.css';
import Header from './components/Header';
import Wilder from "./components/Wilder";
import Footer from "./components/Footer";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function App() {
  const [wilders, setWilders] = useState([]);

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
      <Link to="/delete">
      <button className="button">Delete a Wilder</button>
      </Link>
        <h2>Wilders</h2>
        <section className="card-row">
          {wilders.map((wilder) =>
            <Wilder wilder={wilder} />
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
