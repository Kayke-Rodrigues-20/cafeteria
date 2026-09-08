import {BrowserRouter, Routes, Route} from "react-router-dom";
import Cadastro from "./Cadastro";
import Listagem from "./Listagem";

function App(){
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cadastro />} />
          <Route path="/Listagem" element={<Listagem />} />
          <Route path="/Cadastro" element={<Cadastro />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;