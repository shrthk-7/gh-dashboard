// import Setup from './typography'
import Grid from './grid'
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