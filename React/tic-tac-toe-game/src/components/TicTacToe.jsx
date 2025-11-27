import "../css/TicTacToe.css";
import useTicTacToe from "../hooks/use-tic-tac-toe";

function TicTacToe() {
  const { board, handleClick, getStatusMessage, resetGameLogic, winner } =
    useTicTacToe();

  return (
    <div className="game">
      <div className="status">
        <p>{getStatusMessage()}</p>
        <button className="reset-btn" onClick={resetGameLogic}>
          Reset game
        </button>
      </div>
      <div className="board-wrapper">
        {board.map((b, index) => {
          return (
            <button
              id="reset"
              key={index}
              className="cell square"
              onClick={() => handleClick(index)}
              disabled={b !== null || winner}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TicTacToe;
