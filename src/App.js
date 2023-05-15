import { BrowserRouter, Routes, Route } from "react-router-dom";
import Livres from "./components/Livres";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Livres />}>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
