import { Routes as Rotas, Route } from "react-router-dom"
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Cadastro from "../pages/Cadastro/Cadastro";
import Confirmacao from "../pages/Confirmacao/Confirmacao";
import Sistemas from "../pages/Sistemas/Sistemas";
const Routes = () => {
    return (
        <Rotas>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/confirmacao" element={<Confirmacao/>} />
            <Route path="/sistema" element={<Sistemas />} />


        </Rotas>
    )
}

export default Routes;