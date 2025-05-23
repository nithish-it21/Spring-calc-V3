import React, { useState } from "react";
import Button_calc from './button';
import Display_calc from './display';
import './styles/index.css';

const Calc = () => {
    const [display, setDisplay] = useState("");

    const handleClick = (item) => {
        setDisplay(prev => prev + item);
    };

    return (
        <div className="outline-box-calc">
            <Display_calc value={display} />
            {["+", "1", "2", "3", "-", "4", "5", "6", "*", "7", "8", "9", "/", "=", "Clear"].map((item, index) => (
                <Button_calc
                    key={index}
                    item={item}
                    onClick={() => {
                        if (item === "Clear") setDisplay("");
                        else if (item === "=") {
                            // You can handle evaluation later or connect to backend
                        } else handleClick(item);
                    }}
                />
            ))}
        </div>
    );
};

export default Calc;
