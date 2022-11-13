// import Setup from './typography'
import Grid from './Grid'
// import Card from './components/NoteCard'
// import Setup from './components/AvatarCard'

import user from './user.json'

function App() {
  return (
    <>
    <Grid user={user}/>
    </>
  );
}

export default App;