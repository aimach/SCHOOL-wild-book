import './App.css';
import Header from './components/Header';
import Wilder from "./components/Wilder";
import Footer from "./components/Footer";

function App() {
  const wilders = [
    {
      name: "Jane Doe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      skills: [{ name: "HTML", vote: 3 }, { name: "Typescript", vote: 3 }, { name: "React", vote: 3 }, { name: "Node", vote: 2 }]
    },
    {
      name: "John Doe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      skills: [{ name: "HTML", vote: 3 }, { name: "CSS", vote: 3 }, { name: "React", vote: 3 }, { name: "Node", vote: 2 }]
    },
    {
      name: "John Smith",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      skills: [{ name: "HTML", vote: 3 }, { name: "CSS", vote: 3 }, { name: "Typescript", vote: 3 }, { name: "React", vote: 3 }]
    },
    {
      name: "Jane Smith",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      skills: [{ name: "HTML", vote: 3 }, { name: "CSS", vote: 3 }, { name: "Typescript", vote: 3 }, { name: "React", vote: 3 }, { name: "Node", vote: 2 }]
    },
    {
      name: "Martine Dupont",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      skills: [{ name: "HTML", vote: 3 }, { name: "CSS", vote: 3 }, { name: "Typescript", vote: 3 }, { name: "React", vote: 3 }, { name: "Node", vote: 2 }]
    },
  ]
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
