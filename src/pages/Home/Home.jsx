import React, { useState } from "react";

const Home = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;

        // Atualiza o estado das opções selecionadas
        if (checked) {
            setSelectedOptions((prevOptions) => [...prevOptions, value]);
        } else {
            setSelectedOptions((prevOptions) =>
                prevOptions.filter((option) => option !== value)
            );
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode usar o estado selectedOptions como desejar
        console.log("Opções selecionadas:", selectedOptions);
        window.location.href = "/confirmacao"  
    };

    return (
        <>
            <h1>Sistemas</h1>
            <form onSubmit={handleSubmit}>
                <label>Quais sistemas você deseja resetar?</label> <br />
                <input
                    type="checkbox"
                    id="email"
                    name="sistemas[]"
                    value="email"
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="email">E-mail Funcional</label> <br />
                <input
                    type="checkbox"
                    id="usuario_rede"
                    name="sistemas[]"
                    value="usuario_rede"
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="usuario_rede">Usuário de Rede</label> <br />
                <input
                    type="checkbox"
                    id="extras"
                    name="sistemas[]"
                    value="extras"
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="extras">Sistemas de Extras</label> <br />
                <input type="submit" value="Enviar" />
            </form>
        </>
    );
};

export default Home;
