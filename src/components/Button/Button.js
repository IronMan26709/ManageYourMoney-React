import React from "react";



export default ({title  = "click me",click, className="wrapButton"}) =>{
	return(
		<div className={className}>
            <button type="button" className="button"  onClick={click}>{title}</button>
        </div>
	);
} 