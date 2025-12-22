import React, { useEffect, useState } from "react";

function SignupForm() {
    /**
     * 이메일 인풋에 입력이 될때 유효성 검사 실시
     * 골뱅이 포함여부에 따라서 없으면 에러메세지로 "이메일 형식에 맞게 입력해주세요" 출력
     * 비밀번호 인풋에 입력이 될때 유효성 검사 실시
     * 8자리 이상인지 여부에 따라서 아니면 에러메세지로 "비밀번호는 8자리 이상이어야 합니다" 출력
     * 유효성 검사에 문제가 없으면 버튼 활성화 문제가 하나라도 있으면 비활성화
     * 가입하기 버튼을 누르면 alert 가입되었습니다 출력
     */
    const [iV, setIV] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState({
        email: "",
        password: "",
    });

    const [disabled, setDisabled] = useState(true);

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setIV((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (name === "email") {
            setError((prev) => ({
                ...prev,
                [name]: value.includes("@")
                    ? ""
                    : "이메일 형식에 맞게 입력해주세요",
            }));
        }

        if (name === "password") {
            setError((prev) => ({
                ...prev,
                [name]:
                    value.length >= 8
                        ? ""
                        : "비밀번호는 8자리 이상이여야합니다",
            }));
        }
    };

    useEffect(() => {
        if (
            iV.email.includes("@") &&
            iV.password.length >= 8
        ) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [iV]);

    const onSubmitHandler = () => {
        alert("가입되었습니다");
    };

    return (
        <div>
            <div>
                <input
                    type="email"
                    placeholder="이메일"
                    value={iV.email}
                    name="email"
                    onChange={onChangeHandler}
                />
                {error.email && <p>{error.email}</p>}
            </div>
            <div>
                <input
                    type="password"
                    placeholder="비밀번호"
                    value={iV.password}
                    name="password"
                    onChange={onChangeHandler}
                />
                <p>{error.password}</p>
            </div>
            <button disabled={disabled} onClick={onSubmitHandler}>가입하기</button>
        </div>
    );
}

export default SignupForm;
