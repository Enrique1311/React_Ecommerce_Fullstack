import React from 'react';
import './NavBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { Badge, Box, IconButton } from '@mui/material';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { shades } from '../../theme';
import { setIsCartOpen } from '../../state';

const NavBar = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart.cart);

	return (
		<Box className='navbar-box'>
			<Box className='navbar-box-content'>
				<Box
					className='navbar-name'
					onClick={() => navigate('/')}
				>
					TECH.ecom
				</Box>
				<Box className='navbar-icons-container'>
					<IconButton>
						<SearchIcon className='navbar-icon' />
					</IconButton>
					<IconButton>
						<AccountCircleIcon className='navbar-icon' />
					</IconButton>

					<IconButton onClick={() => dispatch(setIsCartOpen({}))}>
						<Badge
							badgeContent={'4'}
							color='secondary'
							invisible={false}
						>
							<LocalMallRoundedIcon className='navbar-icon' />{' '}
						</Badge>
					</IconButton>

					<IconButton>
						<MenuIcon className='navbar-icon' />
					</IconButton>
				</Box>
			</Box>
		</Box>
	);
};

export default NavBar;
