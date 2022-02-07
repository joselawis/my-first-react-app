import Home from "./Home/Home";
import Header from "../shared/components/layout/Header";
import "./App.css";
import Footer from "../shared/components/layout/Footer";

function App() {
  return (
    <div className="App">
      <Header title="Welcome to Codejobs" />
      <Home />

      <Footer/>
    </div>
  );
}

export default App;
