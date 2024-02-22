import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Page1 />} path="/" />
        <Route element={<Page2 />} path="/Page2" />
        <Route element={<Page3 />} path="/Page3" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
