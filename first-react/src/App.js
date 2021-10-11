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

// Metto i prodotti in un array
const prodotti = [
  {
    nomeProdotto: 'terzoNome',
    prezzoProdotto: '3',
    immagine: 'terza immagine',
    disponibilita: 'non disponibile'
  },
  {
    nomeProdotto: 'quartoNome',
    prezzoProdotto: '4',
    immagine: 'quarta immagine',
    disponibilita: 'disponibile'
  }
]

const pStyle = {
  textTransform: 'uppercase'
}

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

        {/* Utilizzo props.children aggiungendo un react.fragment tra l'apertura e la chiusura del Product */}
        <Product {...secondaCard}>
          <>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet non architecto veritatis itaque quos enim quia facere nam est tenetur!
          </>
        </Product>

        {/* stampo gli oggetti contenuti nell'array 'prodotti' con il map method */}
        {prodotti.map((prodotto) => {
          console.log(prodotto, 'prodotto stampato con map method');

          return <Product {...prodotto} />
        })}

      </section>
    </div>
  );
}

export default App;
