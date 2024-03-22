import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <BrowserRouter>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
