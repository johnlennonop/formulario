import { useState } from "react";

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
            const dados = { nome, cpf, matricula, cargo, lotacao, emailfun, email, telefone, documento}
            console.log(dados);
            window.location.href = "/home"
        } catch (error) {
            alert(error.message);
        }
    }
    return (
        <>
        <div class="container">
            <h1>Cadastro de Usuário</h1>
            <form onSubmit={cadastrar}>
                <label htmlFor="cpf">Nome: </label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    onChange={(event) => setNome(event.target.value)}
                    required
                /> <br />
                <label htmlFor="cpf">CPF: </label>
                <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    onChange={(event) => setCpf(event.target.value)}
                    required
                /> <br />
                <label htmlFor="matricula">Matricula: </label>
                <input
                    type="text"
                    id="matricula"
                    name="matricula"
                    onChange={(event) => setMatricula(event.target.value)}
                /> <br />
                <label htmlFor="matricula">Cargo: </label>
                <input
                    type="text"
                    id="cargo"
                    name="cargo"
                    onChange={(event) => setCargo(event.target.value)}
                    required
                /> <br />
                <label htmlFor="matricula">Lotação: </label>
                <input
                    type="text"
                    id="lotacao"
                    name="lotacao"
                    onChange={(event) => setLotacao(event.target.value)}
                    required
                /> <br />
                <label htmlFor="matricula">E-mail Funcional: </label>
                <input
                    type="text"
                    id="emailfun"
                    name="emailfun"
                    onChange={(event) => setEmailFun(event.target.value)}
                /> <br /><label htmlFor="matricula">E-mail: </label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={(event) => setEmail(event.target.value)}
                    required
                /> <br />
                <label htmlFor="matricula">Telefone: </label>
                <input
                    type="text"
                    id="telefone"
                    name="telefone"
                    onChange={(event) => setTelefone(event.target.value)}
                    required
                /> <br />
                <label htmlFor="matricula">Adicione seu Documento com Foto</label>
                <br />
                <input 
                type="file" 
                id="documento"
                name="documento"
                onChange={(event) => setDocumento(event.target.value)}
                required />
                <br />
                <button type="submit">Cadastrar</button>

            </form>
            </div>
        </>
    )
}

export default Cadastro;