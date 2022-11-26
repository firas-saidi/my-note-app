import AddNote from './AddNote'
import Note from './Note'

const NoteList  = ({notes,handleAddNote,handleDeletNote,colorNote,Color,}) =>  {
  const ca= notes.filter(item => item.id );
  const counter=ca.length


  return (
    <div className='notes-list' >
        {notes.map(one=> 
        <Note id={one.id} text={one.text} date={one.date} handleDeletNote={handleDeletNote} colorNote={colorNote}
        Color={Color}  />
          )}
        
      <AddNote handleAddNote={handleAddNote} counter={counter}/>

    </div>
  )
}

export default NoteList