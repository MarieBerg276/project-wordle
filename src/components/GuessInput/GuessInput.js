import React, {useState} from 'react';

function GuessInput() {
    const [guess, setGuess] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        console.log({guess})
        setGuess("")
    }

    return (
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                required
                id="guess-input"
                type="text"
                value={guess}
                pattern={".{5}"}
                minLength={5}
                maxLength={5}
                onChange={(event) => {
                const nextGuess = event.target.value.toUpperCase();
                setGuess(nextGuess)
            }}/>
        </form>
    )
}

export default GuessInput;
