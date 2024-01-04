import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [cpf, setCpf] = useState("")
    const [senha, setSenha] = useState("")
    const autenticar = (event) => {
        try {
            event.preventDefault();
            const dados = { cpf, senha }
            console.log(dados);
            window.location.href = "/home"
        } catch (error) {
            alert(error.message);
        }
    }
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={autenticar}>
                <label htmlFor="cpf">CPF: </label>
                <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    onChange={(event) => setCpf(event.target.value)}
                    required
                /> <br />
                <label htmlFor="senha">Senha: </label>
                <input
                    type="password"
                    id="senha"
                    name="senha"
                    onChange={(event) => setSenha(event.target.value)}
                    required

                /> <br />
                <button type="submit">Entrar</button>
               

            </form>
            <Link to="/cadastro">Cadastrar</Link>
             {//<button type="submit">Esqueceu a senha?</button>
                }
        </>
    )
}

export default Login;