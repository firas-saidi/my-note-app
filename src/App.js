import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import NoteList from './components/NoteList';
import Search from './components/Search';
import Header from './components/Header';



function App() {
  

  
  const [notes,setNotes]=useState([
  {
    id:uuidv4(),
    text:"This is the note From state ",
    date:"27/08/1997",

  },{
    id:uuidv4(),
    text:"This is the note 1  From state ",
    date:"27/07/1997",

  },{
    id:uuidv4(),
    text:"This is texemple of note ! ",
    date:"27/09/1997",

  }
])

useEffect(() => {
  const savedNotes = JSON.parse(
    localStorage.getItem('FIRAS')
  );

  if (savedNotes) {
    setNotes(savedNotes);
  }
}, []);
useEffect(() => {
  localStorage.setItem(
    'FIRAS',
    JSON.stringify(notes)
  );
}, [notes]);





const [searchText,setSearchText]=useState('');
const [darkMode,setDarkMode]=useState(false);
const [noteColor,SetNoteColor]=useState("yellow");
const [Color,SetColor]=useState("black");


const addNote =(text)=>{
  const date =new Date()
  const newNote={
    id:uuidv4(),
    text:text,
    date:date.toLocaleDateString()
  }
  const newNotes =[...notes , newNote];
  setNotes(newNotes)
}

const deletNote=(id)=>{
 const newNotes= notes.filter((note)=>note.id !==id)
 setNotes(newNotes)
}




  return (
    <div className={`${darkMode && "dark-mode"}`}>
    <div className='container '>
      <Header setDarkMode={setDarkMode} noteColor={SetNoteColor} SetColor={SetColor}/>
      <Search handleSearchNote={setSearchText}/>
      <NoteList 
      Color={Color}
      colorNote={noteColor}
      notes={notes.filter((one)=>one.text.toLowerCase().includes(searchText))} 
      handleAddNote={addNote} 
      handleDeletNote= {deletNote} />
    </div>
    </div>
  );
}

export default App;
