import servicos from "../../utils/servicos/servicos"

const Sistemas = () => {
    const servicoSelecionado = (localStorage.getItem("sistema"))
    const array = servicos[servicoSelecionado]

    return (servicoSelecionado === "acesso") ?
        (
            <p>O serviço desejado apenas poderá se realizado mediante ofício enviado para o Departamento de Tecnologia da Informação e Comunicação - DETIC via SUITE.</p>
        )
        :
        (
            <>
                <h1>Sistemas</h1>

                <form>
                    {array.map((servico) => (
                        <div key={servico.indexOf}>
                            <input
                                type="radio"
                                id={servico.id}
                                name="sistemas"
                                value={servico}
                            />
                            <label htmlFor={servico}>{servico}</label> <br />
                        </div>
                    ))}

                    <button type="submit">
                        Enviar
                    </button>
                </form>
            </>
        )
}

export default Sistemas;

/* <form onSubmit={handleSubmit}>
                {servicoSelecionado.map((servico) => (
                    <div key={servico.id}>
                        <input
                            type="radio"
                            id={servico.id}
                            name="sistemas"
                            value={servico.id}
                            onChange={handleRadioChange}
                            checked={selectedOption === servico.id}
                        />
                        <label htmlFor={servico.id}>{servico.nome}</label> <br />
                    </div>
                ))}
                <button type="submit" disabled={!selectedOption}>
                    Enviar
                </button>
            </form> */