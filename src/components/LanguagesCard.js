import React from "react";
import { Card, Typography, Stack } from '@mui/material'
import { teal } from "@mui/material/colors";
import { PieChart } from 'react-minimal-pie-chart';

const data= [
	{ title: 'C++', value: 10, color: teal[700] },
	{ title: 'C', value: 15, color: teal[300] },
	{ title: 'Javascript', value: 20, color: teal[500] },
	{ title: 'Python', value:25, color: teal[200]}
]

const langs = ['C++', 'C', 'Javascript', 'Python', 'Typescript','C++', 'C', 'Javascript', 'Python', 'Typescript']

const LanguagesCard = () => {
	return (
	<Card elevation={4}
	sx={{
		height: '100%'
	}}>
		<Stack
		direction="row" 
		spacing={2}
		p={2}
		alignItems="center">
			<Stack marginRight="auto">
				{langs.slice(0,5).map((lang => {
				return (
				<Typography variant="h5">
					{lang}
				</Typography>
				)
				}))}
			</Stack>
			<PieChart data={data}
			style={{
				maxWidth: '10rem',
			}}/>
		</Stack>
	</Card>
	)
}

export default LanguagesCard;