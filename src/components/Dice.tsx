import React from "react";
import "./Dice.module.css";
// import * as diceOne from "../images/dice-1.png";
// import * as diceTwo from "../images/dice-2.png";
// import * as diceThree from "../images/dice-3.png";
// import * as diceFour from "../images/dice-4.png";
// import * as diceFive from "../images/dice-5.png";
// import * as diceSix from "../images/dice-6.png";
function Dice(props: { dice: number }) {
  let selectedDice = `../images/dice-${props.dice}.png`;

  console.log(selectedDice);
  return <img src={selectedDice} alt={`dice-${props.dice}`} className="dice" />;
}
export default Dice;
