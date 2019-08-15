import React from "react";
import "../Input/Input.css";
import "./Select.css";


export default ({className, title="Select wallet", children = ".aksdjfbdkljb"}) =>{
	return( 
		<section className={className}>
			<label className="control-label" >{title}</label>
			<select className="select">
				<option>{children}</option>
			</select>
			
		</section>
	)
}