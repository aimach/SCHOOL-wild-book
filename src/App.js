import './App.css';
import Header from './components/Header';
import Wilder from "./components/Wilder";
import Footer from "./components/Footer";
import { useEffect, useState } from 'react';
import axios from 'axios';

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
