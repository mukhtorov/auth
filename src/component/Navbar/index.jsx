import React from "react";
import { Container, NavItem, activeStyle, Logout, User } from "./style";
import { useHistory } from 'react-router-dom'
import { auth } from '../../root/auth'

function Navbar() {
	const history = useHistory()
	const logout = () => {
		history.push('/login')
		localStorage.removeItem('token');
		auth.signout()
	}
	return (
		<Container>
			<NavItem exact activeStyle={activeStyle} to="/buxgalter">Bugalter </NavItem>
			<NavItem exact activeStyle={activeStyle} to="/king">King </NavItem>
			<NavItem exact activeStyle={activeStyle} to="/worker">Worker </NavItem>
			<Logout onClick={logout}>
				<User>Hi {localStorage.getItem('token')}</User>
				{/* <User>Hi Sardor</User> */}
				Logout
			</Logout>
		</Container>
	);
}

export default Navbar;
