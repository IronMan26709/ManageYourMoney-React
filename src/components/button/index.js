import React from "react";

import "./style.css";

export default ({ onClick = () => {}, title = "CLICK ME", ...rest }) => {
	return (
		<button className="button-main" onClick={onClick} {...rest}>
			{title}
		</button>
	);
};
