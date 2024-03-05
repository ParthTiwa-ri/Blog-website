import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Homepage/Home";
// import HomePage from "./pages/Homepage/Hompage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
