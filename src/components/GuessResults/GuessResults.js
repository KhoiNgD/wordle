import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({ guessResults }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((row) => (
        <p key={row} className="guess">
          {range(0, 5).map((column) => {
            const { letter, status } = guessResults?.[row]?.[column] ?? {
              letter: "",
              status: "",
            };
            return (
              <span key={column} className={`cell ${status}`.trim()}>
                {letter}
              </span>
            );
          })}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
