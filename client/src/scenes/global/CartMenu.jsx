import { Box, Button, Divider, IconButton, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { shades } from '../../theme';
import { removeFromCart, setIsCartOpen } from '../../state';
import { useNavigate } from 'react-router-dom';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const FlexBox = styled(Box)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const CartMenu = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart.cart);
	const isCartOpen = useSelector((state) => state.cart.isCartOpen);

	const totalPrice = cart.reduce((total, item) => {
		return total + item.count * item.attributes.price;
	}, 0);

	return (
		<Box
			display={isCartOpen ? 'block' : 'none'}
			backgroundColor='rgba(0, 0, 0, 0.5)'
			position='fixed'
			zIndex={10}
			width='100%'
			height='100%'
			left='0'
			top='0'
			overflow='auto'
		>
			<Box
				position='fixed'
				right='0'
				bottom='0'
				width='max(400px, 30%)'
				height='100%'
				backgroundColor='white'
			>
				<Box
					padding='30px'
					overflow='auto'
					height='100%'
				>
					{/* HEADER */}
					<FlexBox mb='15px'>
						<Typography variant='h3'>SHOPPING CART ({cart.length})</Typography>
						<IconButton
							onClick={() => dispatch(setIsCartOpen({}))}
							sx={{
								right: '-30px',
								top: '-30px',
							}}
						>
							<HighlightOffIcon sx={{ fontSize: '30px' }} />
						</IconButton>
					</FlexBox>

					{/* CART LIST */}
					<Box>
						{cart.map((item) => (
							<Box key={`${item.attributes.name}-${item.id}`}>
								<FlexBox p='15px 0'>
									<Box flex='1 1 40%'>
										<img
											alt={item?.name}
											width='123px'
											height='164px'
											src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
										/>
									</Box>
									<Box flex='1 1 60%'>
										<FlexBox mb='5px'>
											<Typography fontWeight='bold'>
												{item.attributes.name}
											</Typography>
											<IconButton
												onClick={() =>
													dispatch(removeFromCart({ id: item.id }))
												}
											>
												<HighlightOffIcon />
											</IconButton>
										</FlexBox>
										<Typography>{item.attributes.shortDescription}</Typography>
										<FlexBox m='15px 0'>
											<Box
												display='flex'
												alignItems='center'
												border={`1.5px solid ${shades.neutral[500]}`}
											></Box>
											{/* Price */}
											<Typography fontWeight='bold'>
												${item.attributes.price}
											</Typography>
										</FlexBox>
									</Box>
								</FlexBox>
								<Divider />
							</Box>
						))}
					</Box>

					{/* ACTIONS */}
					<Box m='20px 0'>
						<FlexBox m='20px 0'>
							<Typography fontWeight='bold'>SUBTOTAL</Typography>
							<Typography fontWeight='bold'>${totalPrice}</Typography>
						</FlexBox>
						<Button
							sx={{
								backgroundColor: shades.secondary[100],
								color: 'black',
								fontWeight: 'bold',
								borderRadius: 10,
								minWidth: '100%',
								padding: '15px 40px',
								m: '20px 0',
							}}
							onClick={() => {
								navigate('/checkout');
								dispatch(setIsCartOpen({}));
							}}
						>
							CHECKOUT
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default CartMenu;
