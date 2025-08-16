import './styles.css'

const App = () => {

  const aoClicar = () => {
    alert('oi');
  }
  return <div style={{margin: 'auto', width: 768,
    backgroundColor: '#EEE', padding: 12, borderRadius: 8
  }}>
    <label 
      className="rotulo"
      htmlFor="nome" 
      style={{display: 'block', marginBottom: 4}}>
        Nome
    </label>
    <input 
      type="text" 
      id="nome"
      style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden',
        width: '100%', outline: 'none'
      }}
    />
    <button
      style={{marginTop: 12, paddingTop: 8, paddingBottom: 8,
      backgroundColor: 'blueviolet', color: 'white', border: 'none',
      width: '100%', borderRadius: 8}}
      onClick={aoClicar}
    >
      Enviar
    </button>

  </div>
}

export default App;