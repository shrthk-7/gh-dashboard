import React from "react";
import { Card, CardContent, CardHeader, IconButton, Paper, Typography, Avatar, Stack } from '@mui/material'

let s = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."

function AvatarCard({login, url, avatar_url, location, bio}) {
	return (
	<Card elevation={10} style={{
		borderRadius:'1rem'
	}}>
		<Stack 
		direction="row" 
		spacing={2}
		p={2}>
			<Avatar src={avatar_url}
			sx={{
				height:"auto",
				width: "auto",
				maxHeight:90,
				maxWidth:90,
				marginTop:"auto",
				marginBottom:"auto"
			}}/>
			<CardHeader
			title={login}
			subheader={bio}
			sx={{
				fontWeight:"bold"
			}}
			/>
		</Stack>
	</Card>
	)
}

export default AvatarCard;