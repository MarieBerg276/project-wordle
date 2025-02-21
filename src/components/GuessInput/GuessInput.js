import React, {useState} from 'react';

function GuessInput({handleSubmitGuess}) {
    const [guessWord, setGuessWord] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        handleSubmitGuess(guessWord);
        setGuessWord("")
    }

    return (
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                type="text"
                value={guessWord}
                pattern={".{5}"}
                minLength={5}
                maxLength={5}
                required
                onChange={(event) => {
                const nextGuessWord = event.target.value.toUpperCase();
                setGuessWord(nextGuessWord)
            }}/>
        </form>
    )
}

export default GuessInput;
