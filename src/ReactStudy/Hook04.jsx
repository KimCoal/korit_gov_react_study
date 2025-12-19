import React, { useState } from "react";

function Hook04() {
    const [inputValue, setInputValue] = useState({
        v1: "",
        v2: "",
        v3: "",
    });

    const onChangeHanler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        const newInputValue = {
            ...inputValue,
            [name]: value,
        };

        setInputValue(newInputValue);
    };

    return (
        <div>
            <h1>{inputValue.v1}</h1>
            <h1>{inputValue.v2}</h1>
            <h1>{inputValue.v3}</h1>
            <input name="v1" type="text" onChange={onChangeHanler} />
            <input name="v2" type="text" onChange={onChangeHanler} />
            <input name="v3" type="text" onChange={onChangeHanler} />
        </div>
    );
}

export default Hook04;
