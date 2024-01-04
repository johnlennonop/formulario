import { Routes as Rotas, Route } from "react-router-dom"
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
const Routes = () => {
    return (
        <Rotas>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />

        </Rotas>
    )
}

export default Routes;