import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Pedido from './Pedido';
function App() {

  return (
    <div className='container'>
      <div className="row">
        <div className="col-12">
          <i className="fa-hippo fa-solid fa-5x"></i>
        </div>
      </div>
      <div className='row'>
        <div className='col-12 col-lg-6 col-xxl-3'>
          <Pedido
          data='22/08/2025'
          icone='fa-solid fa-hdd'
          titulo='SSD'
          descricao='SSD 512Gb'
          />
        </div>
        <div className='col-12 col-lg-6 col-xxl-3'>
        <Pedido
          data='22/08/2025'
          icone='fa-solid fa-book'
          titulo='Livro ABC'
          descricao='Um livro ABC por X'
          />
        </div>
        <div className='col-12 col-lg-6 col-xxl-3'>
        <Pedido
          data='22/08/2025'
          icone='fa-solid fa-hippo'
          titulo='Hipopótamo'
          descricao='Filhote de Hipopótamo'
          />
        </div>
        <div className='col-12 col-lg-6 col-xxl-3'>
        <Pedido
          data='22/08/2025'
          icone='fa-solid fa-gem'
          titulo='Diamante'
          descricao='Diamante transparente'
          />
        </div>
      </div>
    </div>
  )
}

export default App;
