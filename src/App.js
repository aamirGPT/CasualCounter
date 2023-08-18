import "./App.css";
import React, { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const increaseCount = () => setCount(count + 1);
    const resetCount = () => setCount(0);
    const decreaseCount = () => setCount(count - 1);
    const increaseCountByTen = () => setCount(count + 10);
    const decreaseCountByTen = () => setCount(count - 10);
    return (
        <div className="App">
            <div className="Counter_Heading">A Casual Counter</div>
            <div className="Counter_Body">{count}</div>
            <div className="Counter_Functions">
                <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={increaseCount}
                >
                    Increase
                </button>
                <button
                    type="button"
                    className="btn btn-warning"
                    onClick={resetCount}
                >
                    Reset
                </button>
                <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={decreaseCount}
                >
                    Decrease
                </button>
            </div>
            <div className="Counter_Tens">
                <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={increaseCountByTen}
                >
                    +10
                </button>
                <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={decreaseCountByTen}
                >
                    -10
                </button>
            </div>
        </div>
    );
}

export default App;
