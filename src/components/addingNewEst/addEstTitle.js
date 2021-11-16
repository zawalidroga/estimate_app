import React, { useState } from "react";

const AddEstTitle = (props) => {
    const [inputValue, setInputValue] = useState();

    const getInputValue = (e) => {
        setInputValue(inputValue => e.target.value)
    }

    const keyDownHandler = (e) => {
        if (e.key === 'Enter') {
            console.log(inputValue)
            props.letsAdd(inputValue)
        }
    }

    return(
        <div>
            <input onKeyDown={keyDownHandler} onChange = {getInputValue}></input>
        </div>
    )
}


export default AddEstTitle; 