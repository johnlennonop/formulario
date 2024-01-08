import { useState } from "react";
import styles from "./Cadastro.module.css"

const Cadastro = () => {
    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    const [matricula, setMatricula] = useState("")
    const [cargo, setCargo] = useState("")
    const [lotacao, setLotacao] = useState("")
    const [emailfun, setEmailFun] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [documento, setDocumento] = useState("")
    const cadastrar = (event) => {
        try {
            event.preventDefault();
            const dados = { nome, cpf, matricula, cargo, lotacao, emailfun, email, telefone, documento }
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
                    <h1 className={styles["title2"]}>Cadastro de Usuário</h1>
                    <form onSubmit={cadastrar} className={styles.fomr}>
                        <div className={styles["gridContainer"]}>
                            <label htmlFor="cpf">Nome: </label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                onChange={(event) => setNome(event.target.value)}
                                required
                            />
                            <label htmlFor="cpf">CPF: </label>
                            <input
                                type="text"
                                id="cpf"
                                name="cpf"
                                onChange={(event) => setCpf(event.target.value)}
                                required
                            />
                            <label htmlFor="matricula">Matricula: </label>
                            <input
                                type="text"
                                id="matricula"
                                name="matricula"
                                onChange={(event) => setMatricula(event.target.value)}
                            />
                            <label htmlFor="matricula">Cargo: </label>
                            <input
                                type="text"
                                id="cargo"
                                name="cargo"
                                onChange={(event) => setCargo(event.target.value)}
                                required
                            />
                            <label htmlFor="matricula">Lotação: </label>
                            <input
                                type="text"
                                id="lotacao"
                                name="lotacao"
                                onChange={(event) => setLotacao(event.target.value)}
                                required
                            />
                            <label htmlFor="matricula">E-mail Funcional: </label>
                            <input
                                type="text"
                                id="emailfun"
                                name="emailfun"
                                onChange={(event) => setEmailFun(event.target.value)}
                            />
                            <label htmlFor="matricula">E-mail: </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                            <label htmlFor="matricula">Telefone: </label>
                            <input
                                type="text"
                                id="telefone"
                                name="telefone"
                                onChange={(event) => setTelefone(event.target.value)}
                                required
                            />
                            <label htmlFor="matricula">Adicione seu Documento</label>
                            <input
                                type="file"
                                id="documento"
                                name="documento"
                                onChange={(event) => setDocumento(event.target.value)}
                                required />
                        </div>
                        <button className={styles["btn"]}>Cadastrar</button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Cadastro;