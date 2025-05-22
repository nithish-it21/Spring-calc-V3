import React from "react";
import Button_calc from './button'
import Display_calc from './display'
import './styles/index.css'

const Calc = () => {
    return(
        <div className="outline-box-calc">
            <Display_calc className="display_calc"/>
            <Button_calc item="+" />
            <Button_calc item="1" />
            <Button_calc item="2" />
            <Button_calc item="3" />
            <Button_calc item="-" />
            <Button_calc item="4" />
            <Button_calc item="5" />
            <Button_calc item="6" />
            <Button_calc item="*" />
            <Button_calc item="7" />
            <Button_calc item="8" />
            <Button_calc item="9" />
            <Button_calc item="/" />
            <Button_calc item="=" />
            <Button_calc item="Clear" />
        </div>
    );
}

export default  Calc;