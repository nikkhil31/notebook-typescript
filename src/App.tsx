import React from 'react'
import NoteEditor from './components/NoteEditor';
import NotesList from './components/NotesList';
import NotesNevigation from './components/NotesNevigation';



const App: React.FC = () => {



  // console.log(category)

  return (

    <div className="container">
      <NotesNevigation />
      <NotesList />
      <NoteEditor />
    </div>


  )
}

export default App