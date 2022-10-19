import { createSlice, configureStore } from "@reduxjs/toolkit";
interface State {
  players: {
    id: number;
    score: number;
    currentScore: number;
  }[];
  activePlayer: number;
  winner: any;
  dice: number;
}
function changePlayer(state: State) {
  state.activePlayer === 0
    ? (state.activePlayer = 1)
    : (state.activePlayer = 0);
}
function clearPlayerCurScore(state: State) {
  state.players[state.activePlayer].currentScore = 0;
}
function resetGame(state: State) {
  state.players.forEach((player) => {
    player.score = 0;
    player.currentScore = 0;
  });
  state.activePlayer = 0;
  state.dice = Math.trunc(Math.random() * 6);
}
const initialGameState: State = {
  players: [
    {
      id: 1,
      score: 0,
      currentScore: 0,
    },
    {
      id: 2,
      score: 0,
      currentScore: 0,
    },
  ],
  activePlayer: 0,
  winner: undefined,
  dice: Math.trunc(Math.random() * 6),
};
const gameSlice = createSlice({
  name: "game",
  initialState: initialGameState,
  reducers: {
    diceRoll(state) {
      state.dice = Math.trunc(Math.random() * 6);
      if (state.dice === 0) {
        clearPlayerCurScore(state);
        changePlayer(state);
      } else {
        state.players[state.activePlayer].currentScore += state.dice + 1;
      }
    },
    hold(state) {
      state.players[state.activePlayer].score +=
        state.players[state.activePlayer].currentScore;
      if (state.players[state.activePlayer].score >= 50) {
        state.winner = state.players[state.activePlayer].id;
        alert(`Winner is player ${state.winner}`);
        resetGame(state);
      }
      clearPlayerCurScore(state);
      changePlayer(state);
    },
    reset(state) {
      resetGame(state);
    },
  },
});

const store = configureStore({
  reducer: { game: gameSlice.reducer },
});
export const gameActions = gameSlice.actions;
export default store;
