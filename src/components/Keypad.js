import React from "react";

function Keypad(){
    function dealWithChange(){
        console.log("Entering password...")
    }

    return(
        <input type="password" onChange={dealWithChange} />
    )
}

export default Keypad;