import React from 'react';

function Controls (props){
    return (
        <div className="App-buttons">
            <button onClick={props.aumentar}>Aumentar</button>
            <button onClick={props.disminuir}>Disminuir</button>
            <button onClick={props.reset}>Reset</button>
        </div>
    )
}

export default Controls;