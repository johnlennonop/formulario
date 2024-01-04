import { useState } from "react";

const Home = () => {
    const [sistema, setSistemas] = useState('');
    return (
        <>
            <h1>Sistemas</h1>
            <form>
                <label>Quais sistemas você deseja resetar?</label> <br />
                <input type="checkbox" id="email" name="sistemas[]" value="email" />
                <label for="email">E-mail Funcional</label> <br />
                <input type="checkbox" id="usuario-rede" name="sistemas[]" value="usuario-rede" />
                <label for="usuario-rede">Usuário de Rede</label> <br />
                <input type="checkbox" id="extras" name="sistemas[]" value="extras" />
                <label for="extras">Sistemas de Extras</label> <br />
                <input type="submit" value="Enviar" />



            </form>

        </>
    )
}

export default Home;
