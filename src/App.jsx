import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./App.css";
import Partners from "./components/Partners";
import Offers from "./components/Offers";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";
import Trackpayment from "./components/Trackpayment";
import Transaction from "./components/Transaction";

function App() {
  return (
    <>
      <BrowserRouter>
        <main className="App overflow-hidden">
          <Navbar />
          <Hero />
          <Partners />
          <Offers />
          <Trackpayment />
          <Transaction />
          {/* <Footer />
          <Footer2 /> */}
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
