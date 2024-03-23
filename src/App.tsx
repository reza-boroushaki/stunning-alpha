import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Hero from "./components/hero";
import Benefits from "./components/benefits";
import Collaboration from "./components/collaboration";
import Services from "./components/services";
import Pricing from "./components/pricing";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>
      <Hero />
      <Benefits />
      <Collaboration />
      <Services />
      <Pricing />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
