import { useState } from "react";
//import { Link } from "react-router-dom";
import styles from "./Login.module.css";
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
            <div className={styles["body"]}>
                <div className={styles["container"]}>
                    <h1 className={styles["title"]}>Login</h1>
                    <form onSubmit={autenticar} >
                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            onChange={(event) => setCpf(event.target.value)}
                            required
                            placeholder="CPF"
                        />
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            onChange={(event) => setSenha(event.target.value)}
                            required
                            placeholder="senha"

                        />
                        <button className={styles["btn"]}>Entrar</button>
                        <a href="/cadastro">cadastra-se</a>


                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;