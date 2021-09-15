import React from 'react'

const pStyle = {
  textTransform: 'uppercase'
}

// const Product = (props) => {

// const {nomeProdotto, prezzoProdotto, immagine, disponibilita} = props;

// console.log(props);

// OPPURE destrutturo props

const Product = ({ nomeProdotto, prezzoProdotto, immagine, disponibilita, children }) => {


  return (
    <div className='card'>
      <h4>{nomeProdotto}</h4>
      <h5>{prezzoProdotto} €</h5>
      <div className="preview">{immagine}</div>
      <p>{children}</p>
      <p style={pStyle}>{disponibilita}</p>
      <p>{'LOWERCASE'.toLowerCase()}</p>
      <button>Acquista</button>
    </div>
  )
}

export default Product