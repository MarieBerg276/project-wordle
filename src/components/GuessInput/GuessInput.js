import React, {useState} from 'react';

function GuessInput({handleSubmitGuess}) {
    const [guess, setGuess] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        handleSubmitGuess(guess);
        setGuess("")
    }

    return (
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                type="text"
                value={guess}
                pattern={".{5}"}
                minLength={5}
                maxLength={5}
                required
                onChange={(event) => {
                const nextGuessWord = event.target.value.toUpperCase();
                setGuess(nextGuessWord)
            }}/>
        </form>
    )
}

export default GuessInput;
