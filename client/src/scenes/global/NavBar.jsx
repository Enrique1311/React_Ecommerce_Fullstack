import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Badge, Box, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
		<Box
			display='flex'
			alignItems='center'
			width='100%'
			height='60px'
			backgroundColor={shades.primary[500]}
			position='fixed'
			zIndex='1'
			padding='0 15px'
		>
			<Box
				display='flex'
				justifyContent='space-between'
				alignItems='center'
				width='100%'
				margin='auto'
			>
				<Box
					onClick={() => navigate('/')}
					sx={{ '&:hover': { cursor: 'pointer' } }}
					color={shades.secondary[100]}
					fontSize='medium'
				>
					TECH.ecom
				</Box>
				<Box
					display='flex'
					justifyContent='space-between'
					columnGap='10px'
					zIndex='5'
				>
					<IconButton sx={{ color: 'white' }}>
						<SearchIcon />
					</IconButton>
					<IconButton sx={{ color: 'white' }}>
						<AccountCircleIcon className='navbar-icon' />
					</IconButton>
					<IconButton
						onClick={() => dispatch(setIsCartOpen({}))}
						sx={{ color: 'white' }}
					>
						<Badge
							badgeContent={cart.length}
							color={'red'}
							invisible={cart.length === 0}
						>
							<ShoppingCartIcon className='navbar-icon' />{' '}
						</Badge>
					</IconButton>
					<IconButton sx={{ color: 'white' }}>
						<MenuIcon className='navbar-icon' />
					</IconButton>
				</Box>
			</Box>
		</Box>
	);
};

export default NavBar;
