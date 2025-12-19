import "./App.css";
import Hook01 from "./ReactStudy/Hook01";
import CountState from "./ReactStudy/Hook02/CountState";
import Hook03 from "./ReactStudy/Hook03";
import Hook04 from "./ReactStudy/Hook04";
import React01 from "./ReactStudy/React01";
import React02 from "./ReactStudy/React02";
import React03 from "./ReactStudy/React03";
import React04 from "./ReactStudy/React04";

function App() {
    const name = "coal";
    const age = 25;
    return (
        <>
            {/* <React01 /> */}
            {/* <React02 /> */}
            {/* <React03
                name={name}
                age={age}
                address={"부산시"}
                tel={"010-1234-1234"}
            /> */}
            {/* <React04>
              <h1>자식요소</h1>
            </React04> */}
            {/* <Hook01 /> */}
            {/* <CountState /> */}
            {/* <Hook03 /> */}
            <Hook04 />
        </>
    );
}

export default App;
