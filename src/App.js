import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Maps from "./components/Maps";
import Referances from "./components/Referances";
import Service from "./components/Service";

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <CTA/>
      <Service/>
      <Referances/>
      <Maps/>
      <Footer/>
    </div>
  );
}

export default App;
