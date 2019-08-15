import React from "react";
import "./Preview.css"
import Previewlogo from "../../images/avatar-placeholder.png";	


export default () =>{
	return(
		<div className="previewWrap">
                <img src={Previewlogo} alt="preview" id="preview"/>
        </div>
	)	
}