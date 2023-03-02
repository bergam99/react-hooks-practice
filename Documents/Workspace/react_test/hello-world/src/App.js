/* eslint-disable */

// Insert components in this page (App.js)
//index.html : real main page

import logo from "./logo.svg";
import "./App.css";
// façon de mettre les datas : variable, state. Ici, je dis que je vais utiliser la fonction interne "state"
import React, { useState } from "react";

function App() {
  // insert data in variable
  // les elements qui ne changent pas souvent on mets dans "variable" sinon dans "State"
  let restaurant = "Alain Passard";

  // insert function in variable
  function functionEx() {
    return 100;
  }

  // create state
  // a : state data lui même
  // b : function pour modifier state data
  // useState('recommand restaurant'); [a, b]

  // destructuring
  // Mettre array dans variable:
  var [a, b] = [10, 100];
  // a = 10, b = 100.
  // var [a, b] = useState('recommand restaurant')
  // a = data lui même, b = pour modifier data
  let [title, changeTitle] = useState("recommand restaurant");
  let [title1, changeTitle2] = useState([
    "restaurants luxes",
    "restaurant prix moyen",
    "restaurant top budget"
  ]);
  let [like, changeLike] = useState(0);

  // state deep copy. immutable(ne modifie pas directement)
  function change(){
    var newArray = [...title1];
    newArray[0] = 'restaurant à éviter';
    changeTitle2(newArray);
  }

  return (
    <div className="App">
      {/* Si je veux mettre style directement dans la valise je mets en tant que object. Attention pour le font-size il y a pas de "-" et mettre en camelCase!  */}
      <div style={{ color: "tomato", fontSize: "30px" }} className="nav">
        <p>ma blog</p>
      </div>
      {/* interpoller className (without "") */}
      <h4 className={restaurant}>{restaurant}</h4>
      <h3>{title}</h3>
      <button onClick={change}> click here</button>
      <p>
        {title1[0]} <span onClick={ ()=>{changeLike(like + 1)}}>🍴</span> {like}
      </p>
      <p>{title1[1]}</p>
      <h4>{functionEx()}</h4>
      {/* logo from import */}
      <img src={logo} />

      {/* click event */}
    </div>
  );
}

export default App;
