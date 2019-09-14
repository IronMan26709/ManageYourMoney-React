import * as types from "../actionType"

const initialState = {
	user: null,
	isFetching: false,
};

export default (state = initialState, {type, payload}) =>{
	switch(type){
		case types.REGISTRATION_REQUEST : {
			return{ ...state, isFetching: true};
		}
		case types.REGISTRATION_REQUEST_SUCCESS : {
			console.log("REGISTRATION_REQUEST_SUCCESS",payload)
			return{ ...state, isFetching: true};
		}
		case types.REGISTRATION_REQUEST_FAIL : {
			console.log("REGISTRATION_REQUEST_FAIL",payload)
			return{ ...state, isFetching: false};
		}
		case types.CHANGE_EVENT : {
			console.log("CHANGE_EVENT",payload)
			return {...state, user: payload }
		}
		default:{
			return state;
		}
	}
}
