import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton, Box, Typography, useTheme, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteForever from '@mui/icons-material/DeleteForever';
import { shades } from '../theme';
import { addToCart } from '../state';
import { useNavigate } from 'react-router-dom';

const Item = ({ item, width }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [count, setCount] = useState(1);
	const [isHovered, setIsHovered] = useState(false);
	const {
		palette: { neutral },
	} = useTheme();
	const { category, price, name, image } = item.attibutes;
	const {
		data: {
			formats: {
				medium: { url },
			},
		},
	} = image;

	return (
		<Box width={width}>
			<Box
				position='relative'
				onMouseOver={() => setIsHovered(true)}
				onMouseOut={() => setIsHovered(false)}
			>
				<img
					alt={item.name}
					width='300px'
					height='auto'
					src={`http://localhost:1337${url}`}
					onClick={() => navigate(`/item/${item.id}`)}
					style={{ cursos: 'pointer' }}
				/>
				<Box
					display={isHovered ? 'blocked' : 'none'}
					position='relative'
					bottom='10%'
					left='0'
					width='100%'
					padding='0 5%'
				>
					{/* Amount */}
					<Box
						display='flex'
						justifyContent='space-between'
					>
						<Box
							display='flex'
							alignItems='center'
							backgroundColor={shades.neutral[100]}
							borderRadius='5px'
						>
							{' '}
							<IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
								<DeleteForever />
							</IconButton>
							<Typography color={shades.primary[300]}>{count}</Typography>
							<IconButton onClick={() => setCount(count + 1)}>
								<AddIcon />
							</IconButton>
						</Box>
						{/* Button */}
						<Button
							onClick={() => {
								dispatch(addToCart({ item: { ...item, count } }));
							}}
							sx={{ backgroundColor: shades.primary[300], color: 'white' }}
						>
							Add to Cart
						</Button>
					</Box>
				</Box>
			</Box>
			<Box mt='3px'>
				<Typography
					variant='subtitle2'
					color={neutral.dark}
				>
					{category
						.replace(/([A-Z]/g, ' $1')
						.replace(/^./, (str) => str.toUpperCase())}
				</Typography>
				<Typography>{name}</Typography>
				<Typography fontWeight='bold'>${price}</Typography>
			</Box>
		</Box>
	);
};

export default Item;