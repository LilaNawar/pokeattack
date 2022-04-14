import React from 'react'

export default function Pokemon(props) {
  return (
    <div className="Pokemon">
    <h1>{props.name} HP:{props.hp}</h1>
    <img src={props.image} />
    <button onClick= {props.handleattack}>Attack</button>
    </div>
  )
}
