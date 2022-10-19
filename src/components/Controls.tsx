import React from "react";
import "Controls.module.css";
type props = {
  reset: () => void;
  roll: () => void;
  hold: () => void;
};
function Controls(props: props) {
  return (
    <React.Fragment>
      <button onClick={props.reset} className="btnNew">
        🔄 New game
      </button>
      <button onClick={props.roll} className="btnRoll">
        🎲 Roll dice
      </button>
      <button onClick={props.hold} className="btnHold">
        📥 Hold
      </button>
    </React.Fragment>
  );
}
export default Controls;
