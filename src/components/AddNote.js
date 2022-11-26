import React, { useState } from 'react'

function AddNote({handleAddNote,counter}) {
    const [noteText,setNoteText]=useState('');
    const  characterLimit  =200;

    const handleChange =(e)=>{
      if (characterLimit-e.target.value.length >=0){
        setNoteText(e.target.value)
       }else  {alert("You type over limit ")}
    } 

      
    const handleSaveClick =()=>{
      if (noteText.trim().length>0){
      handleAddNote(noteText)
        setNoteText('')
      }else {alert("Type  somthing  in the note and Clic Save  '-' ")}
      

        
     }
  return (
    <div className='note new '>
        <textarea rows='8'
        cols='10'
        placeholder='type to add  ... '
        value={noteText}
        onChange={handleChange}
        ></textarea>
        <div className='note-footer'>
            <small>{ characterLimit-noteText.length} remaining </small>
            <p>Total Notes : {counter}</p>
            <button onClick={handleSaveClick} className='save'>Save</button>
        </div>
    </div>
  )
}

export default AddNote