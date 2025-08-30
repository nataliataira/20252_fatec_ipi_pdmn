const Feedback = (props: any) => {

    
    return (
        <div className="d-flex justify-content-evenly m-2">
            <button
                type="button"
                className="btn btn-primary"
                onClick={props.function_sucesso}
            >
                {props.texto_sucesso}
            </button>
            <button
                type="button"
                className="btn btn-danger"
                onClick={props.function_falha}
            >
                {props.texto_falha}
            </button>
        </div>
    )
}

export default Feedback