import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Hero from "./components/hero";

function App() {
  return (
    <BrowserRouter>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>
      <Hero />
    </BrowserRouter>
  );
}

export default App;
