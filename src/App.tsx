import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Hero from "./components/hero";
import Benefits from "./components/benefits";

function App() {
  return (
    <BrowserRouter>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>
      <Hero />
      <Benefits />
    </BrowserRouter>
  );
}

export default App;
