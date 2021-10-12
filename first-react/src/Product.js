import React from 'react'

const pStyle = {
  textTransform: 'uppercase'
}

// const Product = (props) => {

// const {nomeProdotto, prezzoProdotto, immagine, disponibilita} = props;

// console.log(props);

// OPPURE destrutturo props

const Product = ({ nomeProdotto, prezzoProdotto, immagine, disponibilita, children }) => {

  const handleClick = () => {
    console.log("Hai premuto su un'immagine");
  };

  const paramsHandler = (prezzoProdotto) => {
    console.log(prezzoProdotto);
  };

  const eventHandler = (prezzo) => (testo) => {
    console.log(testo.target.innerText);
    console.log(prezzo);
  };

  const saluto = () => {
    console.log(`Ciao!`);
  }

  return (
    <div className='card' onMouseEnter={saluto}>
      <h4>{nomeProdotto}</h4>
      <h5>{prezzoProdotto} €</h5>
      <div className="preview" onClick={handleClick}>{immagine}</div>
      <p>{children}</p>
      <p style={pStyle}>{disponibilita}</p>
      <p>{'LOWERCASE'.toLowerCase()}</p>
      <button onClick={() => alert(`Hai premuto ${nomeProdotto}`)}>Acquista</button>
      <button onClick={() => paramsHandler(prezzoProdotto)}>console.log del prezzo</button>
      <button onClick={eventHandler(prezzoProdotto)}>log di questo testo e prezzo</button>
    </div>
  )
}

export default Product