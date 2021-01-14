import {useState} from 'react';

const App = () => {
  const teclado = [...[...Array(10).keys()].slice(1), 0];
  const [numero, setNumero] = useState('');
  const [llamando, setLlamando] = useState(false);
  const numeroCompleto = numero.length === 9;
  const borrarActivado = numero.length > 0 && !llamando;

  const clickNumero = (tecla) => {
    if (numero.length === 9) {
      return;
    }

    setNumero(numero + tecla);
  }

  const borrar = () => {
    if (numero.length === 0) {
      return;
    }

    setNumero(numero.split('').slice(0, -1).join(''));
  }

  const llamar = (e) => {
    e.preventDefault();
    if (!numeroCompleto) {
      return;
    }

    setLlamando(true);
    setTimeout(() => {
      doColgar();
    }, 10000);
  }

  const colgar = (e) => {
    e.preventDefault();
    if (!llamando) {
      return;
    }
    doColgar();
  }

  const doColgar = () => {
    setLlamando(false);
    setNumero('');
  }

  return (
    <div className="contenedor">
      <span className={`mensaje${llamando ? ' animate' : ' off'}`}>Llamando...</span>
      <main className="telefono">
        <div className="botones">
          <ol className="teclado">
            {
              teclado.map(tecla => <li key={tecla}><button disabled={numeroCompleto || llamando} onClick={() => { clickNumero(tecla) }}>{tecla}</button></li>)
            }
            <li><button className="big" disabled={(!borrarActivado || llamando)} onClick={borrar}>borrar</button></li>
          </ol>
        </div>
        <div className="acciones">
          <span className="numero">{numero}</span>
          { !llamando && <a href="llamar" 
             className={`llamar${numeroCompleto ? ' activo' : ''}`} 
             onClick={llamar}>Llamar</a> }
          { llamando && <a href="colgar" 
             className={'colgar activo'}
             onClick={colgar}>Colgar</a> }
        </div>
      </main>
    </div>
  );
}

export default App;
