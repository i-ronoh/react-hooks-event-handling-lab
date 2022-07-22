import React from "react";

function EyesOnMe(){
    function dealWithFocus(){
        console.log("Good!");
    }

function dealWithBlur(){
    console.log("Hey! Eyes on me!");
}
    return(
        <button onFocus={dealWithFocus} onBlur={dealWithBlur}>Eyes on me</button>
    );
}

export default EyesOnMe;
