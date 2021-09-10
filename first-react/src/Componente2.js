import React, { Fragment } from 'react'

function Componente2() {
  return (
    <div>
      <Saluto />
    </div>
  )
}

function Persona () {
  return (
    <h3>Sono una bella persona</h3>
  )
}

function Messaggio() {
  return (
    <p>Sono un bel Messaggio</p>
  )
}

function Saluto() {
  return (
    <Fragment>
      <h2>Sono il secondo Componente</h2>
      <Persona />
      <Messaggio></Messaggio>
    </Fragment>
  )
}

export default Componente2
