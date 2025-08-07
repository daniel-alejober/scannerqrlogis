import { BrowserRouter, Route, Routes } from "react-router-dom";
import Formulario from "./views/Formulario";
import ViewQR from "./views/ViewQR";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Formulario />} />
        <Route path="/:id" element={<ViewQR />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
