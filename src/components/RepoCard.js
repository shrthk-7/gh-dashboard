import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { teal } from '@mui/material/colors';

import React from 'react'

function RepoCard({repo}) {
  const {name, description, html_url, language, forks_count} = repo
  return (
	<Card elevation={10} style={{
		height: '100%',
		borderRadius: '1rem',
		borderColor: teal[400],
		borderStyle: 'solid',
		transition: 'all 0.1s linear',
	}} sx={{
		'&:hover': {
			rotate: '1.5deg'
		}
	}}>
		<CardHeader
		title={name}
		subheader={description ? description : "No desc provided"}
		/>
		<CardContent>
			<Typography>
				{language}
			</Typography>
		</CardContent>
	</Card>
  )
}

export default RepoCard