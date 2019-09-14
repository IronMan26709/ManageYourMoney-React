import * as types from "../actionType";
import axios from "axios";

const urlRequest = "https://fea13-andrew.glitch.me/owne"



const registrationRequest = () =>({
	type: types.REGISTRATION_REQUEST
});
export const registrationSuccess = payload =>({
	type: types.REGISTRATION_REQUEST_SUCCESS,
		payload
});
export const registrationFail = payload =>({
	type: types.REGISTRATION_REQUEST_FAIL,
	payload
});

export const changeEvent = payload =>({
	type: types.CHANGE_EVENT,
	payload
});

export const registration = payload =>{
	return dispatch => {
		dispatch(registrationRequest());

		axios ({
			method:"POST",
			url:"http://fea13-andrew.glitch.me/owner",
			data: payload
		})
			.then(res => dispatch(registrationSuccess(res)))
			.catch(err =>dispatch(registrationFail(err)))
	}
 } 
