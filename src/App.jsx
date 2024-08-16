import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./App.css";
import Partners from "./components/Partners";
import Offers from "./components/Offers";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <main className="App">
          <Navbar />
          <Hero />
          <Partners />
          <Offers />
          <Footer />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
