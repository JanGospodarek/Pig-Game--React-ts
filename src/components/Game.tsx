import Controls from "./Controls";
import "./Game.module.css";
import Dice from "./Dice";
import Player from "./Player";
import { useAppSelector } from "../hooks";
import { gameActions } from "../store/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
function Game() {
  const dispatch = useDispatch();
  const players = useAppSelector((state) => state.game.players);
  const activePlayer = useAppSelector((state) => state.game.activePlayer);
  const dice = useAppSelector((state) => state.game.dice);
  useEffect(() => {
    alert("Wins player who first score 100 points");
  }, []);
  function roll() {
    dispatch(gameActions.diceRoll());
  }
  function hold() {
    dispatch(gameActions.hold());
  }
  function reset() {
    dispatch(gameActions.reset());
  }
  return (
    <main>
      {players.map(
        (
          player: { id: number; score: number; currentScore: number },
          index: number
        ) => (
          <Player
            id={player.id}
            score={player.score}
            currentScore={player.currentScore}
            key={index}
            isActive={activePlayer === index && true}
          ></Player>
        )
      )}

      <Dice dice={dice}></Dice>
      <Controls roll={roll} hold={hold} reset={reset}></Controls>
    </main>
  );
}
export default Game;
