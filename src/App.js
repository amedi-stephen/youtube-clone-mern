import "./Sass/App.scss";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content-wrapper">
        <Sidebar />
        <MainSection />
      </div>
    </div>
  );
}

export default App;
