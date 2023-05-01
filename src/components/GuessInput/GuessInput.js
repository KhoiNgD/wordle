import React from "react";

function GuessInput({ handleSubmitGuess, inputDisabled }) {
  const [guessInput, setGuessInput] = React.useState("");

  function handleFormSubmit(event) {
    event.preventDefault();

    handleSubmitGuess(guessInput);
    setGuessInput("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleFormSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guessInput}
        onChange={(event) => setGuessInput(event.target.value.toUpperCase())}
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        disabled={inputDisabled}
      />
    </form>
  );
}

export default GuessInput;
