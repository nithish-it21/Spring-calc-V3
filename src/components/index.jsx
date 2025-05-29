import React, { useState } from "react";
import Button_calc from './button';
import Display_calc from './display';
import './styles/index.css';

const Calc = () => {
    const [display, setDisplay] = useState("");

    const handleClick = (item) => {
        setDisplay(prev => prev + item);
    };
    
    const fetchcall = (displaystring) => {
        fetch(`/api/calc/fintot?input=${encodeURIComponent(displaystring)}`)
            .then(response => {
                if (!response.ok) return response.text().then(text => { throw new Error(text); });
                return response.text();
            })
            .then(result => {
                setDisplay(result);
            })
            .catch(error => {
                setDisplay(error.toString());
            })         
    }

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
                            let org_var;
                            if (isNaN(display[display.length - 1])) {
                                org_var = display.slice(0, -1);
                            } else {
                                org_var = display;
                            }
                            fetchcall(org_var);                           
                        } else handleClick(item);
                    }}
                />
            ))}
        </div>
    );
};

export default Calc;
