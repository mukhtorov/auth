import React from "react";
import { Container, Logout, User } from "./style";
import { useHistory } from 'react-router-dom';
import { auth } from '../../root/auth';
import { Dropdown } from '../Generic';
import { option1, option2, option3 } from '../../mockData/dropdown'
function Navbar({ location }) {
	const history = useHistory()
	const logout = () => {
		history.push('/login')
		localStorage.removeItem('token');
		localStorage.clear();
		auth.signout()
	}
	const onSelect = (e) => {
		history.push(`/${e}`)
		// history.push(`${location.pathname}/${e}`)
	}
	return (
		<Container>
			<Dropdown
				Key="basic-1"
				basic
				arrow
				placeholder="select"
				options={option1}
				dwidth={100}
				onSelect={onSelect}
			/>
			<Dropdown
				Key="basic-2"
				basic
				arrow
				dwidth={100}
				placeholder="select"
				options={option2}
				onSelect={onSelect}
			/>
			<Dropdown
				Key="basic-3"
				basic
				dwidth={100}
				arrow
				placeholder="select"
				options={option3}
				onSelect={onSelect}
			/>

			<Logout onClick={logout}>
				<User>Hi {localStorage.getItem('token')}</User>
				Logout
			</Logout>
		</Container>
	);
}

export default Navbar;
