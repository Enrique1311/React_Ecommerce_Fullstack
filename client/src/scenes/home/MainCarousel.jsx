import React from 'react';
import { Box, Typography, IconButton, useMediaQuery } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { shades } from '../../theme';

// imports the image from assets
const importAll = (r) =>
	r.keys().reduce((acc, item) => {
		acc[item.replace('./', '')] = r(item);
		return acc;
	}, {});

export const heroTextureImports = importAll(
	require.context('../../assets', false, /\.(png|jpe?g|svg)$/)
);

const MainCarousel = () => {
	const isNonMobile = useMediaQuery('(min-width:600px)');
	return (
		<Carousel
			infiniteLoop={true}
			showThumbs={false}
			showIndicators={false}
			showStatus={false}
			renderArrowPrev={(onClickHandler, hasPrev, label) => (
				<IconButton
					onClick={onClickHandler}
					sx={{
						position: 'absolute',
						top: '50%',
						left: '0',
						color: 'white',
						padding: '5px',
						zIndex: '10',
					}}
				>
					<ArrowBackIcon sx={{ fontSize: 40 }} />
				</IconButton>
			)}
			renderArrowNext={(onClickHandler, hasNext, label) => (
				<IconButton
					onClick={onClickHandler}
					sx={{
						position: 'absolute',
						top: '50%',
						right: '0',
						color: 'white',
						padding: '5px',
						zIndex: '10',
					}}
				>
					<ArrowForwardIcon sx={{ fontSize: 40 }} />
				</IconButton>
			)}
		>
			{Object.values(heroTextureImports).map((texture, index) => (
				<Box key={`carousel-image-${index}`}>
					<img
						src={texture}
						alt={`carousel-${index}`}
						style={{
							width: '100%',
							height: '700px',
							objectFit: 'cover',
							backgroundAttachment: 'fixed',
						}}
					/>
					<Box
						color='white'
						padding='20px 60px 20px 20px'
						borderRadius='10px'
						textAlign='left'
						backgroundColor='rgb(0, 0, 0, 0.6)'
						position='absolute'
						top='44%'
						left={isNonMobile ? '10%' : '0'}
						right={isNonMobile ? undefined : '0'}
						margin={isNonMobile ? undefined : '0 auto'}
						maxWidth={isNonMobile ? undefined : '240px'}
					>
						<Typography color={shades.secondary[100]}>NEW ITEMS!</Typography>
						<Typography variant='h1'>Promos</Typography>
						<Typography
							display='flex'
							alignItems='center'
							fontSize='medium'
							fontWeight='bold'
							color={shades.secondary[300]}
							sx={{ cursor: 'pointer' }}
						>
							Discover More
							<ArrowForwardIcon />
						</Typography>
					</Box>
				</Box>
			))}
		</Carousel>
	);
};
export default MainCarousel;
