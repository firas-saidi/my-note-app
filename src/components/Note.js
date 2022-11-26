import React from 'react'
import {MdDeleteForever} from "react-icons/md"

const Note = ({id,text,date,handleDeletNote,colorNote,Color}) => {

  return (
    <div className='note' key={id} style={{  backgroundColor: `${colorNote }`}}>
        <span style={{color:`${Color}`}}>{text} </span>
        <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever onClick={()=> handleDeletNote(id)} className='icon' size='1.3em'></MdDeleteForever>
        </div>
        
    </div>
  )
}

export default Note