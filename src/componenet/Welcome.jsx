import React from 'react'

export default function Welcome(props) {
    //js logique
  return (
    <div>
      {/* Vue jsx = > html 90% + 10 js */}
      <h2>Bienvenue dans notre application React! {props.name}</h2>
      <p>Ceci est un composant fonctionnel séparé.</p>
    </div>
  )
}
