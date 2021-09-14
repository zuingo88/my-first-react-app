import Componente1 from './Componente1'
import Componente2 from './Componente2'
import Product from './Product'

const primaCard = {
  nomeProdotto: 'primoNome',
  prezzoProdotto: '1',
  immagine: 'prima immagine',
  disponibilita: 'disponibile'
}

const secondaCard = {
  nomeProdotto: 'secondoNome',
  prezzoProdotto: '2',
  immagine: 'seconda immagine',
  disponibilita: 'non disponibile'
}

const pStyle = {
  textTransform: 'uppercase'
}

// const Product = (props) => {

//   console.log(props);

//   return (
//     <div className='card'>
//       <h4>{props.nome}</h4>
//       <h5>{props.prezzo} €</h5>
//       <div className="preview">{props.immagine}</div>
//       <p style={pStyle}>{props.disponibilita}</p>
//       <p>{'LOWERCASE'.toLowerCase()}</p>
//       <button>Acquista</button>
//     </div>
//   )
// }

function App() {
  return (
    <div className="App">

      <h1>Hello World!</h1>
      <Componente1 />
      <Componente2 />

      <section className='card-container'>

        <Product
          nome={primaCard.nomeProdotto}
          prezzo={primaCard.prezzoProdotto}
          immagine={primaCard.immagine}
          disponibilita={primaCard.disponibilita}
        />

        <Product
          nome={secondaCard.nomeProdotto}
          prezzo={secondaCard.prezzoProdotto}
          immagine={secondaCard.immagine}
          disponibilita={secondaCard.disponibilita}
        />

      </section>
    </div>
  );
}

export default App;
