import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import logo from "../../images/1.png";
import Avatar from "../../images/avatar.png";



export default ( )=>{
	return(
        <header>
			<div className = "headerFlex">
				<div className="logoHeaderWrap">
					<img className="logo" src={logo} alt="MoneyLogo"/>
					<h1 className = "brandName" >Manage Your Money</h1>
				</div>
				<ul className="navWrap">
						<li><Link className="link" to="/NewPoket">Новый кошелёк</Link></li>
						<li><Link className="link" to="/NewExpense">Новая трата</Link></li>
						<li><Link className="link" to="/NewArrival">Поступление</Link></li>
						<li>Отчёт</li>	
				</ul>
				<div className="registWrap" >
					<div className="registr">
						<Link className="link"id="sign-inBtn" to="/SignIn">Вход</Link>
						<Link className="link" id="registParagraph" to="/Registration">Регистрация</Link>
					</div>
					<div className="ava">
						<img id="avatarka" className="avatarka" src= {Avatar} width="40" height="40"  alt="avatar"/>
					</div>
				</div>
			</div>
		</header>
	);
}