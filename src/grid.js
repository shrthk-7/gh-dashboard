import React from "react";
import {Grid, Paper, Container, Stack, Typography} from "@mui/material";
import { indigo, teal } from "@mui/material/colors";
import NoteCard from "./components/NoteCard";
import AvatarCard from "./components/AvatarCard";
import RepoCard from "./components/RepoCard";
import notes from './data.json';

import repos from './repos.json'
import { Palette } from "@mui/icons-material";

function Setup(props) {
	let { user } = props
	// console.log(user)

	return (
		<>
		<Container >
		<Grid container spacing={3}>
		<Grid item xs={12} md={8}>
			<Stack spacing={3}>
				<AvatarCard 
				{...user}
				/>
				<NoteCard note={notes[0]}/>
			</Stack>
		</Grid>
		<Grid item xs={12} md={4} gridRow={"1/-1"}>
			<NoteCard note={notes[0]}/>
		</Grid>
		</Grid>
		<Paper elevation={5} sx={{
			padding:1,
			marginTop:2,
			backgroundColor: teal[900]
		}}>
		<Typography variant={"h3"} 
		paddingLeft={2}
		paddingTop={4}
		>
			Repositories
		</Typography>
		<Grid container 
		spacing={3} 
		marginTop={4}>
			{repos.map(repo => {
			return (
			<Grid item 
			xs={12} md={4}>
				<RepoCard repo={repo}/>
			</Grid>
			)
			})}
		</Grid>
		</Paper>
		</Container>
		</>
	)
}

export default Setup