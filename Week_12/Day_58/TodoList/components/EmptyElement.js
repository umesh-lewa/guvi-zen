import React, { useEffect, useState } from "react";

const EmptyElement = (props) => {
    const [inputValue, setInputValue] = useState("");

    useEffect (() => {

        return () => {
            console.log("inside return");
        }

    }, []);

    
    return (
        <div>
            <p onClick={props.deleteElement}>Click to unmount</p>
        </div>
    )
}

export default EmptyElement;