import React, { useState } from "react";

function Hook05() {
    const [inputValue,setInputValue] = useState();
    return (
        <div>
            <h1>이름:</h1>
            <h1>나이:</h1>
            <h1>주소:</h1>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <button>리셋</button>
        </div>
    );
}

export default Hook05;
