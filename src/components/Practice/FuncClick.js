import React from 'react'

function FuncClick() {

    function clicked(){
        console.log('clicked btn..');
    }

    return (
        <div>
            <button onClick={clicked}>CLick in funciton</button>
        </div>
    )
}

export default FuncClick
