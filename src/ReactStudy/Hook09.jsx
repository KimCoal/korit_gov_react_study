import React, { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/users";

function Hook09() {
    const [userList, setUserList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUser = async () => {
        try {
            setIsLoading(true);

            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error("데이터를 불러오는데 실패했습니다");
            }

            const responseData = await response.json();
            setUserList(responseData);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    if (isLoading) {
        return <div>불러오는중...</div>;
    }

    if (error) {
        return <div>에러: {error}</div>;
    }

    return (
        <div>
            <ul>
                {userList.map((user) => (
                    <li key={user.id}>
                        유저정보:{user.name} ({user.email}) ({user.phone})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Hook09;
