import React from "react";
import './styles/button.css';

const Button_calc = ({ item, onClick }) => {
    return <button onClick={onClick}>{item}</button>;
};

export default Button_calc;
