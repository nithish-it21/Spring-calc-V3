import React from "react";
import './styles/display.css';

const Display_calc = ({ value }) => {
    return <input type="text" value={value} readOnly />;
};

export default Display_calc;
