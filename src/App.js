import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Maps from "./components/Maps";
import Service from "./components/Service";

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <CTA/>
      <Service/>
      <Maps/>
      <Footer/>
    </div>
  );
}

export default App;
