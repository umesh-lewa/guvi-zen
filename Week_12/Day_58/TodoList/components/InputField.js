import React, { useState, useRef, useEffect } from "react";
import { render } from "react-dom";

const InputField = (props) => {
    const [inputValue, setInputValue] = useState("");

    const inputFieldRef = useRef();

    useEffect(() => {
        inputFieldRef.current.focus();
    });

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const submit = () => {
        if(inputValue){
            props.addTask(inputValue);
        }
        setInputValue("")
    }

    return (
        <div>
            <input ref={inputFieldRef} type="text" placeholder="Addsomething" value={inputValue} onChange={onInputChange}></input>
            <button onClick={submit}>add</button>
        </div>
    )
}

export default InputField;