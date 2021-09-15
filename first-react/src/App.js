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
          nomeProdotto={primaCard.nomeProdotto}
          prezzoProdotto={primaCard.prezzoProdotto}
          immagine={primaCard.immagine}
          disponibilita={primaCard.disponibilita}
        />

        <Product
          nomeProdotto={secondaCard.nomeProdotto}
          prezzoProdotto={secondaCard.prezzoProdotto}
          immagine={secondaCard.immagine}
          disponibilita={secondaCard.disponibilita}
        />

        {/* 
          Utilizzo lo spread operator per passare tutte le coppie chiave-valore. 
          Esempio di utlizzo spread operator:
          const numeri = [1,2,3,4,5,6,7,8,9];
          console.log(Math.max(...numeri));  // -> 9 
        */}

        <Product
          {...primaCard}
        />

      </section>
    </div>
  );
}

export default App;
