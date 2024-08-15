import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./App.css";
import Partners from "./components/Partners";
import Offers from "./components/Offers";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Hero />
          <Partners />
          <Offers />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
