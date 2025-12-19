import React from "react";

export default function React02() {
    console.log("React02 Render");
    const student = {
        name: "coal",
        age: 25,
        hobby: ["잠자기", "게임하기", "음악듣기"],
    };
    return (
        <div>
            <div>이름: {student.name}</div>
            <div>
                나이: {student.age} ({student.age > 19 ? "성인" : "미성년자"})
            </div>
            <div>
                <p>취미</p>
                <ul>
                    {/* 중괄호 = return 필요, 소괄호 = return 불필요 */}
                    {student.hobby.map((h, index) => {
                        return <li key={index}>{h}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
}
