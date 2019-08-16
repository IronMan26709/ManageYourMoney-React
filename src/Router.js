import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import Registration from "./components/Registration/Registration.js";
import SignIn from "./components/SignIn/SignIn.js";
import NewArrival from "./components/NewArrival/NewArrival";
import Header from "./components/Header/Header";
import NewExpense from "./components/NewExpense/NewExpense";
// import NewExpense from "./components/NewExpense/NewExpense";


export default ()=>{
	return(
		<div> 
			<Header/>
			<div className="Layout">
				<Switch>
					<Route 
					    exact
					    path="/SignIn"	
				  	    render={props => (<SignIn/>)}/>
					<Route 
						exact
					    path="/NewArrival"
			       	    render={ props => (<NewArrival/>)}/>
					<Route
						exact
						path="/Registration"
						render={props => (<Registration/>)}/>
					<Route
						exact
						path="/NewExpense"
						render={props => (<NewExpense/>)}/>	
					<Redirect to="/" />
				</Switch>
			</div>
		</div>
	)		
}