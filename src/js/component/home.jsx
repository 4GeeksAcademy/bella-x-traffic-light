import React, { useState } from 'react';


const Home = () => {
    const [color, setColor] = useState("");

    return (
        <div className="container">
            <div className="traffic-sign">
                <div className="traffic-light">
                    <div
                        className={`red-light ${color === "red" ? "active glowing" : ""}`}
                        onClick={() => setColor("red")}
                    ></div>
                    <div
                        className={`yellow-light ${color === "yellow" ? "active glowing" : ""}`}
                        onClick={() => setColor("yellow")}
                    ></div>
                    <div
                        className={`green-light ${color === "green" ? "active glowing" : ""}`}
                        onClick={() => setColor("green")}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Home;