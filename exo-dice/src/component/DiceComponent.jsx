// import { useState } from "react";

// function randomizer(diceValue) {
//   return Math.floor(Math.random() * diceValue) + 1;
// }

// export function Dice() {
//   ////////////// STATES ///////////////
//   const [value6, setValue6] = useState(0);
//   const [value8, setValue8] = useState(0);

//   ////////// COMPORTEMENT /////////////

//   const randomValue = () => {
//     setValue6(randomizer(6));
//     setValue8(randomizer(8));
//   };
//   const randomValue8 = () => {
//   };

//   ///////////// AFFICHAGE ////////////
//   return (
//     <div>
//       <p>Lancez les dés</p>
//       <button onClick={randomValue}>Go</button>
//       <p>Résultat dés 6 : {value6}</p>
//       <p>Résultat dés 8 : {value8}</p>
//     </div>
//   );
// }


/////////////////////////// VERSION D6 AVEC IMG ///////////////////////////////////

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";

function randomizer(diceValue) {
  return Math.floor(Math.random() * diceValue) + 1;
}

export function Dice() {
  ////////////// STATES ///////////////
  const [diceValue, setDiceValue] = useState(0);

  ////////// COMPORTEMENT /////////////

  const randomValue = () => {
    const newValue = randomizer(6);
    setDiceValue(newValue);
  };

  ///////////// AFFICHAGE ////////////
  const diceIcons = [
    faDiceOne,
    faDiceTwo,
    faDiceThree,
    faDiceFour,
    faDiceFive,
    faDiceSix,
  ];

  return (
    <div>
      <p>Lancez le dé</p>
      <button onClick={randomValue}>Go</button>
      <p>Résultat du dé : {diceValue}</p>
      {diceValue > 0 && diceValue <= 6 && (
        <FontAwesomeIcon icon={diceIcons[diceValue - 1]} size="4x" />
      )}
    </div>
  );
}
