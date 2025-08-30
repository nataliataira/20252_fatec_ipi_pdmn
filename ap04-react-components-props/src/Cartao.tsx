const Cartao = (props: any) => {
    return (
        <div className={`card ${props.className}`}>
            <div className="card-header text-muted">
                {props.cabecalho}
            </div>
            <div className="card-body d-flex">
                {props.children}
            </div>
        </div>
    )
}

export default Cartao