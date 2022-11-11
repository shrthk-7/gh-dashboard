import { Card, CardContent, CardHeader, IconButton, Paper, Typography } from '@mui/material'
import { DeleteOutlined } from '@mui/icons-material'
import React from 'react'


function NoteCard({note}) {
  return (
	// <Paper elevation={4} style={{
	// 	height: '100%'
	// }}>
	<Card elevation={4} style={{
		height: '100%'
	}}>
		<CardHeader
		action={
			<IconButton>
				<DeleteOutlined/>
			</IconButton>
		}
		title={note.title}
		subheader={note.category}
		/>
		<CardContent>
			<Typography>
				{note.details}
			</Typography>
		</CardContent>
	</Card>
	// </Paper>
  )
}

export default NoteCard