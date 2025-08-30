const Pedido = (pedido : any) => {
    return (
        <div className="card">
            <div className="card-body d-flex">
                <div className='d-flex align-items-center'>
                    <i className={`${pedido.icone} fa-4x`}></i>
                </div>
                <div className='border flex-grow-1 ms-3 pt-2'>
                    <h4 className='text-center'>{pedido.titulo}</h4>
                    <p className='text-center'>{pedido.descricao}</p>
                </div>
            </div>
        </div>
    )
}

export default Pedido;