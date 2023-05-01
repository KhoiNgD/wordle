import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState({
    hasWon: false,
    hasLost: false,
  });

  function handleSubmitGuess(word) {
    const nextResults = [...guessResults, checkGuess(word, answer)];
    setGuessResults(nextResults);

    if (nextResults.length === 5 && word !== answer) {
      const nextGameStatus = { ...gameStatus, hasLost: true };
      setGameStatus(nextGameStatus);
    }

    if (word === answer) {
      const nextGameStatus = { ...gameStatus, hasWon: true };
      setGameStatus(nextGameStatus);
    }
  }

  return (
    <>
      <GuessResults guessResults={guessResults} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        inputDisabled={gameStatus.hasWon || gameStatus.hasLost}
      />

      {(gameStatus.hasWon || gameStatus.hasLost) && (
        <div className={`${gameStatus.hasWon ? "happy" : "sad"} banner`}>
          {gameStatus.hasWon ? (
            <p>
              <strong>Congratulations!</strong> Got it in
              <strong>{guessResults.length} guesses</strong>.
            </p>
          ) : (
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          )}
        </div>
      )}
    </>
  );
}

export default Game;
