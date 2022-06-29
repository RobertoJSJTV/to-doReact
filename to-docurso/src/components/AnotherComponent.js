const AnotherComponent = () => {

    const handleClick = () => {
        console.log("Clicou no botão")
    }

    return (
        <div>
            <p>Segundo Componente</p>
            <button onClick={handleClick}>Evento de Click</button>
            <hr></hr>
            
        </div>
    );
};

export default AnotherComponent;