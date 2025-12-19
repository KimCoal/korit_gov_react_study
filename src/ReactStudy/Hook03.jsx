import React, { useState } from "react";

function Hook03() {
    const [inputValue1, setInputValue1] = useState("");
    const [inputValue2, setInputValue2] = useState("");
    const [h1Text1, setH1Text1] = useState("");
    const [h1Text2, setH1Text2] = useState("");

    const inputOnchangeHandler1 = (e) => {
        setInputValue1(e.target.value);
    };
    const inputOnchangeHandler2 = (e) => {
        setInputValue2(e.target.value);
    };
    const onClickHandler = () => {
        setH1Text1(inputValue1)
        setH1Text2(inputValue2)
    }
    return (
        <div>
            <h1>{h1Text1}</h1>
            <h1>{h1Text2}</h1>
            <input
                type="text"
                value={inputValue1}
                onChange={inputOnchangeHandler1}
            />
            <input
                type="text"
                value={inputValue2}
                onChange={inputOnchangeHandler2}
            />
            <button onClick={onClickHandler}>확인</button>
        </div>
    );
}

export default Hook03;
