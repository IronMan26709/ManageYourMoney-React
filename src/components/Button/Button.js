import React from "react";
import "./Button.css";


export default ({title  = "click me",click, className="wrapButton"}) =>{
	return(
		<div className={className}>
            <button type="button" id="button"  onClick={click}>{title}</button>
        </div>
	);
} 