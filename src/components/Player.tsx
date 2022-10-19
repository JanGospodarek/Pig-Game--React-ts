import "./Player.module.css";
type props = {
  isActive: boolean;
  id: number;
  score: number;
  currentScore: number;
};
function Player(props: props) {
  return (
    <section className={`$player ${props.isActive && "playerActive"}`}>
      <h2 className="name" id={`name--${props.id}`}>
        {`Player ${props.id}`}
      </h2>
      <p className="score" id={`score--${props.id}`}>
        {props.score}
      </p>
      <div className="current">
        <p className="currentLabel">Current</p>
        <p className="currentScore" id={`current--${props.id}`}>
          {props.currentScore}
        </p>
      </div>
    </section>
  );
}
export default Player;
