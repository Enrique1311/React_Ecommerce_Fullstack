import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
	const {
		palette: { neutral },
	} = useTheme();
	return (
		<Box
			marginTop="70px"
			padding="40px 0"
			backgroundColor={shades.primary[500]}
		>
			<Box
				width="80%"
				margin="auto"
				display="flex"
				justifyContent="space-between"
				flexWrap="wrap"
				rowGap="30px"
				columnGap="clamp(20px, 30px, 40px)"
			>
				<Box width="clamp(20%, 30%, 40%)">
					<Typography
						variant="h4"
						fontWeight="bold"
						mb="30px"
						color="secondary"
					>
						TECH.ecom
					</Typography>
					<Typography color="white">
						Shop the latest tech trends and find the gadgets you need to stay
						connected at TECH.ecom. We offer a wide selection of computers,
						smartphones, gaming consoles, and more from the top brands in the
						industry. Our secure checkout process and fast shipping ensure that
						your purchase arrives safely and on time. Contact us with any
						questions or concerns - our customer support team is here to help!
					</Typography>
				</Box>

				<Box>
					<Typography
						variant="h4"
						fontWeight="bold"
						mb="30px"
						color={shades.primary[200]}
					>
						About Us
					</Typography>
					<Typography
						mb="30px"
						color="white"
					>
						Careers
					</Typography>
					<Typography
						mb="30px"
						color="white"
					>
						Our Stores
					</Typography>
					<Typography
						mb="30px"
						color="white"
					>
						Terms & Conditions
					</Typography>
					<Typography
						mb="30px"
						color="white"
					>
						Privacy Policy
					</Typography>
				</Box>

				<Box>
					<Typography
						variant="h4"
						fontWeight="bold"
						mb="30px"
						color={shades.primary[200]}
					>
						Customer Care
					</Typography>
					<Typography
						mb="30px"
						color="white"
					>
						Help Center
					</Typography>
					<Typography
						mb="30px"
						color="white"
					>
						Track Your Order
					</Typography>
					<Typography
						mb="30px"
						color="white"
					>
						Corporate & Bulk Purchasing
					</Typography>
					<Typography
						mb="30px"
						color="white"
					>
						Returns & Refunds
					</Typography>
				</Box>

				<Box width="clamp(20%, 25%, 30%)">
					<Typography
						variant="h4"
						fontWeight="bold"
						mb="30px"
						color={shades.primary[200]}
					>
						Contact Us
					</Typography>
					<Typography
						mb="30px"
						color="white"
					>
						5000 Brandzen Street - Buenos Aires City
					</Typography>
					<Typography
						mb="30px"
						color="white"
						sx={{ wordWrap: "break-word" }}
					>
						Email: enriquespinelli.coder@gmail.com
					</Typography>
					<Typography
						mb="30px"
						color="white"
					>
						(54)111-1111
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}

export default Footer;
