import React, { useState } from "react";
import styles from "./Home.module.css";

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
        localStorage.setItem("sistema", selectedOption)

    };

    return (
        <>
            <div className={styles["body"]}>
                <div className={styles["container"]}>
                    <h1 className={styles["title3"]}>Qual o serviço desejado?</h1>
                    <form onSubmit={handleSubmit} className={styles.fomr}>
                    <div className={styles["gridContainer"]}>
                        <input
                            type="radio"
                            id="perfil"
                            name="sistemas"
                            value="perfil"
                            onChange={handleRadioChange}
                            checked={selectedOption === "perfil"}
                        />
                        <label htmlFor="perfil">Criação de Perfil</label>
                        <input
                            type="radio"
                            id="desbloqueio"
                            name="sistemas"
                            value="desbloqueio"
                            onChange={handleRadioChange}
                            checked={selectedOption === "desbloqueio"}
                        />
                        <label htmlFor="desbloqueio">Desbloqueio de Acesso em Sistema</label>
                        <input
                            type="radio"
                            id="reset"
                            name="sistemas[]"
                            value="reset"
                            onChange={handleRadioChange}
                            checked={selectedOption === "reset"}
                        />
                        <label htmlFor="reset">Reset de Senha</label>
                        <input
                            type="radio"
                            id="acesso"
                            name="sistemas[]"
                            value="acesso"
                            onChange={handleRadioChange}
                            checked={selectedOption === "acesso"}
                        />
                        <label htmlFor="acesso">Alteração de Nível de Acesso</label>
                        </div>
                        <button type="submit" value="Enviar" disabled={!selectedOption}>Enviar</button>
                    </form>
                </div>
            </div>
            </>
    );
};


export default Home;
