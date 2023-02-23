import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
	typography: {
		forntFamily: ['Outfit', 'sans-serif'].join(','),
		fontSize: 12,
		h1: {
			forntFamily: ['Marcellus', 'sans-serif'].join(','),
			fontSize: 48,
		},
		h2: {
			forntFamily: ['Marcellus', 'sans-serif'].join(','),
			fontSize: 36,
		},
		h3: {
			forntFamily: ['Marcellus', 'sans-serif'].join(','),
			fontSize: 20,
		},
		h4: {
			forntFamily: ['Marcellus', 'sans-serif'].join(','),
			fontSize: 14,
		},
	},
});
