import React from "react";
import {Grid, Paper, Container, Stack, Typography} from "@mui/material";
import { teal } from "@mui/material/colors";
import NoteCard from "./components/NoteCard";
import AvatarCard from "./components/AvatarCard";
import RepoCard from "./components/RepoCard";
import LanguagesCard from "./components/LanguagesCard";
import notes from './data.json';
import repos from './repos.json'

function Setup(props) {
	let { user } = props

	return (
		<>
		<Container maxWidth={'xl'}>
		<Grid container spacing={3}>
		<Grid item xs={12} md={8}>
			<Stack spacing={3} height="100%">
				<AvatarCard 
				{...user}
				/>
				<LanguagesCard/>
			</Stack>
		</Grid>
		<Grid item xs={12} md={4}>
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