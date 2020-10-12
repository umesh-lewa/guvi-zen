import React, { useState, useRef, useEffect } from "react";

const LoginForm = (props) => {

    const [usernameValue, setUsernameValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [usernameValueDisplay, setUsernameValueDisplay] = useState("");
    const [passwordValueDisplay, setPasswordValueDisplay] = useState("");
    const [currentStyle, setCurrentStyle] = useState({});

    const usernameRef = useRef();

    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    const onUsernameInputChange = (event) => {
        setUsernameValue(event.target.value);
    }

    const onPasswordInputChange = (event) => {
        setPasswordValue(event.target.value);
    }

    let defaultStyle = {
        
    };

    let incorrectValueStyle = {
        border : '2px solid red'
    };

    
    const submitForLogin = () => {
        if (usernameValue == "umesh" && passwordValue == "12345") {
            alert("Login Successful");
            setUsernameValueDisplay(usernameValue);
            setPasswordValueDisplay(passwordValue);
            setCurrentStyle(defaultStyle);

        } else if (0 === usernameValue.length || 0 === passwordValue.length) {
            alert("Username or password is empty");
        } else {
            alert("Username or Password is wrong");
            //currentStyle = incorrectValueStyle;
            setCurrentStyle(incorrectValueStyle);
        }
    }

    return (
        <div>
            <input style={currentStyle} ref={usernameRef} type="text" placeholder="Your Username" value={usernameValue} onChange={onUsernameInputChange}></input>
            <input style={currentStyle} type="text" placeholder="Your Password" value={passwordValue} onChange={onPasswordInputChange}></input>
            <button onClick={submitForLogin}>Login</button>
            <p>{usernameValueDisplay}</p>
            <p>{passwordValueDisplay}</p>
        </div>
    )
}

export default LoginForm;