import React, { useState, useEffect } from "react";
import "./carousel.css";

const Carousel = ({ children }) => {
    const [counter, setCounter] = useState(1);
    const [pause, setPause] = useState(false);
    const content = children;

    const handleNext = () => {
        if (counter !== content.length) {
            setCounter(counter + 1);
        } else {
            setCounter(1);
        }
    };

    const handlePre = () => {
        if (counter !== 1) {
            setCounter(counter - 1);
        } else {
            setCounter(content.length);
        }
    };

    const handlePage = (page) => {
        setCounter(page);
    };

    const handleMouse = () => {
        setPause(!pause);
    };

    useEffect(() => {
        let interval = setInterval(() => {
            if (!pause) {
                handleNext();
            } else {
                clearInterval(interval);
            }
        }, 5000);
        return () => clearInterval(interval);
    });

    return (
        <div className="App">
            <div
                className="slide"
                onMouseEnter={handleMouse}
                onMouseLeave={handleMouse}
            >
                {content.map((item, index) => (
                    <div
                        className={
                            counter - 1 === index ? "show w-full" : "not-show"
                        }
                        key={index}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
