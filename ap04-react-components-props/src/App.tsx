import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Hippo from './Hippo';
import Cartao from './Cartao';
import Pedido from './Pedido';
import Feedback from './Feedback';

function App() {

  const texto_sucesso = "Já chegou";
  const texto_falha = "Ainda não chegou";
  const funcao_sucesso = () => alert("Obrigado pelo feedback");
  const function_falha = () => alert("Verificaremos");

  const componenteFeedback = (
    <Feedback
      texto_sucesso={texto_sucesso}
      texto_falha={texto_falha}
      funcao_sucesso={funcao_sucesso}
      function_falha={function_falha}
    />
  )

  const pedidos = [
    {
      data: '22/08/2025',
      icone: 'fa-solid fa-hdd',
      titulo: 'SSD',
      descricao: 'SSD 512Gb'
    },
    {
      data: '21/08/2025',
      icone: 'fa-solid fa-book',
      titulo: 'O pequeno príncipe',
      descricao: 'Um livro sobre'
    },
    {
      data: '22/08/2025',
      icone: 'fa-solid fa-hippo',
      titulo: 'Hipopótamo',
      descricao: 'Filhote de hipopótamo'
    },
    {
      data: '22/08/2025',
      icone: 'fa-solid fa-gem',
      titulo: 'Diamante',
      descricao: 'Diamante transparente'
    },
  ]

  return (
    <div className='container'>
      <div className="row">
        <div className="col-12">
          <Hippo
            size='fa-4x'
          />
          <Hippo
            size='fa-2x'
          />
          <Hippo
            size='fa-1x'
          />
          <Hippo
            size='fa-2x'
            direction='fa-flip-horizontal'
          />
          <Hippo
            size='fa-3x'
            direction='fa-flip-horizontal'
          />
        </div>
      </div>
      <div className='row'>
        {
          pedidos.map(pedido => (
            <div className='col-12 col-lg-6 col-xxl-3'>
              <Cartao
                className="mb-2"
                cabecalho={pedido.data}
              >
                <Pedido
                  icone={pedido.icone}
                  titulo={pedido.titulo}
                  descricao={pedido.descricao}
                />
                {componenteFeedback}
              </Cartao>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App;
