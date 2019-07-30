import React from "react";

export default ({ number }) => {
	let string = null;
	switch (number) {
		case 1: {
			string = <span>LOL</span>;
			break;
		}

		case 2: {
			string = <span>Looser</span>;
			break;
		}

		case 3: {
			string = <span>Good</span>;
			break;
		}

		case 4: {
			string = <span>Good luck</span>;
			break;
		}

		case 5: {
			string = <span>Amaizing</span>;
			break;
		}

		default:
			string = <span>Click on The button</span>;
	}

	return string;
};
