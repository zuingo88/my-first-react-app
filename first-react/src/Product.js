import React from 'react'

const pStyle = {
  textTransform: 'uppercase'
}

// const Product = (props) => {

//   console.log(props);

//   return (
//     <div className='card'>
//       <h4>Prodotto</h4>
//       <h5>Prezzo</h5>
//       <div className="preview">Img</div>
//       <p style={pStyle}>Disponibile</p>
//       <p>{'LOWERCASE'.toLowerCase()}</p>
//       <button>Acquista</button>
//     </div>
//   )
// }

const Product = (props) => {

  console.log(props);

  return (
    <div className='card'>
      <h4>{props.nome}</h4>
      <h5>{props.prezzo} €</h5>
      <div className="preview">{props.immagine}</div>
      <p style={pStyle}>{props.disponibilita}</p>
      <p>{'LOWERCASE'.toLowerCase()}</p>
      <button>Acquista</button>
    </div>
  )
}

export default Product
