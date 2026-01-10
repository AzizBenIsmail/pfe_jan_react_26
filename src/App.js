import "./App.css";
import Welcome from "./componenet/Welcome";
import React, { useEffect, useState } from "react";
import useIsOnline from './componenet/useIsOnlineCustomName';
function App() {
  //jsx code
  //1 variable
  const name = "Aziz";
  const age = 30.1;
  const element = (
    <h1>
      Bonjour {name}, tu as {age} ans.
    </h1>
  );
  const element1 = <h2>Bienvenue dans ton application React!</h2>;

  //2
  const etudiants = ["Ali", "Sara", "Mona", "Omar"];
  const etudiant = {
    nom: "Khalid",
    age: 22,
    ville: "Casablanca",
  };
  //3 function
  function getData(data) {
    return "Données depuis une fonction | " + data;
  }
  function getEtudiant() {
    return (
      "Etudiant: " +
      etudiant.nom +
      " - Age: " +
      etudiant.age +
      " - Ville: " +
      etudiant.ville
    );
  }
  //4 list
  const listeEtudiants = [
    { id: 1, nom: "Ali", age: 20, ville: "Rabat" },
    { id: 2, nom: "Sara", age: 21, ville: "Casablanca" },
    { id: 3, nom: "Mona", age: 22, ville: "Tanger" },
    { id: 4, nom: "Omar", age: 23, ville: "Fes" },
  ];
  //5
  const inlineStyle = {
    color: "yellow",
    backgroundColor: "blue",
    padding: "10px",
    borderRadius: "5px",
  };
  //6
  //const count = 0;
  const [count, setCount] = useState(2);
  const [nom, setNom] = useState("");

  //useEffect(,)
  //useEffect(,[])
  //useEffect(,[count])

  // useEffect(() => {
  //   console.log("cette fonction va etre execute chaque re-render");
  //   console.log("car pas de deuxieme argument passer");
  // });

  // useEffect(() => {
  //   console.log("cette fonction va etre execute une fois seulement ");
  //   console.log("car le deuxieme argument est un tableau vide ");
  //   return () => {
  //     console.log(
  //       " cette partie va etre execute seulement lors de loperation unmounting "
  //     );
  //   };
  // }, []);

  useEffect(() => {
    console.log("useIsOnlineCustomName status:", isOnline ? "En ligne" : "Hors ligne");
    console.log(
      "cette fonction va etre execute la premiere fois et a chaque modification de la variable count "
    );
    console.log("car le deuxieme argument est count ");
    return () => {
      console.log(
        "cette partie va etre execute pour nettoyer et lors de loperation unmounting "
      );
    };
  }, [count]);

  const isOnline = useIsOnline();
  return (
    <>
      <div className="App">
        <header className="App-header">
          Bonjour 2026 <br />
          {/* 1 */}
          {name} <br />
          {age}
          {/* {element}
       {element1} */}
          {/* 2 */}
          <h3>Liste des étudiants:</h3>
          {etudiant.nom} ""
          {etudiant.age} ""
          {etudiant.ville}
          <br />
          {/* 3 */}
          {etudiants[0]} <br />
          {getData(20 - 2)}
          {getEtudiant()}
          {/* 4 */}
          <h3>Liste des étudiants avec map:</h3>
          <ul>
            {listeEtudiants.map((etudiant) => (
              <li key={etudiant.id}>
                {etudiant.nom} - {etudiant.age} ans - {etudiant.ville} - ID:{" "}
                {etudiant.id}
              </li>
            ))}
          </ul>
          {/* 5 */}
          <div className="maClasse" style={inlineStyle}>
            Ceci est un texte avec des styles en ligne !
          </div>
          <Welcome name="Aziz" />
          {/* 6 */}
          {count}
          <button onClick={() => setCount(count * 5)}>+</button>
          {nom}
          <input type="text" onChange={(e) => setNom(e.target.value)} />
        </header>
      </div>
    </>
  );
}

export default App;
