import React from 'react';
import {range} from "../../utils";

function Guess({value = ""}) {
    return (
        <p className="guess">
            {
                range(0, 5, 1).map((num) => (<span key={num} className="cell">{value[num]}</span>))
            }
        </p>
    );
}

export default Guess;
