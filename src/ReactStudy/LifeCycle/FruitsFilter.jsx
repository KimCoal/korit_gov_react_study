import React, { useEffect, useState } from "react";

function FruitsFilter() {
    const fruits = [
        "Apple",
        "Banana",
        "Cherry",
        "Grape",
        "Orange",
        "Strawberry",
        "WaterMellon",
    ];
    const [result, setResult] = useState(fruits);
    const [iV, setIV] = useState("S");

    useEffect(() => {
        const newR = fruits.filter((fruit) =>
            fruit.toLowerCase().includes(iV.toLowerCase())
        );
        setResult(newR);
        console.log("마운트 됨")
        return () => {
            console.log("언마운트 됨")
        }

    }, [iV]);

    return (
        <div>
            <input
                type="text"
                onChange={(e) => setIV(e.target.value)}
                placeholder="과일 이름을 입력하세요"
            />
            <ul>
                {result.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
}

export default FruitsFilter;
