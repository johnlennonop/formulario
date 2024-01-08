import React, { useState } from "react";

const Home = () => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleRadioChange = (event) => {
        const { value } = event.target;

        // Atualiza o estado da opção selecionada
        setSelectedOption(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode usar o estado selectedOption como desejar
        console.log("Opção selecionada:", selectedOption);
        window.location.href = "/sistema";
        localStorage.setItem("sistema",selectedOption)
        
    };

    return (
        <>
            <h1>Qual o serviço desejado?</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="radio"
                    id="perfil"
                    name="sistemas"
                    value="perfil"
                    onChange={handleRadioChange}
                    checked={selectedOption === "perfil"}
                />
                <label htmlFor="perfil">Criação de Perfil</label> <br />
                <input
                    type="radio"
                    id="desbloqueio"
                    name="sistemas"
                    value="desbloqueio"
                    onChange={handleRadioChange}
                    checked={selectedOption === "desbloqueio"}
                />
                <label htmlFor="desbloqueio">Desbloqueio de Acesso em Sistema</label> <br />

                <input
                    type="radio"
                    id="reset"
                    name="sistemas[]"
                    value="reset"
                    onChange={handleRadioChange}
                    checked={selectedOption === "reset"}
                />
                <label htmlFor="reset">Reset de Senha</label> <br />
                <input
                    type="radio"
                    id="acesso"
                    name="sistemas[]"
                    value="acesso"
                    onChange={handleRadioChange}
                    checked={selectedOption === "acesso"}
                />
                <label htmlFor="acesso">Alteração de Nível de Acesso</label> <br />
                <button type="submit" value="Enviar" disabled={!selectedOption}>Enviar</button>
            </form>
        </>
    );
};


export default Home;
